Template.myEyes.events({
  "mouseenter #eyesImg": function(){
    var imgObj = document.getElementById("eyesImg");
    imgObj.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwCdws8dGxyjq4wS-fhJNKvEdlVLclJVpyYmonEN4mYMsLF2pJ"
  },
  "mouseleave #eyesImg": function(){
    var imgObj = document.getElementById("eyesImg");
    imgObj.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadV64XW6nhG9HXvVV0nYbBw_up8lR1AiD60SNubKKmIVFh2uY"
  },
});

Template.myNose.events({
  "mouseenter #noseImg": function(){
    var imgObj = document.getElementById("noseImg");
    imgObj.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLa76luZ6y0YhGTdQqyoedHiJirZglSnydYlanbV-bwgZuowDC-A"
  },
  "mouseleave #noseImg": function(){
    var imgObj = document.getElementById("noseImg");
    imgObj.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMQ7fAoODEeopYWKHiQmmZpsjlN0oiWggYdIgjrDBu2NXUCJQ1g"
  },
});

Template.myMouth.events({
  "mouseenter #mouthImg": function(){
    var imgObj = document.getElementById("mouthImg");
    imgObj.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAhCzyTYJHO4FBzU3bheH6XkFyhBvDhDI7r_9aEjmF-8lezI6"
  },
  "mouseleave #mouthImg": function(){
    var imgObj = document.getElementById("mouthImg");
    imgObj.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTY-O-7hyxsl9KjDGW-a_vCQ2TmbKSEEY9Mv3ph5AMfIt1jn8f"
  },

});
