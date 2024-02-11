const validator=require('validator')
const getNotes=require('./notes.js')
const msg=getNotes()
console.log (msg)

console.log (validator.isEmail('umangcharaya111@gmail.com'))
//const add = require('./utils.js')
//const sum=add(2,3)
//console.log (sum)