//Contructer Functions

//1. Create an array called bands with 3 objects in it. Each of them describes a music band. Each object should have a name, genre, numberOfPerformers, and numberOfGroupies.
var bands = [{
  name: "Yeah Yeah Yeahs",
  genre: "i don't know",
  numberOfPerformers: 3,
  numberOfGroupies: "brazillion"
},{
  name: "The XX",
  genre: "fancy",
  numberOfPerformers: 2,
  numberOfGroupies: "everyone"
},{
  name: "Broods",
  genre: "20 somethings",
  numberOfPerformers: 2,
  numberOfGroupies: "mostly Europe"
}
];

//Now create a constructor function called Band. Have it take in a name, genre, numberOfPerformers, and numberOfGroupies. Set the keys to have the value of the parameters using the this keyword.

var Band = function(name, genre, numberOfPerformers, numberOfGroupies){
  this.name = name;
  this.genre = genre;
  this.numberOfPerformers = numberOfPerformers;
  this.numberOfGroupies = numberOfGroupies;
};


//Now create those same bands you made before using the constructor function Band using the new keyword. Plug in the values for each of the object keys as argumeters.

var Yeahs = new Band("Yeah Yeah Yeahs", "i don't know", 3, "brazillion");
var XXes = new Band("The XX", "fancy", 2, "everyone");
var Broods = new Band("Broods", "20 somethings", 2, "mostly Europe");

//Now create a new array called newBands and push each of the objects that you made into that array.

var newBands = [Yeahs,XXes,Broods];

//Alright, you have created new objects using a constructor function. Let's say we want to add a new key to the constructor function. To do so, go ahead and create a method called bandInfo using the prototype method for the Band constructor. Let's have the bandInfo method alert the band's name and their music genre.

Band.prototype.bandInfo = function(){
  alert("NOW PRESENTING - " + this.name + " the " + this.genre + " group!");
};
