# Workshop

> Introduction à vue.js

## Getting Started

### Vue cli

[vue-cli](https://github.com/vuejs/vue-cli)

> The purpose of official Vue project templates is providing opinionated, battery-included development tooling setups so that users can get started with actual app code as fast as possible

#### Under the hood

[vue-loader](https://vue-loader.vuejs.org/en/configurations/pre-processors.html)

`webpack` is a module bundler. It takes a bunch of files, treating each as a module, figuring out the dependencies between them, and bundle them into static assets that are ready for deployment.

`vue-loader` is a loader for webpack that can transform Vue components written in the following format into a plain JavaScript module:

Cool features with `vue-loader`:

* ES2015 enabled by default
* Allows using other webpack loaders for each part of a Vue component, for example SASS for `<style>` and Jade for `<template>`;
* Supports component hot-reloading during development

### Vetur for Vscode

[vetur](https://github.com/vuejs/vetur)

Features:

* Syntax-highlighting
* Snippet
* Emmet
* Linting / Error Checking
* Formatting
* Auto Completion
* Debugging

### Browser extension for easier debugging

[vue-devtools](https://github.com/vuejs/vue-devtools)

### MVVM

Voir l'exemple de _Two Way Data Binding_

## TODO

* Créer la view `users`
* `fetch` la liste d'utilisateur
* Créer la liste avec `v-for`
* Créer le component `Card` pour afficher chacun des utilisateurs

> THÉORIES: Component lifecycle, Containers vs Components, Routing, Conditional rendering, ES6: Object deconstructing, Template string, Import/Export, Arrow function, Async/Await, Fetch API, CSS GRID?

3. Nested routes

> THÉORIES: Routing

## API

[jsonplaceholder](https://jsonplaceholder.typicode.com/)
