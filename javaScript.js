window.onload = (function() {


var config = {
    apiKey: "AIzaSyBOxvnRqKxSd4GMimwfrVK2d5iAp-W60yU",
    authDomain: "train-hw-3fc7b.firebaseapp.com",
    databaseURL: "https://train-hw-3fc7b.firebaseio.com",
    projectId: "train-hw-3fc7b",
    storageBucket: "train-hw-3fc7b.appspot.com",
    messagingSenderId: "819689829409"
};
firebase.initializeApp(config);

var data = firebase.database();
$("#submitButton").on("click", function() {
        var trainName = $("#name").val().trim();
        var destination = $("#destination").val().trim();
        var train = 
        {
            name: trainName,
            trainDestination: destination
        };
        data.ref().push(train);
        console.log(train);

    
})
})