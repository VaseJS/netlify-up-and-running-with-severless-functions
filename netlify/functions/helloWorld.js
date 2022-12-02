exports.handler = async function(){
  return{
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin':'*'
    },
    body: JSON.stringify({
      message: 'Hello world!'
    })
  }
}
