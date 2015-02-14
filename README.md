# react-flux-router-boilerplate
A boilerplate for a full Flux, React and Router development.

### Based On

- [https://github.com/kriasoft/react-starter-kit](https://github.com/kriasoft/react-starter-kit)
- [https://github.com/alduro/generator-flux-webapp](https://github.com/alduro/generator-flux-webapp)

### Directory Layout

```
.
├── /build/                     # The folder for compiled output
├── /config/                    # Configuration files for Webpack, Jest etc.
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /components/            # React components. E.g. Navbar.jsx, Calendar.jsx
│   ├── /constants/             # Enumerations used in action creators and stores
│   ├── /dispatcher/            # Dispatcher
│   ├── /layouts/               # Shared layouts for top-level components
│   ├── /pages/                 # Top-level, URL-bound React components
│   ├── /stores/                # Stores contain the application state and logic
│   ├── /app.js                 # The application's bootstrap file, entry point
│── gulpfile.js                 # Configuration file for automated builds
└── package.json                # The list of 3rd party libraries and utilities
```

### Getting Started

Clone or fork this project.

### How to Build

```shell
$ gulp build                    # or, `gulp build --release`
```
