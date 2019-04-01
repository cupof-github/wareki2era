import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import {uglify} from "rollup-plugin-uglify";

export default [
  {
    input: "./src/bin.js",
    output: {
      name: "wareki2era",
      file: "dist/wareki2era.browser.js",
      format: "iife"
    },
    plugins: [nodeResolve({jsnext: true}), commonjs(), babel(), uglify()]
  },
  {
    input: "./src/bin.js",
    output: {
      name: "wareki2era",
      file: "index.js",
      format: "umd"
    },
    plugins: [nodeResolve({jsnext: true}), commonjs(), babel(), uglify()]
  }
];
