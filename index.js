var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var cors = require('cors');
var config = require('./config');
var DOGS = [{
    name: 'Rocky',
    breed: 'Husky',
    id: 1
}, {
    name: 'Peter',
    breed: 'Doberman',
    id: 2
}, {
    name: 'Dino',
    breed: 'Rotweiler',
    id: 3
}, {
    name: 'Saur',
    breed: 'Beagle',
    id: 4
}, {
    name: 'Revenant',
    breed: 'Bulldog',
    id: 5
}]
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//No middleware
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'We are running!',
        success: true
    });
})

app.post('/login', (req, res) => {
    if (!req.body.password || !req.body.username) {
        res.status(400).json({
            message: 'Missing Fields',
            success: false
        });
    } else {
        if (req.body.password === 'password' && req.body.username === 'username') {
            res.status(200).json({
                message: 'Succesful Login',
                success: true,
                token: 'xxyyzzmmvv'
            });
        } else {
            res.status(200).json({
                message: 'Password or Username Incorrect',
                success: false
            });
        }
    }
});

var randomRoute = express.Router();
randomRoute.route('/dog')
    .get((req, res) => {
        res.json(DOGS);
    })
    .post((req, res) => {
        if (!req.body.name || !req.body.breed) {
            res.status(400).json({
                message: 'Missing Fields',
                success: false
            });
        } else {
            var newDog = {
                name: req.body.name,
                breed: req.body.breed,
                id: DOGS.length
            };
            DOGS.push(newDog);
            res.status(201).json({
                message: 'Dog Saved!',
                success: true
            })
        }
    });

randomRoute.route('/dog/:id')
    .put((req, res) => {
        if (isNaN(parseInt(req.params.id))) {
            res.status(400).json({
                message: 'Id must be an Integer',
                success: false
            });
        } else {
            if (parseInt(req.params.id) <= DOGS.length) {
                DOGS[parseInt(req.params.id) - 1].name = req.body.name || DOGS[parseInt(req.params.id) - 1].name;
                DOGS[parseInt(req.params.id) - 1].breed = req.body.breed || DOGS[parseInt(req.params.id) - 1].breed;
                res.json({
                    message: 'Updated completed',
                    success: true
                });
            } else {
                res.status(404).json({
                    message: 'Dog with id: ' + parseInt(req.params.id) + ' not Found!',
                    success: false
                });
            }
        }
    })
    .delete((req, res) => {
        if (isNaN(parseInt(req.params.id))) {
            res.status(400).json({
                message: 'Id must be an Integer',
                success: false
            });
        } else {
            if (parseInt(req.params.id) <= DOGS.length) {
                res.json({
                    message: 'Dog killed =(',
                    success: true
                });
            } else {
                res.status(404).json({
                    message: 'Dog with id: ' + parseInt(req.params.id) + ' not Found!',
                    success: false
                });
            }
        }
    })
    .get((req, res) => {
        if (isNaN(parseInt(req.params.id))) {
            res.status(400).json({
                message: 'Id must be an Integer',
                success: false
            });
        } else {
            if (parseInt(req.params.id) <= DOGS.length) {
                res.json(DOGS[parseInt(req.params.id) - 1]);
            } else {
                res.status(404).json({
                    message: 'Dog with id: ' + parseInt(req.params.id) + ' not Found!',
                    success: false
                });
            }
        }
    });

app.use('', randomRoute);

//Middleware Required
app.use((req, res, next) => {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
        res.status(403).json({
            message: 'You need a token from here...',
            success: false
        });
    } else {
        if (token != 'xxyyzzmmvv') {
            res.status(403).json({
                message: 'Your token is invalid!!!!',
                success: false
            });
        } else {
            req.decoded = {
                username: 'username',
                id: 'Asd223'
            };
            next();
        }
    }
});

var otherRoute = express.Router();
otherRoute.route('/api')
    .get((req, res) => {
        res.json({
            message: 'Welcome to the GET endpoint',
            success: true
        })
    })
    .post((req, res) => {
        res.json({
            message: 'Welcome to the POST endpoint',
            success: true
        })
    })

otherRoute.route('/api/:id')
    .put((req, res) => {
        res.json({
            message: 'Welcome to the PUT endpoint, you updated id: ' + req.params.id,
            success: true
        })
    })
    .delete((req, res) => {
        res.json({
            message: 'Welcome to the DELETE endpoint, you deleted id: ' + req.params.id,
            success: true
        })
    })
    .get((req, res) => {
        res.json({
            message: 'Welcome to the GET endpoint, you get id: ' + req.params.id,
            success: true
        })
    });

app.use('', otherRoute);

app.listen(config.PORT, () => {
    console.log('Server Running on http://localhost:' + config.PORT);
});
