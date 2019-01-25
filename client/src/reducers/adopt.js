import { SET_ADOPTION_DOG, SET_ADOPTION_CAT } from "../actions/adopt";
import { DELETE_ADOPTION_DOG, DELETE_ADOPTION_CAT } from "../actions/delete";

const initialState = {
  dog: null,
  cat: null,
  deleted: false,
  name: null
};

const adoptionReducer = (state = initialState, action) => {
  if (action.type === SET_ADOPTION_DOG) {
    return Object.assign({}, state, {
      dog: action.animal
    });
  }
  if (action.type === SET_ADOPTION_CAT) {
    return Object.assign({}, state, {
      cat: action.animal
    });
  }
  if (action.type === DELETE_ADOPTION_CAT) {
    return Object.assign({}, state, {
      deleted: true
    });
  }
  if (action.type === DELETE_ADOPTION_DOG) {
    return Object.assign({}, state, {
      deleted: true
    });
  }
  return state;
};

export default adoptionReducer;
