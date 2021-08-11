const { response } = require('express');
const connecion = require('../database/connection');
const connection = require('../database/connection');
const { create } = require('./OngController');

module.exports = {
    async create(req, res) {
        const { id } = req.body;

        const ong = await connecion('ongs').where('id', id).select('name').first();

        if(!ong) {
            return response.status(400).json({ error: "No ONG found with this ID" });
        }

        return res.json(ong);

    }
}