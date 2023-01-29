const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectError = state => state.auth.error;
const selectUserName = state => state.auth.user.name;
const selectIsRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
  selectIsLoggedIn,
  selectUserName,
  selectIsRefreshing,
  selectError,
};

export default authSelectors;
