$(document).ready(function () {


    var config = {
        apiKey: "AIzaSyDyViFKUXvEOxaU75VLsAEYANX_9MrIgBk",
        authDomain: "train-homework-bcb28.firebaseapp.com",
        databaseURL: "https://train-homework-bcb28.firebaseio.com",
        projectId: "train-homework-bcb28",
        storageBucket: "train-homework-bcb28.appspot.com",
        messagingSenderId: "521877757034"
    };
    firebase.initializeApp(config);
    console.log("hello file");
    var db = firebase.database();

    $("#add-train-btn").on("click", function () {
        db.ref().push({
            name: $("#train-name-input").val().trim(),
            destination: $("#train-name-input").val().trim(),
            startTime: $("#train-name-input").val().trim(),
            frequency: $("#train-name-input").val().trim()
        });
        console.log("we just clicked the button");
    });

});

