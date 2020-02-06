var Stack = function() {
  var someInstance = {};
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
   // console.log(storage[size]);
    size++;

  };

  someInstance.pop = function() {
    if(size <= 0){
      return 0;
    }
    var temp = storage[size - 1];
   // console.log(temp);
    //console.log(storage[size]);
    delete storage[size - 1];
    size--;
    return temp; 
  };

  someInstance.size = function() {
    //console.log(size);
    return size;
  };

  return someInstance;
};
