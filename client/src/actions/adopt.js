// import { API_BASE_URL } from "../config";

export const SET_ADOPTION_CAT_LOADING = "SET_ADOPTION_CAT_LOADING";
export const setReviewLoadingCat = () => ({
  type: SET_ADOPTION_CAT_LOADING
});

export const SET_ADOPTION_CAT = "SET_ADOPTION_CAT";
export const setAdoptionCat = animal => ({
  type: SET_ADOPTION_CAT,
  animal
});

export const SET_ADOPTION_CAT_ERROR = "SET_ADOPTION_CAT_ERROR";
export const setAdoptionCatError = error => ({
  type: SET_ADOPTION_CAT_ERROR,
  error
});

export const SET_ADOPTION_DOG_LOADING = "SET_ADOPTION_DOG_LOADING";
export const setReviewLoadingDog = () => ({
  type: SET_ADOPTION_DOG_LOADING
});

export const SET_ADOPTION_DOG = "SET_ADOPTION_DOG";
export const setAdoptionDog = animal => ({
  type: SET_ADOPTION_DOG,
  animal
});

export const SET_ADOPTION_DOG_ERROR = "SET_ADOPTION_DOG_ERROR";
export const setAdoptionDogError = error => ({
  type: SET_ADOPTION_DOG_ERROR,
  error
});

export const fetchDogs = () => dispatch => {
  // dispatch(setDogLoading);
  fetch("http://localhost:8080/api/dog")
    .then(res => {
      return res.json();
    })
    .then(data => dispatch(setAdoptionDog(data)))
    .catch(err => console.log(err))
};

export const fetchCats = () => dispatch => {
  fetch("http://localhost:8080/api/cat")
    .then(res => {
      return res.json();
    })
    .then(data => dispatch(setAdoptionCat(data)))
    .catch(err => console.log(err))
};

export const SET_NAME = "SET_NAME";
export const setName = name => ({
  type: SET_NAME,
  name
});

export const setNewName = name => dispatch => {
  dispatch(setName(name));
};
