// one dot is local folder(controllers), two is going out further(to server), then go to models within server folder
const Joke = require('./../models/jokes.model')

// module.exports.testApi = (req, res) => {
//     res.json({Status: "ok"})
// }


// Get all --- to test in Postman, use get, click params, and press send. It should return an empty array if there are no entries.
module.exports.allJokes = (req, res)=>{
    Joke.find()
        .then(jokes => res.json(jokes))
        .catch(err=> res.json(err))
}

// Get one
module.exports.oneJoke = (req, res)=>{
    // get id from params. The part after params. is what needs to match in the route, so id here means it has to be id in the route.
    const idFromParams = req.params.id
    Joke.findOne({_id: idFromParams})
        .then(onejoke => res.json(onejoke))
        .catch(err=> res.json(err))
}

// create --- to test in Postman, use post, click body, click x-www-urlencoded, then fill in some key and value info, then send the request and see if it shows up in the area below.
module.exports.addJoke = (req, res)=>{
    const newJoke = req.body
    Joke.create(newJoke)
        .then(joke=> res.json(joke))
        .catch(err=> res.json(err))
}

// update -- getOne + create --- to test in Postman, use get, click body, click x-www-urlencoded, send the request and see if it shows up in the area below.
module.exports.updateJoke = (req, res)=>{
    // grab id from params
    const idFromParams = req.params.id
    const updatedValue = req.body
    // needed in the rest of update: criteria, updatedValue, options.
    Joke.findOneAndUpdate(
        {_id : idFromParams},
        updatedValue,
        {new: true, runValidators: true}
    )
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err=> res.json(err))
}

// delete --- to test in Postman, use delete, click body, click x-www-urlencoded, then fill in some key and value info, then send the request. Then do a get request to see if that entry is still there or not.
module.exports.deleteJoke = (req, res)=>{
    Joke.deleteOne({_id: req.params.id})
        .then(onemessage=>res.json(onemessage))
        .catch(err=>res.json(err))
}