//进程间通信
const { contextBridge, ipcRenderer, BrowserWindow } = require('electron')
//如果你想为渲染器添加需要特殊权限的功能，可以通过 contextBridge 接口定义 全局对象。

//不能这样弄是因为从 Electron 20 开始，预加载脚本默认 沙盒化 ，
//不再拥有完整 Node.js 环境的访问权。 
//实际上，这意味着你只拥有一个 polyfilled 的 require 函数，
//这个函数只能访问一组有限的 API。
const path = require('path')     

//通过 versions 这一全局变量，将 Electron 的 process.versions 对象暴露给渲染器
contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
//   ping: () => ipcRenderer.invoke('ping'),    //暴露invoke函数，作为ping函数给render使用
  BrowserWindow: () => BrowserWindow,    //暴露BrowserWindow
  path: () => path,    //暴露 path
  // 除函数之外，我们也可以暴露变量
  __dirname : () => __dirname
})