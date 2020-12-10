'use strict'

const express = require('express');
const Place = require('/..models/place');
const place = new Place();

const router = express.Router();

//RESTful routes

router.get('/place', getPlace);
router.get('/place/:id', getOnePlace);
router.get('/place', createPlace);
router.get('/place', updatePlace);
router.get('/place/:id', deletePlace);

//RESTful route handlers

function getPlace(req, res) {
    cosnt allPlaces = place.get();
    res.status(200).json(allPlaces);
}

function getOnePlace(req, res) {
    cosnt id = req.params.id;
    cosnt onePlace = place.get(id)
    res.status(200).json(onePlace);
}

function createPlace(req, res) {
    const obj = req.body;
    const newPlace = place.create(oj);
    res.status(200).json(newPlace);
}

function updatePlace(req, res) {
    res.status(200).json('updating place');
}

function deletePlace(req, res) {
    res.status(200).send('deleting place');
}

module.exports = router;