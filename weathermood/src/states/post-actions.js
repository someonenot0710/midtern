import {
    sendmail as sendmailFromApi
} from 'api/posts.js';

export function inputName(name){
    return {
      type: '@POST_FORM/NAME',
      name
    };
}

export function inputEmail(mail){

  return {
    type: '@POST_FORM/MAIL',
    mail
  };

}

export function inputDate(date){

  return {
    type: '@POST_FORM/DATE',
    date
  };

}

export function inputTime(time){

  return {
    type: '@POST_FORM/TIME',
    time
  };

}


export function sendmail(name,mail,date,time,dogname,comment){
  return(dispatch,getState)=>{
      return sendmailFromApi(name,mail,date,time,dogname,comment).then(()=>{

      }).catch(err=>{
        console.error('Error send mail',err);
      });
  };
};


/*  Post Form */

export function input(value) {
    return {
        type: '@POST_FORM/INPUT',
        value
    };
};

export function inputDanger(danger) {
    return {
        type: '@POST_FORM/INPUT_DANGER',
        danger
    };
};

export function toggleDog(){
  return {
      type: '@POST_FORM/TOGGLE_DOG'
  };
};

export function toggleName(){
  return {
      type: '@POST_FORM/TOGGLE_NAME'
  };
};


export function checkDog(choose){
  return {
      type: '@POST_FORM/CHECK_DOG',
      choose
  };
};

export function CheckYes(value){
  return {
    type: '@POST_FORM/CHECK_YES',
    value
  };
};

export function selectDog(dog){
  return {
      type: '@POST_FORM/SELECT_DOG',
      dog
  };
};
