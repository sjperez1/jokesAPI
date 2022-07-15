const JokeController= require("./../controllers/jokes.controller")

module.exports = (app)=>{
    // app.get("/api/test", JokeController.testApi )
    app.get("/api/jokes", JokeController.allJokes)
    app.get("/api/jokes/:id", JokeController.oneJoke)
    app.post("/api/jokes/new", JokeController.addJoke)
    app.put("/api/jokes/update/:id", JokeController.updateJoke)
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke)
}