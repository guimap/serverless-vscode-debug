async function handler (event: any) {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Tamu junto!"
    })
  }
  return response
}
module.exports = { handler }
