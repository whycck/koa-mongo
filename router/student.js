const { student } = require('../controllers')

module.exports = function (router) {
  router.get('/api/student/getStudents', student.getStudents)
}