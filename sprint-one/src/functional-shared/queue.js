var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.value = {};
  storage.end = 0;
  storage.start = 0;
  _.extend(storage, queueMethods);
  return storage;
};

var queueMethods = {};


queueMethods.enqueue = function(value){
  this.value[this.end] = value;
  this.end++;
}


queueMethods.dequeue = function(){
  if(this.end > this.start){
    var temp = this.value[this.start];
    delete this.value[this.start];
    this.start++;
    return temp;
  }
    return 0 ;
}


queueMethods.size = function(){
    return this.end - this.start;
}