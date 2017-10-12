Template.body.events(
  {
  "click #submitMsg": function(event) {
    event.preventDefault();




    var formula = "5*5-150";
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




    var conversationBox = document.getElementById("conversationBox");

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
  },*/
});
