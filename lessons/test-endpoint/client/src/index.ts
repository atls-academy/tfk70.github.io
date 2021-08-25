const helloButton = document.getElementById('hello')
const reverseInput = document.getElementById('reverse-input')
const reverseButton = document.getElementById('reverse-button')
const serverResponse = document.getElementById('server-response')

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': '*',
}

const renderResponse = (response: Response) => {
  response.text().then((text) => {
    ;(serverResponse as HTMLElement).innerHTML = text
  })
}

// TODO URL from environment

const helloHandler = () => {
  fetch('http://localhost:4000/hello', { headers }).then(renderResponse)
}

const reverseHandler = () => {
  fetch(`http://localhost:4000/reverse?value=${(reverseInput as HTMLInputElement).value}`, {
    headers,
  }).then(renderResponse)
}

helloButton?.addEventListener('click', helloHandler)
reverseButton?.addEventListener('click', reverseHandler)
