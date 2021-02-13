//Multiply numeric property values by 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  for(let prop in menu){
      let temp = menu[prop]
      if(typeof temp === 'number'){
        menu[prop] = temp*2;
      }     
  }