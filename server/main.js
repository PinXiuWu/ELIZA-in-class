msgRecords = new Mongo.Collection("msgRecords");

/*var processMsg = function() {
  return;
};*/

Meteor.methods(
  {
    msgReceiver: function(msg) {
      var msgTime = new Date();
      msgRecords.insert(
        {
          speaker: "You",
          msg: msg,
          time: msgTime
        }
      );

      processMsg(msg);

      /*var allMsgs = msgRecords.find({});
      allMsgs = allMsgs.fetch();
      console.log(allMsgs);*/
      return;
    },
    resetELIZA: function() {
        msgRecords.remove({});
        msgRecords.insert(
          {
            speaker: "ELIZA",
            msg: "ELIZA: I'm ELIZA. How are you doing?",
            time: new Date()
          }
        )
        return;
      }
  }
);


//以下是期末專題最重要的部分
var processMsg = function(msg) {
  var processResult = "";

  processResult = "Hello world!";

  msgRecords.insert(
    {
      speaker: "ELIZA",
      msg: processResult,
      time: new Date()
    }
  );
};







/*msgRecords.update(
  {
    speaker: "Pin-Xiu"
  },
  {
   $set: {msg: "Hola!"}
  },
  {
   multi: true
  }
);*/


/*
msgRecords.remove({});

var msgTime = new Date();


msgRecords.insert(
  {
    speaker: "Pin-Xiu",
    msg: "Hey you!",
    time: msgTime
  }
);


msgRecords.insert(
  {
    speaker: "Lola",
    msg: "Hello!",
    time: msgTime
  }
);



msgRecords.remove(
  {
    speaker: "Pin-Xiu"
  }
);



var allMsgs = msgRecords.find(
  {
    speaker: "Pin-Xiu"
  }
);
allMsgs = allMsgs.fetch();
console.log(allMsgs);*/







/*var msgTime = new Date();

console.log(msgTime);

msgRecords.insert(
  {
    speaker: "Pin-Xiu",
    msg: "Let's lose some weight!!",
    time: msgTime
  }
);


var allMsgs = msgRecords.find();
allMsgs = allMsgs.fetch();
console.log(allMsgs);

var allMsgs = msgRecords.findOne(
  {
    speaker: "Pin-Xiu"
  }
);
console.log(allMsgs);*/





















/* var myFirstBike = {
  brand: "GIANT",
  when: 1993,
  color: "red",
  priceNTD: 5500,
  stolenYears: [1995, 2000, 2004]
};


console.log(myFirstBike.brand);
console.log(myFirstBike.stolenYears[0]);


myFirstBike.brand = "God"

console.log(myFirstBike.brand);


myFirstBike.stolenYears[0]= 1998;
console.log(myFirstBike.stolenYears[0]);


//var emptyObject = {};*/


/*var numbers = [1, 2, 3, 4, 5];
            // 0  1  2  3  4

//numbers = numbers.slice(1,3);
//console.log(numbers);


//var position = numbers.indexOf(4);
//console.log(position);

var length = numbers.length;
console.log(length);

for(pos = 0 ; pos <= numbers.length ; pos++)
{
  console.log(numbers[pos]);
}




var numbers = [18, 356, 27, 3, 40];
            //  0   1    2  3   4
for (pos = 0 ; pos < numbers.length ; pos++)
{
  if(numbers[pos] <= 30)
  {
    var result = numbers[pos]*numbers[pos];
    var msg = numbers[pos]+ "to the power of 2 is "+result;
    console.log(msg);
  }
}*/




//console.log(numbers[0]);
//console.log(numbers[5]);

/*numbers[3] = 10;

console.log(numbers[3]);

/*var Mike = [28, "Single", 175, 70 "Male"]
console.log(Mike[1]);*/
//not recommended to put different class of things in the same array

/*numbers.push(70);
//numbers[5] = 70;
console.log(numbers[5]);

numbers.pop();
console.log(numbers[5]);*/
