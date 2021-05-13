import {
  SET_EMAIL,
  SET_PASSWORD,
  LOGIN,
  LOGOUT,
  SET_ALL_EVENTS,
  SET_DETAILS
} from "../constants/ActionTypes";

const initial_state = {
  email: "",
  isHome: true,
  password: "",
  user_id: "",
  events: [],
  details:''
};
export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_EMAIL:
      return state = { ...state, email: action.payload };
    case SET_ALL_EVENTS:
      return state = { ...state, events: action.payload };
    case SET_PASSWORD:
      return state = { ...state, password: action.payload };
    case SET_DETAILS:
      return state = { ...state, details: action.payload };
    case LOGIN:
      return state = { ...state, isHome: false, user_id: action.payload._id };
    case LOGOUT:
      return state = {
        ...state,
        email: "",
        isHome: true,
        password: "",
        user_id: "",
      };
    default:
      return state;
  }

}