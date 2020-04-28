
exports.getStudents = async function () {
  return [
    {
      name: 'k',
      age: 27
    },
    {
      name: 'a',
      age: 18
    }
  ]
}

exports.queryByStudentName = async function (name) {
  switch (name) {
    case 'Tom':
      return 'Tom'
    case 'Jerry':
      return 'Jerry'
    default: 
    return 'miaomiaomiao'
  }
}