class VueRouter {

}
VueRouter.install = function (vue) {
  
}

export default VueRouter


Vue.use = function (plugin) {
  const installedPlugins = (this._installedPlugins || (this.installedPlugins = []));
  if (_installedPlugins.indexOf(plugin) > -1) {
    return this;
  }
  const args = toArray(arguments, 1)
  args.unshift(this);
  if (typeof plugin.install === 'function') {
    plugin.install.apply(plugin,args);
  } else if (typeof plugin === 'function') {
    plugin.apply(null,plugin,args)
  }
  installedPlugins.push(plugin);
  return this;
}