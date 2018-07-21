import World from '../packages/world/world'

const install = function (Vue) {
  if (install.installed) return
  Vue.component(World.name, World)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  World
}
