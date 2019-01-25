import { SET_ADOPTION_DOG, SET_ADOPTION_CAT } from "../actions/adopt";

const initialState = {
  dog: null,
  cat: null
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
  return state;
};

export default adoptionReducer;
