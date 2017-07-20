export function getNormalizedForm (form) {
  let nform = { title: form.title, theme: form.theme }

  nform.fields = form.fields
    .map(block => {
      return normalizeBlock(form, block.id)
    })
    .filter(block => !!block)

  return nform
}

const normalizers = {
  picture_choice: normalizePictureChoice,
  statement: normalizeStatement
}

function normalizeBlock (form, blockID) {
  const block = form.fields.find(block => block.id === blockID)

  const normalizer = normalizers[block.type]

  if (typeof normalizer !== 'function') {
    return null
  }

  return normalizer(form, blockID)
}

function normalizeStatement (form, blockID) {
  const block = form.fields.find(block => block.id === blockID)

  return block
}

function normalizePictureChoice (form, blockID) {
  const block = form.fields.find(block => block.id === blockID)

  const products = block.properties.choices.map(choice => {
    return {
      name: choice.label,
      image: choice.attachment.href,
      price: getPriceForChoice(form, block.id, choice.id)
    }
  })

  return {
    type: 'picture_choice',
    products
  }
}

function getPriceForChoice (form, blockID, choiceID) {
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
