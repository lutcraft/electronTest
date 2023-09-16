
const information = document.getElementById('info')
information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`


const newWindowBtn = document.getElementById('new-window')

newWindowBtn.addEventListener('click', (event) => {
    const modalPath = versions.path().join('file://', versions.__dirname(), './pages/windows/modal.html')
    const childWindow = window.open(modalPath)
    // let win = new BrowserWindow({ width: 400, height: 320 })
    // win.on('close', () => { win = null })
    // win.loadURL(modalPath)
    // win.show()
  })

// const func = async () => {
//     const response = await window.versions.ping()
//     console.log(response) // 打印 'pong'
//   }
  
// func()