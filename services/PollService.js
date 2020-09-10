const { Poll } = require('../models')



module.exports = {
    create: (body) => {
        const poll = new Poll(body)
        return poll
    },
    getByUserId: (user) => {
       const allPolls = user.polls.filter(polls => polls.is_active === true)
        return allPolls
    },
    getByUserAndPollId: (user, idPoll) => {
        const pollById = user.polls.filter(poll => poll._id === idPoll)
        return pollById
    }
    

}