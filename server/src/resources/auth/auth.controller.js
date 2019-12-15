const authorization = (req, res) => {
  const { userName, password } = req.body
  let authorized = false
  if (userName === 'test' && password === 'testPASS') {
    authorized = true
  }
  res.json({
    authorized
  })
}
export default {
  authorization
}
