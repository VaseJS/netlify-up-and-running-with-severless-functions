const fetch = require('node-fetch')

exports.handler = async function(){
  const POKE_API = 'https://pokeapi.co/api/v2/pokemon/ditto'
  const response = await fetch(POKE_API)
  const data = await response.json()

/* XMLHttpRequest
  const req = new XMLHttpRequest();
  let response = '';

  const getData = ()=>{
    req.open('GET', POKE_API);
    req.responseType = 'json';
    req.onload = ()=>{
      response = req.response
      console.log(req.response)
    }
    req.send();
  }
*/

  console.log(data)

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}
