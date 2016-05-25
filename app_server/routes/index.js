var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index);

router.post('/products', ctrlMain.products);

router.put('/edit', ctrlMain.edit);

/*Get image by counter*/
// router.get('/slideshow', ctrlMain.display);

// router.get('/slideshow/:count', ctrlMain.display);

module.exports = router;