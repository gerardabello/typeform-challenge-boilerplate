import fetch from 'isomorphic-fetch'

const API_HOST = 'https://api.typeform.com'

export async function getForm (uid) {
  const url = `${API_HOST}/forms/${uid}`

  let resp = await fetch(url)
  const form = await resp.json()

  resp = await fetch(form.theme.href)
  const theme = await resp.json()

  return {
    ...form,
    theme
  }
}
