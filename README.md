# [InMotion Movie App Coding Challenge](./CHALLENGE.md)

# Demo
Hosted on modulus: http://movieapp-59944.onmodulus.net/

# Requirements to run app locally
- NodeJS v4.0 or newer
- npm v3.3 or newer

# Install
1. Clone project
1. Run `npm run build` inside the root directory of the project to build for production.
1. Run `npm run build-dev` inside the root directory of the project to build for development.

# Run for production
1. Run `npm run app` inside the root directory of the project.

# Run for development with browserSync and watch
1. Run `gulp` inside the root directory of the project.

# What this app has
## Angular with Webpack / ES6
I really like Webpack but it can be a pain to set up so I used a Yeoman generator:
[generator-angular-webpack](https://www.npmjs.com/package/generator-angular-webpack)
Information on the scaffolding structure, libraries and features can be found [here](https://github.com/KarolAltamirano/generator-angular-webpack/blob/master/app/templates/common/README.md)
including gulp commands, etc.
If you are interested in editing, using the development features or building this project, please take a look.

## Extra Libraries / Modules
- [angular-ui-router](https://github.com/angular-ui/ui-router)
- [angular-toarrayfilter](https://github.com/petebacondarwin/angular-toArrayFilter) to use an object in an angular filter
which by default can only accept an array
- [expressjs](http://expressjs.com/) to run the app using html push state

## Challenge requirements satisfied
- Movie CRUD operations with requested fields
- Abstracted functionality for both localStorage and a REST service. Example shows working integration with [Firebase REST API](https://www.firebase.com/docs/rest/api/)
    - View by making the following modification in _line 47_ `src/scripts/app/movieApp.js`:

        ```
        // .constant('API', 'localStorage');
        .constant('API', 'firebase');
        ```

        and then run locally:

        ```
        $ npm run build-dev
        $ gulp
        ```
- AngularJS with MVC architecture
- Movie search
- At least one Service, Controller, Directive and Filter (filter is inline for search)
- **bonus** lodash
- **bonus** bootstrap

## If I had more time . .
I would have:

- unit / e2e tests
- api documentation
- stuck to git flow convention with cleaner squashed commits
- cleaned up some of the boilerplate cruft

## AngularJS Source Files
The rest are utility, build, boilerplate and loader files

```
├── src
│   ├── index.html
│   ├── scripts
│   │   ├── app
│   │   │   ├── controllers
│   │   │   │   ├── MovieCreateCtrl.js
│   │   │   │   ├── MovieEditCtrl.js
│   │   │   │   ├── MovieListCtrl.js
│   │   │   │   ├── MovieViewCtrl.js
│   │   │   ├── directives
│   │   │   │   ├── RatingStarDirective.js
│   │   │   ├── movieApp.js
│   │   │   └── services
│   │   │       ├── ApiService.js
│   │   │       ├── MovieService.js
│   │   │       └── PopupService.js
│   └── tpls
│       └── partials
│           ├── _form.html
│           ├── movie-add.html
│           ├── movie-edit.html
│           ├── movie-view.html
│           └── movies.html
```


