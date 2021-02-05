<div align=center>

<p>
  <img src="https://cloud-t01sgib7y.vercel.app/0image.png">
</p>

![Open Issues](https://img.shields.io/github/issues/JIITODC/website?color=green&style=for-the-badge&logo=github)
[![Forks](https://img.shields.io/github/forks/JIITODC/website?style=for-the-badge&logo=github)](https://github.com/JIITODC/jiitodc.github.io/network/members) 
[![Stars](https://img.shields.io/github/stars/JIITODC/website?style=for-the-badge&logo=reverbnation)](https://github.com/JIITODC/website/stargazers)
![Discord Online](https://img.shields.io/discord/475154983910899722?label=JODC%20Discord&style=for-the-badge)
![Twitter Followers](https://img.shields.io/twitter/follow/jiitodc?label=Twitter&style=for-the-badge)

</div>

## :ledger: Index

- [About](#beginner-about)
- [Features](#page_facing_up-features)
- [Usage](#zap-usage)
- [File Structure](#file_folder-file-structure)
- [Static](#static)
- [Production mode and deployment](#production-mode-and-deployment)
- [Contributions](#fire-contributions)  
- [Gallery](#camera-gallery)
- [Credit/Acknowledgment](#star2-creditacknowledgment)
- [License](#lock-license)

## :beginner: About

This is the main website for JODC built with Svelte and Sapper

## :page_facing_up: Features

-   Completely responsive Web Application.
-   Built completely in Svelte+Sapper.
-   Open for opensource contributions.

## :zap: Usage

-   However you get the code, you can install dependencies and run the project in development mode with:

```bash
$ cd jiitodc.github.io
$ npm install # or yarn
$ npm run dev
```

-   Open up localhost:3000 and start clicking around.
-   Consult sapper.svelte.dev for help getting started.

## :file_folder: File Structure

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

-   Sapper expects to find two directories in the root of your project — `src` and `static`.

| No  | File Name                        | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | [src](src)                 | The src directory contains the entry points for your app — `client.js`, `server.js` and (optionally) a `service-worker.js` — along with a `template.html` file and a routes directory.                                                                                                                                                                                                                                                                                                        |
| 2.  | [src/routes](src/routes)          | This is the heart of your Sapper app. There are two kinds of routes — pages, and server routes.                                                                                                                                                                                                                                                                                                                                                                                       |
| 3.  | Pages         | Pages are Svelte components written in .svelte files. When a user first visits the application, they will be served a server-rendered version of the route in question, plus some JavaScript that 'hydrates' the page and initialises a client-side router. From that point forward, navigating to other pages is handled entirely on the client for a fast, app-like feel. (Sapper will preload and cache the code for these subsequent pages, so that navigation is instantaneous.) |
| 3.  | Server Routes | Server routes are modules written in `.js` files, that export functions corresponding to HTTP methods. Each function receives Express request and response objects as arguments, plus a next function. This is useful for creating a `JSON` API                                                                                                                                                                                                                                           |

##### For example:-

There are three simple rules for naming the files that define your routes:

-   A file called `src/routes/about.svelte` corresponds to the `/about` route. A file called `src/routes/blog/[slug].svelte` corresponds to the `/blog/:slug` route, in which case params.slug is available to the route
-   The file src/routes/index.svelte (or src/routes/index.js) corresponds to the root of your app. `src/routes/about/index.svelte` is treated the same as `src/routes/about.svelte`.
-   Files and directories with a leading underscore do not create routes. This allows you to colocate helper modules and components with the routes that depend on them — for example you could have a file called `src/routes/\_helpers/datetime.js` and it would not create a `/\_helpers/datetime route`

## Static

The static directory contains any static assets that should be available. These are served using `sirv`.

In your service-worker.js file, you can import these as files from the generated manifest...
`import { files } from '@sapper/service-worker';`

...so that you can cache them (though you can choose not to, for example if you do not want to cache very large files).

## Production mode and deployment

To start a production version of your app, run npm run build && npm start. This will disable live reloading, and activate the appropriate bundler plugins.

## :fire: Contributions

We welcome contributions from everyone. Here are the guidelines if you are thinking of helping us:

Contributions should be made in the form of GitHub pull requests. Each pull request will be reviewed by someone with permission to land patches and either landed in the main tree or given feedback for changes that would be required. All contributions should follow this format.

Should you wish to work on an issue, please claim it first by commenting on the GitHub issue that you want to work on it. This is to prevent duplicated efforts from contributors on the same issue.

Look for good first issues to find good tasks to start with.
Your contributions are always welcome and appreciated. Following are the things you can do to contribute to this project.

1.  **Report a bug** <br>
    If you think you have encountered a new issue, and we should know about it, feel free to report it and we will take care of it.

2.  **Create a pull request** <br>
    It cannot get better then this, your pull request will be appreciated by the community. You can get started by picking up any open issues and make a pull request.

> If you are new to open-source, make sure to check read more about it [here](https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source) and learn more about creating a pull request [here](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github).

## :camera: Gallery

<p align="center">
  <img src="https://cloud-fu0hdsfst.vercel.app/0image.png" width="800">
</p>
<p align="center">The Home Page.</p>

<p align="center">
  <img src="https://cloud-qchetr8qb.vercel.app/0image.png" width="800">
</p>
<p align="center">About Us.</p>

<p align="center">
  <img src="https://cloud-hudew9uoc.vercel.app/0image.png" width="800">
</p>
<p align="center">The Events Page.</p>

<p align="center">
  <img src="https://cloud-czb2a3zdk.vercel.app/0image.png" width="800">
</p>
<p align="center">The Team Page.</p>

<p align="center">
  <img src="https://cloud-k9llgco0a.vercel.app/0image.png" width="800">
</p>
<p align="center">The Blog Page.</p>

## :lock: License

[![License](https://img.shields.io/github/license/JIITODC/website?style=for-the-badge)](https://github.com/JIITODC/website/blob/master/LICENSE)

## :star2: Credit/Acknowledgment
[![Contributors](https://img.shields.io/github/contributors/JIITODC/website?style=for-the-badge)](https://github.com/JIITODC/website/graphs/contributors) 
