import {
    listPosts as listPostsFromApi,
    createPost as createPostFromApi,
    createVote as createVoteFromApi,
    sendmail as sendmailFromApi
} from 'api/posts.js';

/*  Search text */

export function setSearchText(searchText) {
    return {
        type: '@SEARCH_TEXT/SET_SEARCH_TEXT',
        searchText
    };
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


/*  Posts */

function startLoading() {
    return {
        type: '@POST/START_LOADING'
    };
}

function endLoading() {
    return {
        type: '@POST/END_LOADING'
    };
}

function endListPosts(posts) {
    return {
        type: '@POST/END_LIST_POSTS',
        posts
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

export function listPosts(searchText, loading = false) {
    return (dispatch, getState) => {
        if (!loading)
            dispatch(startLoading());

        return listPostsFromApi(searchText).then(posts => {
            dispatch(endListPosts(posts));
            dispatch(endLoading());
        }).catch(err => {
            console.error('Error listing posts', err);
            dispatch(endLoading());
        });
    };
};

export function createPost(mood, text) {
    return (dispatch, getState) => {
        dispatch(startLoading());

        return createPostFromApi(mood, text).then(post => {
            dispatch(listPosts(getState().searchText, true));
        }).catch(err => {
            console.error('Error creating post', err);
            dispatch(endLoading());
        });
    };
};

export function createVote(id, mood) {
    return (dispatch, getState) => {
        dispatch(startLoading());

        return createVoteFromApi(id, mood).then(post => {
            dispatch(listPosts(getState().searchText, true));
        }).catch(err => {
            console.error('Error creating vote', err);
            dispatch(endLoading());
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

export function toggleMood() {
    return {
        type: '@POST_FORM/TOGGLE_MOOD'
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

export function setMoodToggle(toggle) {
    return {
        type: '@POST_FORM/SET_MOOD_TOGGLE',
        toggle
    };
};

export function selectDog(dog){
  return {
      type: '@POST_FORM/SELECT_DOG',
      dog
  };
};

export function selectMood(mood) {
    return {
        type: '@POST_FORM/SELECT_MOOD',
        mood
    };
};

/*  Post item */

export function toggleTooltip(id) {
    return {
        type: '@POST_ITEM/TOGGLE_TOOLTIP',
        id
    };
};

export function setTooltipToggle(id, toggle) {
    return {
        type: '@POST_ITEM/TOGGLE_TOOLTIP',
        id,
        toggle
    };
};
