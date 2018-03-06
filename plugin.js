const ConcatSource = require('webpack-sources').ConcatSource

class DefPlugin {
  constructor(name) {
  }

  apply(compiler) {
  	compiler.plugin('compilation', function(compilation){
  		compilation.templatesPlugin('render-with-entry', (source, chunk, hash)=>{
  			return new ConcatSource("define(['module', 'exports'], function(module, exports){ ",source,"})")
  		})
  	})
  }
}

module.exports = DefPlugin
