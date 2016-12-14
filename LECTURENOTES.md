
##installing create-react-app

https://github.com/facebookincubator/create-react-app

`sudo npm install -g create-react-app`
`sudo npm install -g surge`

##run create-react-app
`create-react-app my-app --scripts-version custom-react-scripts`
`create-react-app APPNAME`

###SCSS CONFIG 1
`npm install create-react-app-sass --save-dev`

###package.json

`"scripts": {
  "start": "react-scripts-with-sass start",
  "build": "react-scripts-with-sass build",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject"
},`

###SCSS CONFIG 2

`npm install create-react-app-sass --save-dev`

###SCSS CONFIG 3

`npm install sass-loader node-sass --save-dev`
`npm install react-css-modules -–save-dev`
`npm run eject`

###webpack.config.dev.js

     `{
        test: /\.css$/,
        loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
      },
      {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[name]--[local]',
          'sass?sourceMap'
        ],
        exclude: /node_modules|lib/
      },`

##webpack.config.prod.js

`{
  test: /\.scss$/,
  loaders: [
    'style?sourceMap',
    'css?modules&importLoaders=1&localIdentName=[name]--[local]',
    'sass?sourceMap'
  ],
  exclude: /node_modules|lib/
},`

##REACT ROUTER

`npm install --save react-router`

##SURGE

[https://surge.sh/](https://surge.sh/)

`npm install --save-dev surge`
