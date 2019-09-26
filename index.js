const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

//Set static path
app.use(express.static(path.join(__dirname, "client")));


//Middleware
app.use(bodyParser.json());

const publicVapidKey = "BAxPetaVD5Mkdtrchs3J2I5FXOAWoGQI8sx91Gl4dO49_uYOqRFrB44MLCDX4CEeSyLvCNU-AwKFBHPnTapIVpw";

const privateVapidKey = "E9SKF6aF68w0Sz0lGQj3-jPcgRG6hvab2Mm2QbUBjmI";

webpush.setVapidDetails("mailto:antionnedavis@gmail.com", publicVapidKey,privateVapidKey);

// Subscribe Route

app.post("/subscribe", (req, res) =>{
    //Get push Subscription object
const subscription = req.body;

//Send 201 - resource created
res.status(201).json({})

const payload = JSON.stringigy({ title: "Push Test"});

//Pass object into sendNotification
webpush.sendNotification(subscription, payload).catch(err=> console.error(err));
});

const port = 5000;
app.listen(port, () => console.log("Server started on port ${port}"));

