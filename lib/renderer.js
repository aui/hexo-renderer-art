'use strict';

var template = require('art-template');
var assign = require('object-assign');

function renderer(data, locals) {
    return template.render(data.text, locals, {filename: data.path});
}

renderer.compile = function(data) {
    return template.compile(data.text, {
        filename: data.path
    });
};

module.exports = renderer;
