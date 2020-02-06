class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.value = {};
    this.end = 0;
    this.start = 0;
  }

  enqueue(value){
    this.value[this.end] = value;
    this.end++;
  }

  dequeue(){
    if(this.end > this.start){
      var temp = this.value[this.start];
      delete this.value[this.start];
      this.start++;
      return temp;
    }
    return 0;
  }
  size(){
    return this.end - this.start;
  }
}
