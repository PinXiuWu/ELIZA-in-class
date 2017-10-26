var msgRecords = new Mongo.Collection("msgRecords");

Session.setDefault("x", 5);
Session.setDefault("y", 10);
//var x = 5, y = 10;

Template.body.helpers({
  xNum: function() {
    return Session.get("x");
  },
  yNum: function() {
    return Session.get("y");
  },
  multiplier: function() {
    return Session.get("x")*Session.get("y");
  },
});




Template.body.events({
  "click #increaseX": function() {
    var currentX = Session.get("x");
    currentX = currentX+1;
    Session.set("x", currentX);
  },
  "click #decreaseX": function() {
    var currentX = Session.get("x");
    currentX = currentX-1;
    Session.set("x", currentX);
  },
  "click #submitMsg": function(event) {
    event.preventDefault();
    var msg = document.getElementById("myMsg").value;
    Meteor.call("processMsg", msg);
  },
  "click #resetMsg" : function(event) {
    event.preventDefault();
    Meteor.call("resetELIZA");
  }
});




/*    var formula = "5*5-150";
    var results = eval(formula);
    console.log(results);


    var texts = "This is a string.";
    var position = texts.indexOf("how much is");
    console.log(position);


    var length = texts.length;
    console.log(length);


    var substring = texts.substring(2);
    console.log(substring);

   subString = texts.substring(3,10)
   console.log(substring);









    /*var conversationBox = document.getElementById("conversationBox");

    var allMsgs = conversationBox.value;
    //console.log(allMsgs);

    var newMsg = document.getElementById("myMsg").value;


    newMsg = "\nYou: "+newMsg;

    allMsgs = allMsgs+newMsg;

    conversationBox.value = allMsgs;


    var newELIZAMsg = "\nELIZA:Who are you?";

    allMsgs = allMsgs+newELIZAMsg;
    conversationBox.value = allMsgs;

    //console.log(newMsg);
    //alert("Submit button clicked!")
  },
  "click #resetMsg": function(event){
    event.preventDefault();
  }
  /*"click .buttons": function()
  {
    alert("Button clicked!");
  },
});*/
