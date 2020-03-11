'use strict';
const path = require('path')

module.exports = {
  doc: {
    name: "读书笔记&随笔",
    description: "个人读书笔记，生活感悟随笔分享",
    version: "0.0.1",
    dir: "",
    outDir: "",
    staticDir: ""
  },
  theme: {
    dir: "",
    title: "",
    headHtml: "",
    footHtml: "",
    isMinify: true,
    rootPath: "/Reading-notes/"
  },
  nav: {
    tree: "./tree"
  }
}
