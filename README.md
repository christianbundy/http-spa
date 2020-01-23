# http-spa

> write simple HTTP applications that also work as single page apps

There _has_ to be a popular tool that does this, right? I have vanilla JS that
I want to run over HTTP or as a single page app (SPA). My app shouldn't have to
know about anything other than basic HTTP router stuff, but I want to be able
to generate a tiny SPA that implements the same behavior.

For example, `http://localhost/hi` would be `file:///index.html#/hi`.

**What's the best tool for the job?** I don't want to have to write my own
solution if there's already an existing solution to this problem.

This repo is my sketch of the type of behavior I'd like to see in another tool.

## Usage

Clone, `npm install`, and run `npm start`. You can view this code two ways:

- Open `dist/index.html` in your web browser.
- Open `localhost:8000` in your web browser.

## License

AGPL-3.0
