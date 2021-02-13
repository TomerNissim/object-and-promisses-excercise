//Check for emptiness
function isEmpty(object) {
    for (let prop in object){
      return false;
    }
    return true;
  }