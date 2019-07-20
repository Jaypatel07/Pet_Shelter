const controller = require("./controller");
const path = require("path");

module.exports = function (app) {
    app.get('/api/pets', controller.readPets);
    app.get('/api/pets/:id', controller.readOnePet);
    app.post('/api/pets', controller.createPet);
    app.put('/api/pets/:id', controller.updatePet);
    app.delete('/api/pets/:id', controller.deletePet);
    app.get('/api/pets/:id/like', controller.likePet);

    app.all("*", (request, response, next) => {
        response.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}