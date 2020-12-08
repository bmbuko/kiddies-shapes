const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
//const waiterFactory = require('./waiter');
//const routeFactory = require('./waiter-routes')
const pg = require("pg");
const Pool = pg.Pool;

const app = express();

// which db connection to use
const connectionString = process.env.DATABASE_URL || 'postgresql://thatodonvulo:pg123@localhost:5432/debug-thugs_webapp';

const pool = new Pool({
    connectionString
});

//const waiter = waiterFactory(pool);
//const routesInstance = routeFactory(waiter)

app.engine('handlebars', exphbs({ layoutsDir: './views/layouts' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(session({
    secret: "fcsss",
    resave: false,
    saveUninitialized: true
}))
// initialise the flash middleware
app.use(flash());


const PORT = process.env.PORT || 3040;

app.listen(PORT, function () {
    console.log("App started at port", PORT)
});