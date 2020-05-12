const express = require('express');

const db = require("../../data/dbConnection");

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
      res.json(cars); 
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to retrieve cars' });
    });
  });

router.post('/', (req, res) => {
    const car = req.body
    if (isValidAccount(car)) {
        db('cars')
            .insert(car, "id")
            .then(ids => {
                res.status(201).json({ data: ids })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: error.message });
            })
    } else {
        res.status(400).json({message : 'Please provide required information'})
    }
})

router.get('/:id', (req, res) => {
    db('cars').where({ id: req.params.id })
        .then(car => {
            res.status(200).json({data: car})
        })
        .catch(errors => {
            console.log(error)
            res.status(500).json({message: error.message});
        })
})



//custom middleware
function isValidAccount(car) {
    return Boolean(car.VIN && car.Make && car.Model && car.Mileage);
}

  module.exports = router;