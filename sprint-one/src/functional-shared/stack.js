var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.value = {};
  storage.count = 0;
  _.extend(storage, stackMethods);
  //console.log(storage )  
  return storage;
};

var stackMethods = {};

stackMethods.push = function (value){
  this.value[this.count] = value ;
  // console.log(this);
  //console.log(this.value);
  this.count++;
} 


stackMethods.pop = function (){
  if(this.count <= 0){
    return 0 ;
  }
  var temp = this.value[this.count - 1];
  delete this.value[this.count - 1];
  this.count--;
  return temp;

}

stackMethods.size = function (){
  return this.count;
}



