const { student } = require('../providers')

module.exports = {
  async getStudents () {
    return await student.getStudents()
  }
} 