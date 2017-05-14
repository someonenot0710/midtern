
/* Post Form */

const initPostFormState = {
    inputValue: '',
    inputDanger: false,
    dogToggle: false,
    dogCheck: 'na',
    isCheck: '0',
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
        default:
            return state;
    }
}
