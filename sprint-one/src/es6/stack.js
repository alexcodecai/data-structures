class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.value = {};
    this.count = 0;
  }
push(value){
  this.value[this.count] = value;
  this.count++;
}

pop(){
  if(this.count > 0){
    var temp = this.value[this.count - 1];
    delete this.value[this.count - 1];
    this.count--;
    return temp;
  }
  return 0;
}

size(){
  return this.count;
}

}