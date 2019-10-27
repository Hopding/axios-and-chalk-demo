const axios = require('axios')
const chalk = require('chalk')

const url = 'https://jsonplaceholder.typicode.com'

function fetchAllUsers() {
  return axios.get(`${url}/users`).then(result => result.data)
}

function printUser(user) {
  const { name, username, phone, email } = user
  console.log(chalk.red(name))
  console.log(chalk.blue(username))
  console.log(chalk.yellow(phone))
  console.log(chalk.magenta(email))
  console.log()
}

fetchAllUsers().then(users => {
  users.forEach(user => printUser(user))
})
