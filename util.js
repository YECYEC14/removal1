function processGrade(grade){
  if (grade < 70){
    
    console.log("There is no grade like that!"  );
    }
  else if(grade > 100) {
      console.log("GRADE is OVERKILL:" + (grade));   
    }

 else if(grade == 'INC'){ 
    console.log("Your grade is incomplete");
    }
    else if(grade =='DROP'){
      console.log("You have drop the subject" );   
    }

  }


module.exports = {
    processTheGrade:processGrade
    
}
    

