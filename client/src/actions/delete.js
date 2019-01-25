// import { API_BASE_URL } from "../config";

export const DELETE_ADOPTION_CAT = "DELETE_ADOPTION_CAT";
export const deleteAdoptionCat = animal => ({
  type: DELETE_ADOPTION_CAT,
  animal
});

export const DELETE_ADOPTION_DOG = "DELETE_ADOPTION_DOG";
export const deleteAdoptionDog = animal => ({
  type: DELETE_ADOPTION_DOG,
  animal
});

export const DELETE_ADOPTION_ERROR = "DELETE_ADOPTION_DOG_ERROR";
export const deleteAdoptionError = error => ({
  type: DELETE_ADOPTION_ERROR,
  error
});

export const fetchDogs = () => dispatch => {
  // dispatch(setDogLoading);
  fetch("http://localhost:8080/api/dog", {
      method: DELETE
  })
    .then(res => {
      return res.json();
    })
    .then(data => dispatch(deleteAdoptionDog(data)))
    .catch(err => console.log(err));
};

export const fetchCats = () => dispatch => {
  fetch("http://localhost:8080/api/cat", {
      method: DELETE
  })
    .then(res => {
      return res.json();
    })
    .then(data => dispatch(deleteAdoptionCat(data)))
    .catch(err => console.log(err));
};
