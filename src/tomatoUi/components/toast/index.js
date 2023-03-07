
import { createApp } from 'vue'
import Toast from './index.vue'

function showToast (param) {
  const defaultParam = {
    type: 'default',
    icon: 'null',
    content: '',
    duration: 3000
  }
  Object.assign(defaultParam, param)
  const toastInstance = createApp(Toast, { defaultParam })
  const mountNode = document.createElement('div')
  mountNode.className = 'tm-toast flex-column flex-center-center'
  document.body.appendChild(mountNode)
  toastInstance.mount(mountNode)

  setTimeout(() => {
    toastInstance.unmount()
    document.body.removeChild(mountNode)
  }, defaultParam.duration)
}

export default showToast