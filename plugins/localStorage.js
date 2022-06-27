import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: ['vuex',],  
    paths: ['cart']
  })(store)
  createPersistedState({
    key: ['user',],  
    paths: ['admin_adminauth']
  })(store)
}
