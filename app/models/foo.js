import DS from 'ember-data';
const { Model } = DS;

export default class FooModel extends Model {
  @DS.attr() text;
}
