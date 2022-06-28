import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations']

let store = {};

(function updateModules () {
  store = normalizeRoot(require('..\\store\\index.js'), 'store/index.js')

  // If store is an exported method = classic mode (deprecated)

  if (typeof store === 'function') {
    return console.warn('Classic mode for store/ is deprecated and will be removed in Nuxt 3.')
  }

  // Enforce store modules
  store.modules = store.modules || {}

  resolveStoreModules(require('..\\store\\admin\\index.js'), 'admin/index.js')
  resolveStoreModules(require('..\\store\\modules\\blog.js'), 'modules/blog.js')
  resolveStoreModules(require('..\\store\\modules\\cart.js'), 'modules/cart.js')
  resolveStoreModules(require('..\\store\\modules\\filter.js'), 'modules/filter.js')
  resolveStoreModules(require('..\\store\\modules\\layout.js'), 'modules/layout.js')
  resolveStoreModules(require('..\\store\\modules\\menu.js'), 'modules/menu.js')
  resolveStoreModules(require('..\\store\\modules\\products.js'), 'modules/products.js')
  resolveStoreModules(require('..\\store\\admin\\modules\\adminauth.js'), 'admin/modules/adminauth.js')
  resolveStoreModules(require('..\\store\\admin\\modules\\authentication.js'), 'admin/modules/authentication.js')
  resolveStoreModules(require('..\\store\\admin\\modules\\brand.js'), 'admin/modules/brand.js')
  resolveStoreModules(require('..\\store\\admin\\modules\\category.js'), 'admin/modules/category.js')
  resolveStoreModules(require('..\\store\\admin\\modules\\coupon.js'), 'admin/modules/coupon.js')
  resolveStoreModules(require('..\\store\\admin\\modules\\digital-products.js'), 'admin/modules/digital-products.js')
  resolveStoreModules(require('..\\store\\admin\\modules\\employee.js'), 'admin/modules/employee.js')
  resolveStoreModules(require('..\\store\\admin\\modules\\invoice.js'), 'admin/modules/invoice.js')
  resolveStoreModules(require('..\\store\\admin\\modules\\localization.js'), 'admin/modules/localization.js')
  resolveStoreModules(require('..\\store\\admin\\modules\\media.js'), 'admin/modules/media.js')
  resolveStoreModules(require('..\\store\\admin\\modules\\menu.js'), 'admin/modules/menu.js')
  resolveStoreModules(require('..\\store\\admin\\modules\\order.js'), 'admin/modules/order.js')
  resolveStoreModules(require('..\\store\\admin\\modules\\pages.js'), 'admin/modules/pages.js')
  resolveStoreModules(require('..\\store\\admin\\modules\\product.js'), 'admin/modules/product.js')
  resolveStoreModules(require('..\\store\\admin\\modules\\Products.js'), 'admin/modules/Products.js')
  resolveStoreModules(require('..\\store\\admin\\modules\\reports.js'), 'admin/modules/reports.js')
  resolveStoreModules(require('..\\store\\admin\\modules\\setCoupons.js'), 'admin/modules/setCoupons.js')
  resolveStoreModules(require('..\\store\\admin\\modules\\sub_category.js'), 'admin/modules/sub_category.js')
  resolveStoreModules(require('..\\store\\admin\\modules\\user.js'), 'admin/modules/user.js')
  resolveStoreModules(require('..\\store\\admin\\modules\\vendor.js'), 'admin/modules/vendor.js')

  // If the environment supports hot reloading...

  if (process.client && module.hot) {
    // Whenever any Vuex module is updated...
    module.hot.accept([
      '..\\store\\index.js',
      '..\\store\\admin\\index.js',
      '..\\store\\modules\\blog.js',
      '..\\store\\modules\\cart.js',
      '..\\store\\modules\\filter.js',
      '..\\store\\modules\\layout.js',
      '..\\store\\modules\\menu.js',
      '..\\store\\modules\\products.js',
      '..\\store\\admin\\modules\\adminauth.js',
      '..\\store\\admin\\modules\\authentication.js',
      '..\\store\\admin\\modules\\brand.js',
      '..\\store\\admin\\modules\\category.js',
      '..\\store\\admin\\modules\\coupon.js',
      '..\\store\\admin\\modules\\digital-products.js',
      '..\\store\\admin\\modules\\employee.js',
      '..\\store\\admin\\modules\\invoice.js',
      '..\\store\\admin\\modules\\localization.js',
      '..\\store\\admin\\modules\\media.js',
      '..\\store\\admin\\modules\\menu.js',
      '..\\store\\admin\\modules\\order.js',
      '..\\store\\admin\\modules\\pages.js',
      '..\\store\\admin\\modules\\product.js',
      '..\\store\\admin\\modules\\Products.js',
      '..\\store\\admin\\modules\\reports.js',
      '..\\store\\admin\\modules\\setCoupons.js',
      '..\\store\\admin\\modules\\sub_category.js',
      '..\\store\\admin\\modules\\user.js',
      '..\\store\\admin\\modules\\vendor.js',
    ], () => {
      // Update `root.modules` with the latest definitions.
      updateModules()
      // Trigger a hot update in the store.
      window.$nuxt.$store.hotUpdate(store)
    })
  }
})()

// createStore
export const createStore = store instanceof Function ? store : () => {
  return new Vuex.Store(Object.assign({
    strict: (process.env.NODE_ENV !== 'production')
  }, store))
}

function normalizeRoot (moduleData, filePath) {
  moduleData = moduleData.default || moduleData

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`)
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData)
  }
  return normalizeModule(moduleData, filePath)
}

function normalizeModule (moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`)

    const state = Object.assign({}, moduleData.state)
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, { state: () => state })
  }
  return moduleData
}

function resolveStoreModules (moduleData, filename) {
  moduleData = moduleData.default || moduleData
  // Remove store src + extension (./foo/index.js -> foo/index)
  const namespace = filename.replace(/\.(js|mjs)$/, '')
  const namespaces = namespace.split('/')
  let moduleName = namespaces[namespaces.length - 1]
  const filePath = `store/${filename}`

  moduleData = moduleName === 'state'
    ? normalizeState(moduleData, filePath)
    : normalizeModule(moduleData, filePath)

  // If src is a known Vuex property
  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName
    const propertyStoreModule = getStoreModule(store, namespaces, { isProperty: true })

    // Replace state since it's a function
    mergeProperty(propertyStoreModule, moduleData, property)
    return
  }

  // If file is foo/index.js, it should be saved as foo
  const isIndexModule = (moduleName === 'index')
  if (isIndexModule) {
    namespaces.pop()
    moduleName = namespaces[namespaces.length - 1]
  }

  const storeModule = getStoreModule(store, namespaces)

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property)
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced
  }
}

function normalizeState (moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`)
    const state = Object.assign({}, moduleData)
    return () => state
  }
  return normalizeModule(moduleData, filePath)
}

function getStoreModule (storeModule, namespaces, { isProperty = false } = {}) {
  // If ./mutations.js
  if (!namespaces.length || (isProperty && namespaces.length === 1)) {
    return storeModule
  }

  const namespace = namespaces.shift()

  storeModule.modules[namespace] = storeModule.modules[namespace] || {}
  storeModule.modules[namespace].namespaced = true
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {}

  return getStoreModule(storeModule.modules[namespace], namespaces, { isProperty })
}

function mergeProperty (storeModule, moduleData, property) {
  if (!moduleData) {
    return
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData)
  }
}
