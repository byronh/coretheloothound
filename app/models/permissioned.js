import DS from 'ember-data';

export default DS.Model.extend({
  permissions: DS.hasMany('permission', {
    async: false
  })
});
