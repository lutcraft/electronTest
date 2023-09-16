//进程间通信
const { contextBridge, ipcRenderer } = require('electron')
//如果你想为渲染器添加需要特殊权限的功能，可以通过 contextBridge 接口定义 全局对象。
const { contextBridge } = require('electron')

//通过 versions 这一全局变量，将 Electron 的 process.versions 对象暴露给渲染器
contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping')    //暴露invoke函数，作为ping函数给render使用
  // 除函数之外，我们也可以暴露变量
})