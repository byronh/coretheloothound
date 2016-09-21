import Ember from 'ember';
import AfterRender from '../../mixins/after-render';

export default Ember.View.extend(AfterRender, {
  afterRenderEvent() {
    Ember.$('[data-toggle="popover"]').popover({
      title: 'Raid Note',
      placement: 'top',
      trigger: 'hover'
    });
  }
});
