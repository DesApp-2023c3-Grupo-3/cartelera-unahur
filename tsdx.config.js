const { terser } = require('rollup-plugin-terser');

/*
 * Los schemas en Swagger se ven con un nombre de una sola letra (por ejemplo: "m" o "u") por la minificación
 * que hace tsdx por defecto. Para desactivar esto, opté por eliminar el plugin terser, porque además traía
 * otro problema: compilaba las clases como funciones.
 *
 * Ver https://github.com/jaredpalmer/tsdx/issues/310 para más detalles del problema.
 */

function withoutMinificationPlugin(plugins) {
  return plugins.filter(plugin => plugin.name !== 'terser');
}

module.exports = {
  rollup(config, opts) {
    config.plugins = withoutMinificationPlugin(config.plugins);
    return config;
  },
};
