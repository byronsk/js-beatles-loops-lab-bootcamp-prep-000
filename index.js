var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


theBeatlesPlay(musicians, instruments); 

function theBeatlesPlay(musicians, instruments) {
  var newArr = []; 
  for (var i =0; i < musicians.length; i++) {
    newArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArr;
}


 var facts = [
 "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
 "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(arr) {
  var result= []; 
  var i = 0; 
  while(i < arr.length) {
    result.push(arr[i] + '!!!')
    i++; 
  }
  return result; 
}
 johnLennonFacts(facts); 
 
function iLoveTheBeatles(n){
  var newArr = [];
  
  do{
    newArr.push("I love the Beatles!");
    n++;
    console.log(n);
    // for(var i = n; i >= 0; i--){
    //     n--;
    //     newArr.push("I love the Beatles!");
    //   }
  }while(n<15);
  
  return newArr;
}
