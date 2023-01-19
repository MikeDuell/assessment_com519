const Stirtank = require("../models/Stirtank");

exports.list = async(req, res) => {
    try{
        const stirtankgroups = await Stirtank.aggregate([
                {
              $group: {
                 _id: "$size",
                total_types: { $sum: 1 },
              },
            },
            
          ]);
        console.log(stirtankgroups)
        res.render("overview", {stirtankgroups: stirtankgroups});
    } catch (e) {
        res.status(404).send({message: "could not list total stirtanks by type"});
    }
    };