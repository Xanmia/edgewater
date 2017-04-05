var express = require("express"),
    app = express(),
    server = require("http").Server(app);

   
    app.set('port', (process.env.PORT || 3000));
    app.use(express.static('src'));
    server.listen(app.get('port'), function () {
        console.log("Server started at port: " + app.get('port'));
    });
