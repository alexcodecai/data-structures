var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
    this.value = {};
    this.end = 0;
    this.start = 0;

};


Queue.prototype.enqueue = function(value){
  this.value[this.end] = value;
  this.end++;
}

Queue.prototype.dequeue = function(){
  if(this.end > this.start){
      var temp = this.value[this.start];
      delete this.value[this.start];
      this.start++
      return temp; 
  }
  return 0;
}

Queue.prototype.size = function (){
  return this.end -this.start;
}