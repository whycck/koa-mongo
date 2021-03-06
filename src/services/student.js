const { student } = require('../providers')

module.exports = {
  async getStudents () {
    return await student.getStudents()
  },

  async queryByStudentName (name) {
    return await student.queryByStudentName(name)
  }
} 