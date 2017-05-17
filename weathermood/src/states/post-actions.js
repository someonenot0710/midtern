import {
    sendmail as sendmailFromApi,
    sendtell as sendtellFromApi
} from 'api/posts.js';


export function tellName(tellname){
  return{
    type:'@POST_FORM/TELL_NAME',
    tellname
  };
}


export function tellMail(mail){
  return{
    type:'@POST_FORM/TELL_MAIL',
    mail
  };
}

export function tellText(text){
  return{
    type:'@POST_FORM/TELL_TEXT',
    text
  };
}
export function toggleModal(){
  return {
    type:'@POST_FORM/TOGGLE_MODAL'
  }
}

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


export function sendmail(name,mail,date,time,dogname,comment,file){
  return(dispatch,getState)=>{
      return sendmailFromApi(name,mail,date,time,dogname,comment,file).then(()=>{
      }).catch(err=>{
        console.error('Error send mail',err);
      });
  };
};

export function sendtell(name,mail,text,file){
  return(dispatch,getState)=>{
      return sendtellFromApi(name,mail,text,file).then(()=>{
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
