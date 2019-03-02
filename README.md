# Dinero.js Documentation site

This is where the documentation site of Dinero.js lives. It uses
[Nuxt.js][nuxt].

## Install

The content of this site runs on a separate API. Both projects need to run on
the same environment for the site to work properly.

Before running the site, go to the [docs][dinero:docs] repository, then install
and start the docs API. It should run on
[http://localhost:4000][localhost:4000].

### Clone repository

Clone this site on your environment:

```sh
git clone https://github.com/dinerojs/dinerojs.com.git
```

### Install dependencies

Go to the project’s root and install the dependencies using [Yarn][yarn]
(recommended) or npm:

```sh
yarn install
# or
npm install
```

### Start server

Start the dev server on port `3000` by running:

```sh
yarn dev
# or
npm run dev
```

Then, access the site on [http://localhost:3000][localhost:3000] 🚀

## Build

To render the site as static files, make sure the documentation API is running
on port `4000`, and then run:

```sh
yarn generate
# or
npm run generate
```

This should generate the site in the `/dist` directory.

[nuxt]: http://nuxtjs.org/
[yarn]: https://yarnpkg.com/
[dinero:docs]: https://github.com/dinerojs/docs
[localhost:4000]: http://localhost:4000
[localhost:3000]: http://localhost:3000
