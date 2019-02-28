import axios from 'axios';
import {
  SET_TRANSACTIONS,
  SET_TRANSACTION_START,
  TRANSACTION_ERROR,
  TRANSACTION_LOADING,
  TRANSACTIONS_HAS_MORE,
} from './types';

export const setTransactions = transactions => ({
  type: SET_TRANSACTIONS,
  transactions,
});

export const setTransactionStart = start => ({
  type: SET_TRANSACTION_START,
  start,
});

export const setTransactionError = status => ({
  type: TRANSACTION_ERROR,
  status,
});

export const setTransactionLoading = status => ({
  type: TRANSACTION_LOADING,
  status,
});

export const setHasMore = status => ({
  type: TRANSACTIONS_HAS_MORE,
  status,
});

// fetches transactions from the server, updating all the necessary
// state variables along the way.
export const startSetTransactions = () => (dispatch, getState) => {
  const {
    auth: { uid }, transactions: {
      start, count, hasMore, error,
    },
  } = getState();
  if (hasMore && !error) {
    dispatch(setTransactionLoading(true));
    // increment the starting point for the next fetch;
    dispatch(setTransactionStart(start + count));
    axios.get(`api/users/${uid}/transactions`, { params: { start, count } })
      .then((payload) => {
        dispatch(setTransactions(payload.data.transactions));
        dispatch(setTransactionLoading(false));
        // if less transactions are returned then hasMore will be false
        dispatch(setHasMore(payload.data.hasMore));
      })
      .catch((err) => {
        // fetch unsuccessul, set the start back to original value
        dispatch(setTransactionStart(start));
        dispatch(setTransactionLoading(false));
        dispatch(setTransactionError('Could not fetch any transactions. Check your connection.'));
        if (err.response) {
          dispatch(setHasMore(err.response.data.hasMore));
        }
        // error object with a message is also returned: response.data.message
      });
  }
};
