var assert = require('assert');
var required = require('./index.js');

assert.throws(function() {required(['this definitely will not be defined'])});

process.env['THIS_IS_SET_NOW'] = 'yay';
assert(required(['THIS_IS_SET_NOW']));


process.env['THIS_IS_ALSO_SET_NOW'] = 'yay';
assert(required([{var: 'THIS_IS_ALSO_SET_NOW', default: 'nah'}]));

assert(required([{var: 'IT_IS_COOL_IF_THIS_IS_NOT_SET', default: 'yeah but'}]));
assert.equal(process.env.IT_IS_COOL_IF_THIS_IS_NOT_SET, 'yeah but');
