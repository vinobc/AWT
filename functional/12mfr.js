var _ = require("lodash")

var students_maths_score = [
  { name: "s1",     reg_no: 345619, score: 100, gender: 'F' },
  { name: "s2",     reg_no: 375619, score: 80, gender: 'M' },
  { name: "s3",     reg_no: 315619, score: 92, gender: 'F' },
  { name: "s4",     reg_no: 343609, score: 78, gender: 'M' },
  { name: "s5",     reg_no: 305619, score: 86, gender: 'F' },
  { name: "s6",     reg_no: 317619, score: 91, gender: 'M' }
]

var males = _.filter(students_maths_score, function(student) {
  return student.gender === 'M'
})
var maleScores = _.map(males, function(male) {
  return male.score
})
var maleTotalScore = _.reduce(maleScores, function(ret_val, score) {
  return ret_val + score
})
var maleScoreAverage = maleTotalScore / males.length

console.log("Average maths score by male : " + maleScoreAverage)

var females = _.filter(students_maths_score, function(student) {
  return student.gender === 'F'
})
var femaleScores = _.map(females, function(female) {
  return female.score
})
var femaleTotalScore = _.reduce(femaleScores, function(ret_val, score) {
  return ret_val + score
})
femaleScoreAverage = femaleTotalScore / females.length

console.log("Average maths score by female: " + femaleScoreAverage)