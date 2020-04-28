const { student } = require('../services')

module.exports = {
  getStudents: async (ctx) => {
    const result = await student.getStudents()
    ctx.body = result
    // this.body = result
  },

  async queryByStudentName (ctx) {
    const { name } = ctx.request.body
    const result = await student.queryByStudentName(name)
    ctx.body = result
  }
}