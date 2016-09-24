import Ember from 'ember';
import StorageInitializer from 'coretheloothound/initializers/storage';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | storage', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  StorageInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
