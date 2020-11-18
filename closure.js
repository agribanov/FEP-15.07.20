function makeArmy() {
    let shooters = [];
  
    // let i = 0;
    for (let i = 0; i<10; i++){
      let shooter = function() { 
        console.log( i ); 
      }
      shooters.push(shooter);
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0](); // у 0-го стрелка будет номер 10
  army[5](); // и у 5-го стрелка тоже будет номер 10