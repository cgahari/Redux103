import {CLEAR_STORIES, LOAD_STORIES} from '../actions/index';
const stories = [
    {
        "by":"Charles Goodman",
        "id":1000,
        "title":"Introduction to Redux",
        "url":"https://redux.com"
    },
    {
        "by":"Idris Masumbuko",
        "id":1012,
        "title":"Introduction playing Video Games",
        "url":"https://videoGames.com"
    },
    {
        "by":"Dahlia Uwimbabazi",
        "id":1220,
        "title":"Introduction to Pharmacy",
        "url":"https://healthmed.com"
    }
]

const initialState = {
    items:[],
}

export function storiesReducer(state = initialState, action){
    console.log(state);
    switch(action.type){
        case LOAD_STORIES:
            return { items: stories.slice(),
            };
        case CLEAR_STORIES:
            return { items: [],
            };
        default: return state;
    }
}

export default storiesReducer;