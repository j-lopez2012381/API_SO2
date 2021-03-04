const { Router } = require('express');
const router = Router();

//RUTAS

//RUTA PRINCIPAL
router.get('/', (req, res) => {

  const data = {
    "INTEGRANTES GRUPO 5B": [{
      "name": "Josue",
      "lastname": "Lopez",
      "carné": "9941-18-10946"
    },
    {
      "name": "Paulina",
      "lastname": "Monzoa",
      "carné": "---"
    }]
  };
  res.json(data);
});


module.exports = router;