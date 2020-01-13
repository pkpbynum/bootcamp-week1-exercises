const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = (async () => {
  // Write Queries and Logs Here !!!
  const user = await User.query().first()
  console.log(user)

  const children = await user.$fetchGraph('children.children')

  console.log('****', children)


  // Get the name and age of all users


  // ------
  cleanup()
})

run()
