const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env){
   alias({
      '@components': 'src/components',
      '@commands': 'src/commands',
      '@error': 'src/error',
      '@theme': 'src/theme',
   })(config);
   return config;
}