const friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){

        let match = {
            name: "",
            photo: "",
            friendDiff: 1000
        }
        
        let userData = req.body;
        let userAnswers = userData.quizAnswers;

        let totalDiff = 0;

        for (var i = 0; i < friends.length; i++) {
            totalDiff = 0;
            console.log(friends[i].name);
            for (var j = 0; j < 10; j++) {
                console.log(friends[i].scores[j]);
            totalDiff += Math.abs(parseInt(userAnswers[j])- parseInt(friends[i].scores[j]));

            };
            if (totalDiff <= match.friendDiff) {
                match.name = friends[i].name;
                match.photo = friends[i].photo;
                match.friendDiff = totalDiff;
            };
        };
    
        //friends.push(userData);

        res.json(match);
    });
};