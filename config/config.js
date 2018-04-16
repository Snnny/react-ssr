const portfinder = require('portfinder')

let port =  process.env.port || 8080

module.exports = portfinder.getPortPromise()
  .then((newPort) => {
    if (port !== newPort) {
      console.log(`${port}端口被占用，开启新端口${newPort}`)
      return newPort
    }
  })
  .catch((err) => {
    console.log('没有找到空闲端口，请打开任务管理器杀死进程端口再试', err)
  });