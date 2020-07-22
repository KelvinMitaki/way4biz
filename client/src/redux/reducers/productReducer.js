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
  FETCH_PENDING_REVIEWS,
  SINGLE_PRODUCT_START,
  SINGLE_PRODUCT_STOP,
  PRODUCT_REVIEWS,
  FILTERED_PRODUCTS_START,
  FILTERED_PRODUCTS_STOP,
  FILTERED_PRODUCTS,
  FETCH_SELLER_REVIEWS,
  FETCH_SELLER_REVIEWS_START,
  FETCH_SELLER_REVIEWS_STOP,
  STORE_DESCRIPTION,
  REDIRECT_ON_FAIL_START,
  REDIRECT_ON_FAIL_STOP,
  STORE_IMAGE_START,
  STORE_IMAGE_STOP,
  GET_STOCK_START,
  GET_STOCK_STOP,
  GET_STOCK,
  FETCH_ADMIN_ORDERS,
  FETCH_ADMIN_ORDERS_START,
  FETCH_ADMIN_ORDERS_STOP,
  FETCH_ADMIN_PENDING_ORDERS,
  FETCH_ALL_ORDERS,
  HAS_MORE_ORDERS_FALSE,
  ADMIN_RADIO,
  FETCH_MORE_ALL_ORDERS,
  FETCH_ADMIN_ORDER,
  FETCH_ORDER_BY_ID,
  FETCH_ORDER_BY_ID_ERROR,
  FETCH_ORDER_BY_ID_START,
  FETCH_ORDER_BY_ID_STOP
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
  pendingReviewProducts: [],
  singleProductLoad: false,
  productReviews: [],
  filteredProductsLoading: false,
  hasMoreCategoryProducts: false,
  sellerReviews: [],
  sellerReviewsLoading: false,
  description: "",
  redirectOnFailLoading: false,
  storeImageLoading: false,
  stock: [],
  stockLoading: false,
  adminOrders: null,
  adminOrdersLoading: false,
  adminOrderLoading: false,
  adminPendingOrders: null,
  allAdminOrders: null,
  ordersToSkip: 0,
  orderCount: null,
  hasMoreOrders: true,
  ordersDate: null,
  radioLoading: false,
  adminOrder: null,
  orderError: null
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
        categoryProductCount: action.payload.productCount,
        itemsToSkip: state.itemsToSkip + 6
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
    case SINGLE_PRODUCT_START:
      return { ...state, singleProductLoad: true };
    case SINGLE_PRODUCT_STOP:
      return { ...state, singleProductLoad: false };
    case PRODUCT_REVIEWS:
      return { ...state, productReviews: action.payload };
    case FILTERED_PRODUCTS:
      return { ...state, singleCategoryProducts: action.payload };
    case FILTERED_PRODUCTS_START:
      return {
        ...state,
        filteredProductsLoading: true,
        hasMoreCategoryProducts: true
      };
    case FILTERED_PRODUCTS_STOP:
      return {
        ...state,
        filteredProductsLoading: false,
        hasMoreCategoryProducts: false
      };
    case FETCH_SELLER_REVIEWS:
      return { ...state, sellerReviews: action.payload };
    case FETCH_SELLER_REVIEWS_START:
      return { ...state, sellerReviewsLoading: true };
    case FETCH_SELLER_REVIEWS_STOP:
      return { ...state, sellerReviewsLoading: false };
    case STORE_DESCRIPTION:
      return { ...state, description: action.payload };
    case REDIRECT_ON_FAIL_START:
      return { ...state, redirectOnFailLoading: true };
    case REDIRECT_ON_FAIL_STOP:
      return { ...state, redirectOnFailLoading: false };
    case STORE_IMAGE_START:
      return { ...state, storeImageLoading: true };
    case STORE_IMAGE_STOP:
      return { ...state, storeImageLoading: false };
    case GET_STOCK_START:
      return { ...state, stockLoading: true };
    case GET_STOCK_STOP:
      return { ...state, stockLoading: false };
    case GET_STOCK:
      return {
        ...state,
        stock: [
          { label: "Stock In", value: action.payload.stockIn },
          { label: "Stock Out", value: action.payload.stockOut }
        ]
      };
    case FETCH_ADMIN_ORDERS:
      return { ...state, adminOrders: action.payload };
    case FETCH_ADMIN_ORDERS_START:
      return { ...state, adminOrdersLoading: true };
    case FETCH_ADMIN_ORDERS_STOP:
      return { ...state, adminOrdersLoading: false };
    case FETCH_ADMIN_PENDING_ORDERS:
      return { ...state, adminPendingOrders: action.payload };
    case FETCH_ALL_ORDERS:
      return {
        ...state,
        allAdminOrders: action.payload.orders,
        orderCount: action.payload.ordersCount,
        ordersToSkip: state.ordersToSkip + 5,
        radioLoading: false,
        orderError: null
      };
    case FETCH_MORE_ALL_ORDERS:
      const orderIds = new Set(state.allAdminOrders.map(order => order._id));
      return {
        ...state,
        allAdminOrders: [
          ...state.allAdminOrders,
          ...action.payload.orders.filter(order => !orderIds.has(order._id))
        ],
        ordersToSkip: state.ordersToSkip + 5,
        orderError: null
      };
    case FETCH_ORDER_BY_ID:
      return {
        ...state,
        allAdminOrders: [action.payload],
        hasMoreOrders: false,
        ordersToSkip: 2,
        orderCount: 1,
        orderError: null
      };
    case FETCH_ORDER_BY_ID_ERROR:
      return {
        ...state,
        orderError: "No Order with that ID",
        hasMoreOrders: false,
        ordersToSkip: 2,
        orderCount: 1,
        allAdminOrders: []
      };
    case HAS_MORE_ORDERS_FALSE:
      return { ...state, hasMoreOrders: false };
    case ADMIN_RADIO:
      return {
        ...state,
        ordersDate: action.payload.event.value,
        radioLoading: true
      };
    case FETCH_ADMIN_ORDER:
      return { ...state, adminOrder: action.payload, orderError: null };
    case FETCH_ORDER_BY_ID_START:
      return { ...state, adminOrderLoading: true };
    case FETCH_ORDER_BY_ID_STOP:
      return { ...state, adminOrderLoading: false };
    default:
      return state;
  }
};
