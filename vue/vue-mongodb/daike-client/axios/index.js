import apiLogin from './interface/login'
import register from './interface/register'

const install = Vue => {
  Object.defineProperties(Vue.prototype, {
    $http: {
      get() {
        return Object.assign(
          {},
          apiLogin,
          register
          //...
        )
      }
    }
  })
}

export default install;