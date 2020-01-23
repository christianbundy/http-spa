# HTTP-SPA

> Write applications with a basic URL router and export HTTP and SPA apps.

**Please help me find a better project that does this!** I'm sure I'm not the
first person to think of this, but I can't find anyone else working on it.

Your application should only be aware of the router, it shouldn't care about
whether it's run over HTTP or as a single-page web app. In this prototype I've
used an interface that looks like this:

```javascript
const routes = {
  GET: {
    "/": () => "hello world"
  }
};
```

If you run this via Node.js, it should wait for an HTTP request and respond
with your "hello world". If you run it with a web app, it should run as an SPA
that runs entirely in your browser via JavaScript.

- `curl http://localhost/` should respond `hello world` over HTTP.
- `firefox dist/index.html` should open a local JS app that shows `hello world`.

I'm sure someone has already thought about this and there's probably a module
that takes care of it (maybe with lots of tests and an active community of
maintainers), but all of my search queries return Angular / React / Vue / etc.

## Usage

```shell
git clone git@github.com:christianbundy/http-spa.git
cd http-spa
npm install
npm start
```

You can open this application in two ways:

- Open `http://localhost:8000` in your web browser.
- Open `dist/index.html` in your web browser.

## License

AGPL-3.0
