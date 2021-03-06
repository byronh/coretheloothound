import Ember from 'ember';

export function characterClass(class_id) {
  var classes = {
    1: 'Warrior',
    2: 'Paladin',
    3: 'Hunter',
    4: 'Rogue',
    5: 'Priest',
    6: 'Death Knight',
    7: 'Shaman',
    8: 'Mage',
    9: 'Warlock',
    10: 'Monk',
    11: 'Druid',
    12: 'Demon Hunter'
  };

  return new Ember.String.htmlSafe('<span class="class-' + class_id + '">' + classes[class_id] + '</span>');
}

export default Ember.Helper.helper(characterClass);
