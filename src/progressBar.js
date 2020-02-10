
const progressBar =  document.querySelector('#progress__bar')

let total = 0
let count = 0


const handlers = {
    startInitFunctionOrder (data) {
        total = data.count
    },

    initFunctionInvoking (data) {
      progressBar.value = ((data.idx / total) * 100)
    },

    startDataFileEntries (data) {
      total = data.count
    },

    performMapLoadFunction () {
      count++
      progressBar.value = ((count / total) * 100)
    },
}


export default () => {
  window.addEventListener('message', (e) => {
    (handlers[e.data.eventName] || function () { })(e.data)
  })
}