## Sencha Touch Flat-UI Theme

Theme for Sencha Touch based on [Flat-UI](http://designmodo.com/demo/flat-ui/).

![Sencha-Touch-Flat-UI-Theme](http://kawanoshinobu.com/public/images/sencha-touch-flat-ui.png)

## Demo

[http://kawanoshinobu.com/apps/sencha-touch-flat-ui/](http://kawanoshinobu.com/apps/sencha-touch-flat-ui/)

## Usage

- Copy `dist/src` directory's file to your project's `resources/touch` directory.

```sh
cp -r ../sencha-touch-flat-ui-theme/dist/src/ touch/resources/
```

- Update your project's app.scss file as following.

```scss
// @import 'sencha-touch/default';
// @import 'sencha-touch/default/all';
@import 'sencha-touch/flat';
@import 'sencha-touch/flat/all';

// Custom code goes here..

```

Then, compile app.scss. That's it!

```sh
compass compile resources/sass/
```

## Setup

In order to add a new swatch or colors you can add a new stylus file under `src/themes/stylesheets/sencha-touch/flat` and run [grunt](http://gruntjs.com/) from your command line.

- brew install node
- npm install -g grunt-cli
- cd to project's folder
- npm install
- grunt watch
- start modifying src/themes/stylesheets/sencha-touch/flat files

**Currently, `grunt watch` task doesn't work well.. I will fix this problem at an early date. If you want to modify this theme source, please use `compass compile src/sass` and move the generate css file manually.**

## Version

0.0.2

## Change log

## license

Copyright (c) 2013 KAWANO Shinobu. This software is licensed under the MIT License.
