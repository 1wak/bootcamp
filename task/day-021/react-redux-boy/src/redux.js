import Axios from "axios";

const initState = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjA1YWRhZDQwZWNlNGZmZGVkMzczYjg4IiwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTYxNjcyMzI2NSwiZXhwIjo0MjQ2NDY5MjY1fQ.-wa9QIb_ApE3UwhAuk1eE2EASuvaEvCdfuoHgFzK2PU",
  auth: "",
  item: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_VENDOR":
      return { ...state, item: action.payload };
    default:
      return state;
  }
};

export const getVendor = () => async (dispatch) => {
  await Axios({
    method: "GET",
    url: "http://localhost:8001/api/v1/vendors/",
    headers: { "x-access-token": initState.token },
  })
    .then((res) => res.data)
    .then(({ data }) => {
      dispatch({
        type: "GET_VENDOR",
        payload: data,
      });
    });
};

export default rootReducer;
