
const information = document.getElementById('info')
information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`


const newWindowBtn = document.getElementById('new-window')
const focusModalBtn = document.getElementById('focus-on-modal-window')

newWindowBtn.addEventListener('click', (event) => {
    const modalPath = versions.path().join('file://', versions.__dirname(), './pages/windows/modal.html')
    const childWindow = window.open(modalPath, '_blank', 'top=200,left=100,nodeIntegration=true')

    //隐藏聚焦按钮
    const hideFocusBtn = () => {
      focusModalBtn.classList.add('disappear')//元素加入class
      focusModalBtn.classList.remove('smooth-appear')//元素移出class
      focusModalBtn.removeEventListener('click', clickHandler)
    }
  
    //显示聚焦按钮
    const showFocusBtn = () => {
      if (!childWindow) return
      focusModalBtn.classList.add('smooth-appear')
      focusModalBtn.classList.remove('disappear')
      focusModalBtn.addEventListener('click', clickHandler)
    }

    const clickHandler = () => { 
      alert(childWindow)
      childWindow.focus()
    }

    childWindow.addEventListener('focus', hideFocusBtn)
    childWindow.addEventListener('blur', showFocusBtn)
    childWindow.addEventListener('close', () => {
      hideFocusBtn()
      childWindow = null
    })
  })

// const func = async () => {
//     const response = await window.versions.ping()
//     console.log(response) // 打印 'pong'
//   }
  
// func()