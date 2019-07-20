const Models = require("./models");

module.exports = {
    readPets: (req, res) => {
        Models.Pet.find().sort({'type': 1})
            .then((data) => {
                res.json({message: "Success", data:data});
            })
            .catch((err) => {
                console.log(err);
                res.json({message: "Error", error: err});
            });
    },

    readOnePet: (req, res) => {
        Models.Pet.findById(req.params.id)
            .then((data) => {
                res.json({message: "Success", data:data});
            })
            .catch((err) => {
                console.log(err);
                res.json({message: "Error", error: err});
            });
    },

    createPet: (req, res) => {
        Models.Pet.create(req.body)
            .then((data) => {
                res.json({message: "Success", data:data});
            })
            .catch((err) => {
                console.log(err);
                res.json({message: "Error", error: err});
            });
    },

    updatePet: (req, res) => {
        Models.Pet.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
            .then((data) => {
                res.json({message: "Success", data:data});
            })
            .catch((err) => {
                console.log(err);
                res.json({message: "Error", error: err});
            });
    },

    deletePet: (req, res) => {
        Models.Pet.findByIdAndRemove(req.params.id)
            .then((data) => {
                res.json({message: "Success", data:data});
            })
            .catch((err) => {
                console.log(err);
                res.json({message: "Error", error: err});
            });
    },
    likePet: (req, res) => {
        Models.Pet.findById(req.params.id)
            .then((data) => {
                data.likes += 1;
                data.save()
                    .then((Savedata) => {
                        res.json({message: "Success", data: Savedata});
                    })
                    .catch((err) => {
                        console.log(err);
                        res.json({message: "Error", error: err});
                    });
            })
            .catch((err) => {
                console.log(err);
                res.json({message: "Error", error: err});
            });
    },
}