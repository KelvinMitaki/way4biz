import {
  FETCH_PRODUCTS_SEARCH,
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS,
  FETCH_CATEGORIES,
  SINGLE_CATEGORY,
  FETCH_ALL_CATEGORIES,
  FETCH_BUYER_ORDERS,
  FETCH_BUYER_ORDER_DETAILS,
  FETCH_MORE_PRODUCTS,
  HAS_MORE_FALSE,
  MORE_SINGLE_CATEGORY_PRODUCTS,
  HAS_MORE_CATEGORY_FALSE,
  FETCH_SINGLE_PRODUCT,
  FETCH_RELATED_PRODUCTS,
  FETCH_PENDING_REVIEWS
} from "../actions/types";

const INITIAL_STATE = {
  searchedProducts: [],
  productsError: null,
  products: [],
  categories: [],
  singleCategoryProducts: [],
  buyerOrders: [],
  buyerOrderDetails: null,
  productCount: null,
  hasMore: true,
  hasMoreCategories: true,
  categoryProductCount: null,
  itemsToSkip: 0,
  product: null,
  relatedProducts: [],
  pendingReviewProducts: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SEARCH:
      return { ...state, searchedProducts: action.payload };
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
        productCount: action.payload.productCount
      };
    case FETCH_MORE_PRODUCTS:
      const productIds = new Set(state.products.map(p => p._id));
      return {
        ...state,
        products: [
          ...state.products,
          ...action.payload.products.filter(prod => !productIds.has(prod._id))
        ]
      };

    case HAS_MORE_FALSE:
      return { ...state, hasMore: false };
    case HAS_MORE_CATEGORY_FALSE:
      return { ...state, hasMoreCategories: false };
    case FETCH_PRODUCTS_FAILED:
      return { ...state, productsError: "Fetching products failed" };
    case FETCH_CATEGORIES:
      return { ...state, categories: action.payload };

    case SINGLE_CATEGORY:
      return {
        ...state,
        singleCategoryProducts: action.payload.products,
        categoryProductCount: action.payload.productCount
      };
    case MORE_SINGLE_CATEGORY_PRODUCTS:
      const prodIds = new Set(state.singleCategoryProducts.map(pro => pro._id));
      return {
        ...state,
        singleCategoryProducts: [
          ...state.singleCategoryProducts,
          ...action.payload.products.filter(prod => !prodIds.has(prod._id))
        ],
        itemsToSkip: state.itemsToSkip + 6
      };
    case FETCH_ALL_CATEGORIES:
      return { ...state, categories: action.payload };
    case FETCH_BUYER_ORDERS:
      return { ...state, buyerOrders: action.payload };
    case FETCH_BUYER_ORDER_DETAILS:
      return { ...state, buyerOrderDetails: action.payload };
    case FETCH_SINGLE_PRODUCT:
      return { ...state, product: action.payload };
    case FETCH_RELATED_PRODUCTS:
      return {
        ...state,
        relatedProducts: action.payload.filter(
          item => item._id !== state.product._id
        )
      };
    case FETCH_PENDING_REVIEWS:
      return { ...state, pendingReviewProducts: action.payload };
    default:
      return state;
  }
};
