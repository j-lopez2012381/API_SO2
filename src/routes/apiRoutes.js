const { Router } = require('express');
const router = Router();

//RUTAS DEL API
router.get('/testMulti', (req, res) => {
    //res.render('index.ejs')
    res.sendFile('/index.html', { 'root': '../API/views' });
  
  });
  router.get('/style.css', function (req, res) {
    res.sendFile('/style.css', { 'root': '../API/views' });
  });
  
  router.get('/functions.js', function (req, res) {
    res.sendFile('/functions.js', { 'root': '../API/views' });
  });
  
  router.get('/images/bkg.png', function (req, res) {
    res.sendFile('/images/bkg.png', { 'root': '../API/views' });
  });
  
  
  module.exports = router;