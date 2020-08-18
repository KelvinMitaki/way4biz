import {
  FETCH_ADMIN_INBOX,
  FETCH_ADMIN_INBOX_START,
  FETCH_ADMIN_INBOX_STOP,
  FETCH_ADMIN_ORDERS,
  FETCH_ALL_ORDERS,
  FETCH_MORE_ALL_ORDERS,
  FETCH_ORDER_BY_ID,
  FETCH_ORDER_BY_ID_ERROR,
  HAS_MORE_ORDERS_FALSE,
  ADMIN_RADIO,
  SET_PENDING_ORDERS,
  FETCH_ADMIN_ORDER,
  FETCH_ADMIN_ORDERS_START,
  FETCH_ADMIN_ORDERS_STOP,
  FETCH_ADMIN_ORDER_START,
  FETCH_ADMIN_ORDER_STOP,
  FETCH_ORDER_BY_ID_START,
  FETCH_ORDER_BY_ID_STOP,
  CONFIRM_DELIVERY_START,
  CONFIRM_DELIVERY_STOP,
  REDEEM_COUNT
} from "../actions/types";

const INITIAL_STATE = {
  inbox: null,
  inboxLoading: false,
  adminOrders: null,
  allAdminOrders: null,
  orderCount: null,
  ordersToSkip: 0,
  radioLoading: false,
  orderError: null,
  hasMoreOrders: true,
  ordersDate: null,
  adminOrdersLoading: false,
  adminOrderLoading: false,
  adminOrder: null,
  deliveryLoading: false,
  redeemCount: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ADMIN_INBOX:
      return { ...state, inbox: action.payload };
    case FETCH_ADMIN_INBOX_START:
      return { ...state, inboxLoading: true };
    case FETCH_ADMIN_INBOX_STOP:
      return { ...state, inboxLoading: false };
    case FETCH_ADMIN_ORDERS:
      return { ...state, adminOrders: action.payload };
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
    case SET_PENDING_ORDERS:
      return { ...state, ordersDate: "pendingOrders" };
    case FETCH_ADMIN_ORDER:
      return { ...state, adminOrder: action.payload, orderError: null };
    case FETCH_ADMIN_ORDERS_START:
      return { ...state, adminOrdersLoading: true };
    case FETCH_ADMIN_ORDERS_STOP:
      return { ...state, adminOrdersLoading: false };
    case FETCH_ADMIN_ORDER_START:
      return { ...state, adminOrderLoading: true };
    case FETCH_ADMIN_ORDER_STOP:
      return { ...state, adminOrderLoading: false };
    case FETCH_ORDER_BY_ID_START:
      return { ...state, adminOrderLoading: true };
    case FETCH_ORDER_BY_ID_STOP:
      return { ...state, adminOrderLoading: false };
    case CONFIRM_DELIVERY_START:
      return { ...state, deliveryLoading: true };
    case CONFIRM_DELIVERY_STOP:
      return { ...state, deliveryLoading: false };
    case REDEEM_COUNT:
      return { ...state, redeemCount: action.payload };
    default:
      return state;
  }
};
