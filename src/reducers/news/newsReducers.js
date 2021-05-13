
import {
    SET_ALL_NEWS, SET_NEWS_DATE, SET_NEWS_DESCRIPTION, SET_NEWS_IMAGE,
    SET_NEWS_TITLE
} from "../../constants/news/newsConstants";
const initial_state = {
    all_news:[],
    title:"",
    image:"",
    description: "",
    date: ""
};
export default function reducer(state = initial_state, action) {
    switch (action.type) {
        case SET_ALL_NEWS:
            return state = { ...state, all_news: action.payload };
        case SET_NEWS_TITLE:
            return state = { ...state, title: action.payload };
        case SET_NEWS_IMAGE:
            return state = { ...state, image: action.payload };
        case SET_NEWS_DESCRIPTION:
            return state = { ...state, description: action.payload };
        case SET_NEWS_DATE:
            return state = { ...state, date: action.payload };
        default:
            return state;
    }
}