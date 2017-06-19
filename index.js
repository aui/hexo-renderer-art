/* global hexo */

'use strict';

var renderer = require('./lib/renderer');

hexo.extend.renderer.register('art', 'html', renderer, true);
