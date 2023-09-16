
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')



const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    //为了将脚本附在渲染进程上, 在 BrowserWindow 构造器中使用 webPreferences.preload 传入脚本的路径
    webPreferences: {
      sandbox: false, //为这个渲染进程禁用沙箱，启用完整nodejs功能
      nodeIntegration: true,
      //__dirname 字符串指向当前正在执行的脚本的路径(在本例中，它指向你的项目的根文件夹)。
      //path.join API 将多个路径联结在一起，创建一个跨平台的路径字符串。
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
  win.webContents.openDevTools()
}

app.whenReady().then(() => {
  // ipcMain.handle('ping', () => 'pong')      //主进程处理ping通道，收到ping，返回'pong'
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) 
    {
      createWindow()
    }
  })
})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})