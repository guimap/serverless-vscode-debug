import { APIGatewayProxyEvent } from 'aws-lambda'

exports.execute = (event: APIGatewayProxyEvent) => {
  console.log('Running')
  const response = {
    statusCode: 200,
    body: event
  }
  return JSON.stringify(response)
}