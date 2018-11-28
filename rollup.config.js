import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import {uglify} from "rollup-plugin-uglify";

export default [
  {
    entry: "./src/bin.js",
    dest: `dist/wareki2era.browser.js`,
    plugins: [nodeResolve({jsnext: true}), commonjs(), babel(), uglify()],
    format: "iife",
    moduleName: "wareki2era"
  },

  {
    entry: "./src/bin.js",
    dest: `index.js`,
    plugins: [nodeResolve({jsnext: true}), commonjs(), babel(), uglify()],
    format: "umd",
    moduleName: "wareki2era"
  }
];
