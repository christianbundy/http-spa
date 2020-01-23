const head = "<head><style>html { font-size: 200%; }</style></head>"
const template = (s) => `<!DOCTYPE html><html>${head}<body>${s}</body></html>`
const a = ({ href }, s) => `<a href="${href}">${s}</a>`

const routes = {
  GET: {
    "/": () => template('welcome to the root page, please go ' + a({ href: "/forward" }, "forward")),
    "/forward": () => template('you did it! now go ' + a({ href: "/" }, "back"))
  }
}

try {
  const httpInterface = require("./http")
  httpInterface(routes)
  console.error("Started HTTP server, skipping Web API")
} catch (e) {
  console.error("Could not start HTTP server, falling back to Web API.")
  const webApiInterface = require("./web-api")
  webApiInterface(routes)
}
