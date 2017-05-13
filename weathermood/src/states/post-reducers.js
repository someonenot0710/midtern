/* Search text */

export function searchText(state = '', action) {
    switch (action.type) {
        case '@SEARCH_TEXT/SET_SEARCH_TEXT':
            return action.searchText;
        default:
            return state;
    }
}

/* Posts */

const initPostState = {
    postLoading: false,
    posts: []
};
export function post(state = initPostState, action) {
    switch (action.type) {
        case '@POST/START_LOADING':
            return {
                ...state,
                postLoading: true
            };
        case '@POST/END_LOADING':
            return {
                ...state,
                postLoading: false
            };
        case '@POST/END_LIST_POSTS':
            return {
                ...state,
                posts: action.posts
            };
        default:
            return state;
    }
}

/* Post Form */

const initPostFormState = {
    inputValue: '',
    inputDanger: false,
    moodToggle: false,
    dogToggle: false,
    dogCheck: 'na',
    isCheck: '0',
    mood: 'na',
    dogname: 'na',
    nameToggle: false,
    name:'',
    mail:'',
    date:'',
    time:''
};
export function postForm(state = initPostFormState, action) {
    switch (action.type) {
        case '@POST_FORM/NAME':
          return{
            ...state,
            name: action.name
          };

          case '@POST_FORM/MAIL':
            return{
              ...state,
              mail: action.mail
            };

          case '@POST_FORM/DATE':
            return{
              ...state,
              date: action.date
            };

          case '@POST_FORM/TIME':
            return{
              ...state,
              time: action.time
            };

        case '@POST_FORM/INPUT':
            return {
                ...state,
                inputValue: action.value
            };
        case '@POST_FORM/INPUT_DANGER':
            return {
                ...state,
                inputDanger: action.danger
            };
        case '@POST_FORM/TOGGLE_MOOD':
            return {
                ...state,
                moodToggle: !state.moodToggle
            };
        case '@POST_FORM/TOGGLE_DOG':
            return{
                ...state,
                dogToggle:  !state.dogToggle
            };
        case '@POST_FORM/SELECT_DOG':
            return{
              ...state,
              dogname: action.dog
            }
        case '@POST_FORM/TOGGLE_NAME':
                return{
                    ...state,
                    nameToggle:  !state.nameToggle
                };

        case '@POST_FORM/CHECK_DOG':
            return{
                ...state,
                dogCheck: action.choose
            };
        case '@POST_FORM/CHECK_YES':
            return {
                ...state,
                isCheck: action.value
            };
        case '@POST_FORM/SET_MOOD_TOGGLE':
            return {
                ...state,
                moodToggle: action.toggle
            };
        case '@POST_FORM/SELECT_MOOD':
            return {
                ...state,
                mood: action.mood
            };
        default:
            return state;
    }
}

/* Post item */

const initPostItemState = {
    tooltipOpen: {}
};

export function postItem(state = initPostItemState, action) {
    switch (action.type) {
        case '@POST_ITEM/TOGGLE_TOOLTIP':
            return {
                tooltipOpen: {
                    ...state.tooltipOpen,
                    [action.id]: state.tooltipOpen[action.id] ? false : true
                }
            };
        case '@POST_ITEM/SET_TOOLTIP_TOGGLE':
            return {
                tooltipOpen: {
                    ...state.tooltipOpen,
                    [action.id]: action.toggle
                }
            };
        default:
            return state;
    }
}
