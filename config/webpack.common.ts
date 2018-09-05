import * as webpack from 'webpack';
import * as path from 'path';

export default {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js"
  }
}
