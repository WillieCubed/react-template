const withPWA = require('next-pwa');
const runtimeCaching = ('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
});
