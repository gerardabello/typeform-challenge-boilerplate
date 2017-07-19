export function getGalleries (form) {
  const blocks = form.fields.filter(block => block.properties.choices != null)
  return blocks.map(block => {
    return {
      title: block.title,
      products: getProductsForBlock(form, block.id)
    }
  })
}

function getProductsForBlock (form, blockID) {
  const block = form.fields.find(block => block.id === blockID)

  return block.properties.choices.map(choice => {
    return {
      name: choice.label,
      image: choice.attachment.href,
      price: getPriceForProduct(form, block.id, choice.id)
    }
  })
}

function getPriceForProduct (form, blockID, choiceID) {
  let block = form.fields.find(block => block.id === blockID)

  if (!block.properties.choices) {
    throw new Error('Block has no choices')
  }

  let choice = block.properties.choices.find(choice => choice.id === choiceID)

  let logic = form.logic.find(b => b.ref === block.ref)

  if (!logic) {
    return 0
  }

  let action = logic.actions
    .filter(action => action.action === 'add')
    .filter(action => action.details.target.value === 'price')
    .filter(action => action.condition.op === 'is')
    .find(
      action =>
        action.condition.vars.find(v => v.type === 'choice').value ===
        choice.ref
    )

  return action.details.value.value
}
