<div align=center>

<p>
  <img src="https://res.cloudinary.com/dcykxiua2/image/upload/v1601403909/screely-1601393893331_vglbvb.png">
</p>

[![Open Issues](https://img.shields.io/github/issues/JIITODC/jiitodc.github.io?style=for-the-badge&logo=github)](https://github.com/JIITODC/jiitodc.github.io/issues) [![Forks](https://img.shields.io/github/forks/JIITODC/jiitodc.github.io?style=for-the-badge&logo=github)](https://github.com/code-monk08/connect-four/network/members) [![Stars](https://img.shields.io/github/stars/JIITODC/jiitodc.github.io?style=for-the-badge&logo=reverbnation)](https://github.com/code-monk08/connect-four/stargazers) ![Maintained](https://img.shields.io/maintenance/yes/2019?style=for-the-badge&logo=github) ![Open Source Love](https://img.shields.io/badge/Open%20Source-%E2%99%A5-red?style=for-the-badge&logo=open-source-initiative) ![Built with Love](https://img.shields.io/badge/Built%20With-%E2%99%A5-critical?style=for-the-badge&logo=ko-fi)

</div>

## 📒: Index

[TOC]

## 🔰 :About

This is the main website for JODC built with Svelte and Sapper

## 📄 : Features

-   Completely responsive Web Application.
-   Built completely in Reactjs.
-   Open for opensource contributions.

## ⚡: Usage

To use this project.

### 🔌: Installation

-   However you get the code, you can install dependencies and run the project in development mode with:

```bash
$cd jiitodc.github.io
npm install # or yarn
npm run dev
```

-   Open up localhost:3000 and start clicking around.
-   Consult sapper.svelte.dev for help getting started.

### 📦: Commands

-   Start project using

```bash
$cd jiitodc.github.io
npm install # or yarn
npm run dev
```

## 📁: File Structure

-   Add a file structure here with the basic details about files, below is current file structure.

```
.
├── package-lock.json
├── package.json
├── README.md
├── rollup.config.js
├── src
│  ├── client.js
│  ├── components
│  │  ├── EventComponent.svelte
│  │  ├── Nav.svelte
│  │  ├── TeamComponent.svelte
│  │  └── TeamComponent_Old.svelte
│  ├── routes
│  │  ├── _error.svelte
│  │  ├── _layout.svelte
│  │  ├── events.svelte
│  │  ├── index.svelte
│  │  └── team
│  │     ├── index.svelte
│  │     ├── team-2018.svelte
│  │     └── team-2019.svelte
│  ├── server.js
│  ├── service-worker.js
│  └── template.html
├── static
│  ├── Data/
│  ├── favicon.svg
│  ├── global.css
│  ├── manifest.json
│  ├── Photos/
│  └── posters/
└── vercel.json
```

-   Sapper expects to find two directories in the root of your project — src and static.

| No  | File Name                        | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | [src](assets.py)                 | The src directory contains the entry points for your app — client.js, server.js and (optionally) a service-worker.js — along with a template.html file and a routes directory.                                                                                                                                                                                                                                                                                                        |
| 2.  | [src/routes](config.py)          | This is the heart of your Sapper app. There are two kinds of routes — pages, and server routes.                                                                                                                                                                                                                                                                                                                                                                                       |
| 3.  | [Pages](connect_game.py)         | Pages are Svelte components written in .svelte files. When a user first visits the application, they will be served a server-rendered version of the route in question, plus some JavaScript that 'hydrates' the page and initialises a client-side router. From that point forward, navigating to other pages is handled entirely on the client for a fast, app-like feel. (Sapper will preload and cache the code for these subsequent pages, so that navigation is instantaneous.) |
| 3.  | [Server Routes](connect_game.py) | Server routes are modules written in .js files, that export functions corresponding to HTTP methods. Each function receives Express request and response objects as arguments, plus a next function. This is useful for creating a JSON API                                                                                                                                                                                                                                           |

##### For example:-

There are three simple rules for naming the files that define your routes:

-   A file called src/routes/about.svelte corresponds to the /about route. A file called src/routes/blog/[slug].svelte corresponds to the /blog/:slug route, in which case params.slug is available to the route
-   The file src/routes/index.svelte (or src/routes/index.js) corresponds to the root of your app. src/routes/about/index.svelte is treated the same as src/routes/about.svelte.
-   Files and directories with a leading underscore do not create routes. This allows you to colocate helper modules and components with the routes that depend on them — for example you could have a file called src/routes/\_helpers/datetime.js and it would not create a /\_helpers/datetime route

## Static

The static directory contains any static assets that should be available. These are served using sirv.

In your service-worker.js file, you can import these as files from the generated manifest...
`import { files } from '@sapper/service-worker';`

...so that you can cache them (though you can choose not to, for example if you donot want to cache very large files).

## Production mode and deployment

To start a production version of your app, run npm run build && npm start. This will disable live reloading, and activate the appropriate bundler plugins.

### 🔥: Contribution

We welcome contributions from everyone. Here are the guidelines if you are thinking of helping us:

Contributions should be made in the form of GitHub pull requests. Each pull request will be reviewed by someone with permission to land patches and either landed in the main tree or given feedback for changes that would be required. All contributions should follow this format.

Should you wish to work on an issue, please claim it first by commenting on the GitHub issue that you want to work on it. This is to prevent duplicated efforts from contributors on the same issue.

Look for good first issues to find good tasks to start with.
Your contributions are always welcome and appreciated. Following are the things you can do to contribute to this project.

1.  **Report a bug** <br>
    If you think you have encountered a new issue, and I should know about it, feel free to report it and I will take care of it.

2.  **Create a pull request** <br>
    It cannot get better then this, your pull request will be appreciated by the community. You can get started by picking up any open issues and make a pull request.

> If you are new to open-source, make sure to check read more about it [here](https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source) and learn more about creating a pull request [here](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github).

### 🌵: Branches

-   No other permanent branches should be created in the main repository, you can create feature branches but they should get merged with the master.

## 📷: Gallery

<p align="center">
  <img src="https://res.cloudinary.com/dcykxiua2/image/upload/v1601403909/shotsnapp-1601403666.419_p57vxt.png" width="800">
</p>
<p align="center">The main landing Page.</p>

<p align="center">
  <img src="https://res.cloudinary.com/dcykxiua2/image/upload/v1601404144/shotsnapp-1601404124.596_qpkdu5.png" width="800">
</p>
<p align="center">The Events Page.</p>

<p align="center">And a lot more is waiting for you [here](https://jodc.vercel.app/).</p>

## 🔒 : License

[![License](https://img.shields.io/github/license/code-monk08/connect-four?style=for-the-badge)](https://github.com/JIITODC/jiitodc.github.io/blob/master/LICENSE)

## 🌟: Credit/Acknowledgment

Please give this repository a ✨ if you liked our work!
