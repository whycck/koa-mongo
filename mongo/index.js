const mongoose = require('mongoose')
const connection = mongoose.connection

class MongoDB {
  constructor(url, options) {
    this.url = url
    this.options = options
  }

  connect () {
    mongoose.set('useFindAndModify', false)
    mongoose.connect(this.url, this.options)
    return this
  }

  onError(cb) {
    connection.on('error', error => {
      if (cb) cb(error)
      console.log(error)
    })
    return this
  }

  onOpen(cb) {
    connection.once('open', () => {
      if (cb) return cb()
      console.log(`mongodb connected by ${this.url}`)
    })
    return this
  }

  onDisconnected(cb) {
    connection.on('disconnected', () => {
      if (cb) return cb()
      this.connect()
    })
    return this
  }

}

module.exports = MongoDB