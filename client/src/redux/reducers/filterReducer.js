const INITIAL_STATE = {
  priceMax: null,
  priceMin: null,
  rating: false,
  freeShipping: false,
  latest: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
