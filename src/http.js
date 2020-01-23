module.exports = (routes) => {
  const http = require("http")
  const server = http.createServer((req, res) => {
    const { method, url } = req
    const routesForMethod = routes[method] || {}
    const routeForUrl = routesForMethod[url] || null

    if (routeForUrl !== null) {
      // TODO: Implement async support
      const result = routeForUrl()
      res.write(result)
    }

    res.end()
  })
  server.on("clientError", (err, socket) => {
    socket.end("HTTP/1.1 400 Bad Request\r\n\r\n")
  })
  server.listen(8000)
}
