/* global describe, it */
'use strict';

var assert = require('assert');

describe('#example', function () {
  var example = require('../../src/annotation').example;

  it('default type should be `scss`', function () {
    assert.deepEqual(example.parse(''), { type: 'scss', code: '' });
    assert.deepEqual(example.parse('\n'), { type: 'scss', code: '' });
    assert.deepEqual(example.parse('some code'), { type: 'scss', code: 'some code' });
  });

  it('should remove leading linebreaks', function () {
    assert.deepEqual(example.parse('\nsome code\n'), { type: 'scss', code: 'some code' });
  });

  it('should use first line as type', function () {
    assert.deepEqual(example.parse('type\nsome code'), { type: 'type', code: 'some code' });
  });
});