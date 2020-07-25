const config = require('../../knexfile')

const connection = require('knex')(config)
export default connection