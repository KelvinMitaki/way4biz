import {
  STORE_IMAGE,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_IMAGE_START,
  DELETE_IMAGE_STOP,
  DELETE_IMAGE,
  UNPERSIST_IMAGE
} from "../actions/types";

const INITIAL_STATE = {
  imageUrl: [],
  deleteImageLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_IMAGE:
      return { ...state, imageUrl: [...state.imageUrl, action.payload] };
    case ADD_PRODUCT:
      return { ...state, imageUrl: [] };
    case EDIT_PRODUCT:
      return { ...state, imageUrl: [] };
    case DELETE_IMAGE:
      return {
        ...state,
        imageUrl: state.imageUrl.filter(image => image !== action.payload)
      };
    case DELETE_IMAGE_START:
      return { ...state, deleteImageLoading: true };
    case DELETE_IMAGE_STOP:
      return { ...state, deleteImageLoading: false };
    case UNPERSIST_IMAGE:
      return { ...state, imageUrl: [] };
    default:
      return state;
  }
};
