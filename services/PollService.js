const { Poll } = require('../models')



module.exports = {
    create: (body) => {
        const poll = new Poll(body)
        return Poll
    },

}