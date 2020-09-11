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
        const pollById = user.polls.id(idPoll)
        if(pollById.is_active === true){
        return pollById
        }else {
            return false
        }      
    }, 
    patch: (user, idPoll, body) => {
        const updatePoll = user.polls.map(poll => {
            if(poll._id.toString() === idPoll){
                const update = Object.assign(poll, body)
                return update
            }
            return poll 
        })
        user.polls = updatePoll
        return user.save()
    }
}