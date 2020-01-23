module.exports = (routes) => {
  let currentRoute = null

  const fixLinks = () => {
    const links = document.querySelectorAll("a")
    links.forEach((a) => {
      const { pathname } = a
      a.href = "#" + pathname
    })
  }

  const renderRoute = (someRoute) => {
    const method = "GET"
    const routesForMethod = routes[method] || {}
    const routeForUrl = routesForMethod[someRoute] || null

    if (routeForUrl !== null) {
      // TODO: Implement async support
      const result = routeForUrl()
      return result
    } else {
      throw new Error("no route fam")
    }
  }

  const setRoute = (newRoute) => {
    document.location.href = "#" + newRoute
    document.body.innerHTML = renderRoute(newRoute)
    fixLinks()
    currentRoute = newRoute
  }

  const main = () => {
    const hashIndex = document.location.href.indexOf("#")

    if (hashIndex === -1) {
      setRoute("/")
    } else {
      currentRoute = document.location.href.slice(hashIndex + 1)
      document.body.innerHTML = renderRoute(currentRoute)
      fixLinks()
    }
  }

  window.addEventListener("hashchange", main, false)
  main()
}
