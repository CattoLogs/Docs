const { Router } = require('express');
const path = require('path');
const e = Router().get("/", async (req, res) => {
    try {
        res.render(path.join('pages/index.ejs') , {currentDate: new Date()});
     } catch (error) {
         console.log(error);
     }
   });
module.exports = {
    name: "/",
    r: e
}