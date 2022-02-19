
const express = require('express');
const { existsSync , readdirSync } = require('fs');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const { join } = require('path');
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("views" , join(__dirname, "views"));
console.log(path.join(__dirname, 'public'))
console.log(join(__dirname, "views"))

// route handler ig

function loadROutes() {
    const files = readdirSync(join(__dirname, "./routes"));
    const routes = files.filter((c) => c.split(".").pop() === "js");
    if (files.length === 0 || routes.length === 0) throw new Error("No routes were found");
    for (let i = 0; i < routes.length; i++) {
        const route = require(`./routes/${routes[i]}`);
        console.log(`[CattoLoggs] Loading docs route: ${routes[i]}`);
        app.use(route.name, route.r);
    }
}
loadROutes();

app.listen(3000 , function () {
    console.log("[CattoLoggs] Server is running on port 3000");    
})