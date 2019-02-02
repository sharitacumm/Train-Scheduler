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

    $("#add-train-btn").on("click", function(event) {
        event.preventDefault();        
    });

    $("#add-train-btn").on("click", function () {
        db.ref().push({
            name: $("#train-name-input").val().trim(),
            destination: $("#destination-input").val().trim(),
            startTime: $("#start-input").val().trim(),
            frequency: $("#frequency-input").val().trim()
        });
        console.log("we just clicked the button")

        //Clear text boxes
        $("#train-name-input").val("");
        $("#destination-input").val("");
        $("#start-input").val("");
        $("#frequency-input").val("");
    });
    db.ref().on("child_added",function(snapshot){
        console.log("thingfromdb",snapshot.val())

        var currentTime = moment();
        var trainTime = moment(snapshot.val().startTime,"hh:mm")
        var difference = moment().diff(trainTime,"minutes")
        console.log("difference",difference)
        var timetilTrain = difference % snapshot.val().frequency
        console.log('time til train', timetilTrain);
        var minutesTiltrain = snapshot.val().frequency - timetilTrain
        console.log(minutesTiltrain)

        var nextArrival = moment().add(minutesTiltrain, "minutes")
        moment(nextArrival).format('hh:mm')

        var thingHtml = '<tr><th>' + snapshot.val().name + '</th><th> ' + snapshot.val().destination + '</th><th>' + snapshot.val().frequency+ '</th><th>' + moment(nextArrival).format('hh:mm') +'</th><th>' + minutesTiltrain + '</th></tr>'
        $('#traincontainer').append(thingHtml);

    })

});

