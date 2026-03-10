const express = require("express");
const { mensagensDoTopico } = require("../controllers/postsUltimoTopicoController");
const router = express.Router();

router.get("/topico/ultimo/posts", mensagensDoTopico);

module.exports = router;