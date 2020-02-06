var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage  = Object.create(stackMethods);
      storage.value = {};
      storage.count = 0;
    return storage;
};

var stackMethods = {};


stackMethods.push = function(value){
  this.value[this.count] = value;
  this.count++;
}


stackMethods.pop = function(){
   if(this.count > 0){
    var temp = this.value[this.count - 1];
    delete this.value[this.count];
    this.count--;
    return temp;
  }
  return 0;
}

stackMethods.size = function(){
  return this.count;
}