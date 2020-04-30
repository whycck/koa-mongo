const Student = require('../../models/student')



exports.getStudents = async function () {
  return await Student.find({}).exec()
}

exports.queryByStudentName = async function (name) {
  const criteria = {
    name
  }
  return await Student.find(criteria).exec()
}