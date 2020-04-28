const { student } = require('../services')

module.exports = {
  async getStudents (ctx) {
    const result = await student.getStudents()
    // ctx.body = result
    this.body = result
  }
}