module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us).
  },

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'raven-js', target: '~3.0.5' }
    ]);
  }
};
