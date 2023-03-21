const express = require('express');
// express gives us the abitity to uise controllers with thr eouter function
const router = express.Router();

// CRUD routes... create(.post()), read(get), update(put), delete(delete)

//create is new, index is ReadableByteStreamController, update is update, delete is delete

// INEX route aka Retrn ALL
// route that got us here has /fruits preceding it becuase of the app.get with the fruitsController
router.get('/', (req, res) => {
    res.render('fruits/index.ejs', {fruits: fruits})
})

// form to create a new fruit (its own page in this scenario)
// router.get('/new', (req, res) => {
//     res.render("fruits/new.ejs")
// })

// FORM TO CREATE A NEW FRUIT
router.get('/new', (req, res) => {
    res.render("fruits/new.ejs")
})

// SHOW returns one item
router.get('/:id', (req, res) => {
    console.log(req.params);
    // console.log(fruits);
    const fruit = fruits[req.params.id];
    console.log(fruit);
    res.render("fruits/show.ejs", {fruit: fruit});
})

// POST route
router.post('/', (req, res) => {
  
    console.log(req.body);
    //  ternary operator...short hand for an if/else statement
    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false
    console.log(req.body)
	fruits.unshift(req.body);
	// redirect to the INDEX route for fruits
	res.redirect('/fruits');
  
    // // lets take a baby step
    // // res.send('hitting the post route')
    // console.log("req.body", req.body)
    // fruits.unshift(req.body)
    // console.log(fruits)
    // // redirect to inex route for all fruits
    // res.redirect("/fruits")
})


module.exports = router;