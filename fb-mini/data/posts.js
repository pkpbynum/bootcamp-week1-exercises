const casual = require('casual')
const userData = require('./users')


casual.define('post', ownerId => ({
  id: casual.uuid,
  text: casual.sentences(),
  ownerId,
  likes: casual.integer(0, 10),
  created_at: casual.moment,
  updated_at: casual.moment,
}))

const posts = []

for (let i = 0; i < 20; ++i) {
  const ownerId = casual.random_element(userData).id
  posts.push(casual.post(ownerId))
}

module.exports = posts
