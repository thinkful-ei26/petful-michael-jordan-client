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

export const fetchAdoptions = () => dispatch => {
  // dispatch(setDogLoading);
  fetch("https://localhost:8080/api/dog")
    .then(data => dispatch(setAdoptionDog(data)))
    .catch(err => console.log(err));
};
