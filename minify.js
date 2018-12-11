const minify = require('node-minify');

minify.minify({
    compressor: 'gcc',
    input: 'InupiaqBookmarklet.js',
    output: 'InupiaqBookmarklet.min.js'
});
