# React, Flux with Router Boilerplate

[react-flux-router-boilerplate](https://github.com/apzentral/react-flux-router-boilerplate)
A boilerplate for a full React, Flux and Router application development.

### Based On

- [https://github.com/kriasoft/react-starter-kit](https://github.com/kriasoft/react-starter-kit)
- [https://github.com/alduro/generator-flux-webapp](https://github.com/alduro/generator-flux-webapp)

### Architecture

[Flux](facebook.github.io/flux/) for unidirectional data flow.

<img src="//github.com/facebook/flux/raw/master/docs/img/flux-diagram-white-background.png" style="width: 100%;" />

### Directory Layout

```
.
├── /build/                     # The folder for compiled output
├── /config/                    # Configuration files for Webpack, Jest etc.
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /assets/                # All assets files
│   ├── /components/            # React components. E.g. Navbar.jsx, Calendar.jsx
│   ├── /constants/             # Enumerations used in action creators and stores
│   ├── /dispatcher/            # Dispatcher
│   ├── /layouts/               # Shared layouts for top-level components
│   ├── /pages/                 # Top-level, URL-bound React components
│   ├── /stores/                # Stores contain the application state and logic
│   ├── /utilities/             # Utilities such as libraries or common tools
│   ├── /app.js                 # The application's bootstrap file, entry point
│   ├── /config.js              # The application's config file
│── gulpfile.js                 # Configuration file for automated builds
└── package.json                # The list of 3rd party libraries and utilities
```

### Getting Started

1. Clone or fork this project.
2. Then run this command `$ npm install`
3. Run `$ gulp`

### How to Build

```shell
$ gulp build                    # `gulp build --watch`, or `gulp build --release`
```

### How to Run

```shell
$ gulp                          # or, `gulp --release`
```

### Debug

Simply add `--verbose` when running `gulp` command

### Support

Have any feedback, feature request or anything? Please let me know.
