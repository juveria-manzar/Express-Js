var express = require('express');
var router = express.Router();

const ctrlIndex = require('../controllers/index');



router.get('/', ctrlIndex.renderIndex);

router.get('/shop', ctrlIndex.renderShop);

router.get('/tickets', ctrlIndex.renderTickets);

router.get('/stats', ctrlIndex.renderStats);

router.get('/abc/123/awesome', ctrlIndex.renderAwesome);

router.get('/register', ctrlIndex.renderRegisterForm);

router.post('/register', ctrlIndex.registerUser);

router.get("/users", ctrlIndex.getUsers);

router.get("/user/:userid", ctrlIndex.getSingleUser);

router.get('/examples', ctrlIndex.renderEjsExample);




/*

    Note about wildcard route
    This route will match any route. Because of that, this needs to come last.
    I've made the postRoutes come before the indexRoutes in app.js.  In our code from the lectures the post routes came after.  If the post routes were coming after then this wildcard route would match those post routes, and the post pages wouldn't be reachable.
    
    Other than that, there is no consequence from putting the post routes before the index.

*/

// To reach this route, set the url to something that no other route will reach, ie; localhost:3000/loremipsum
router.get('/*', ctrlIndex.render404)



module.exports = router;
