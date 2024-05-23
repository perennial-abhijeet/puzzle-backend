const express = require('express');
const router = express.Router();
const Piece = require('../models/piece');

// Get all pieces details
router.get('/', async (req, res) => {
    try {
        const pieces = await Piece.findAll();
        const modifiedPieces = pieces.map(piece => {
            if (piece.qrLink && Buffer.isBuffer(piece.qrLink)) {
                piece.qrLink = piece.qrLink.toString('binary');
            }
            return piece;
        });


        res.send(modifiedPieces);

    } catch (error) {
        res.status(500).send(error);
    }
});

// Save piece details
router.post('/save', async (req, res) => {
    try {
        const piece = await Piece.create(req.body);
        res.status(201).send(piece);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get piece details by QR link
router.get('/:qrLink', async (req, res) => {
    try {
        const piece = await Piece.findOne({ where: { qrLink: req.params.qrLink } });
        if (!piece) {
            return res.status(404).send({ message: 'Piece not found' });
        }
        res.send(piece);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update QR link status
router.put('/:qrLink', async (req, res) => {
    try {
        const piece = await Piece.findOne({ where: { qrLink: req.params.qrLink } });
        if (!piece) {
            return res.status(404).send({ message: 'Piece not found' });
        }
        piece.status = req.body.status;
        await piece.save();
        res.send(piece);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
