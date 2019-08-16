const actions = {
  set_transation_slide({
    commit,
    state
  }, data) {
    commit('SET_TRANSATION_SLIDE', data);
  },
  set_istypeapp({
    commit,
    state
  }, data) {
    commit('SET_ISTYPEAPP', data);
  },
}
export default actions;
