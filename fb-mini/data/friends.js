const casual = require('casual')
const userData = require('./users')


casual.define('friend', ({ requestedId, requestorId }) => ({
  id: casual.uuid,
  requestedId,
  requestorId,
  status: casual.random_element([
    'REQUESTED',
    'ACCEPTED',
    'DECLINED',
  ]),
  created_at: casual.moment,
  updated_at: casual.moment,
}))

const friendships = []

for (let i = 0; i < 20; ++i) {
  const requestedId = casual.random_element(userData).id
  let requestorId

  do {
    requestorId = casual.random_element(userData).id
  } while (requestedId === requestorId)

  friendships.push(casual.friend({ requestedId, requestorId }))
}

module.exports = friendships
