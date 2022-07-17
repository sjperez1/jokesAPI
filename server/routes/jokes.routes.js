const JokeController= require("./../controllers/jokes.controller")

module.exports = (app)=>{
    // app.get("/api/test", JokeController.testApi )
    app.get("/api/jokes", JokeController.allJokes)
    app.get("/api/one/jokes/:id", JokeController.oneJoke)
    app.get("/api/jokes/random", JokeController.randomJokes)
    app.post("/api/jokes/new", JokeController.addJoke)
    app.put("/api/jokes/update/:id", JokeController.updateJoke)
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke)
}