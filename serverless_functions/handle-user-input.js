exports.handler = async function (event) {
  return {
    statusCode: 200,
    body: `${event.queryStringParameters.input || "No input found"}`,
  }
}
