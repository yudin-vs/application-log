const express = require('express');
const app = express();
const config = require('./config/config');
const resourcesRouter = require('./routes/resources');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');


app.use('/resources', resourcesRouter);

const compiler = webpack(webpackConfig);
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  })
);

app.listen(config.port, () => {
  console.log(`Server running at http://localhost:${config.port}`);
});