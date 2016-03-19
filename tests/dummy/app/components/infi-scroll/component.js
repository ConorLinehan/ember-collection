import Ember from 'ember';
import layout from './template';

/*
The purpose of this component is to act as an infi scroll generator
 */
export default Ember.Component.extend({
  layout: layout,

  itemWidth: 300,
  itemHeight: 100,
  containerWidth: 315,
  containerHeight: 600,
  scrollLeft: 0,
  scrollTop: 200,

  init() {
    this._super(...arguments);
    this.set('items', this._genRange(-20, 20));
    const totalHeight = this.get('items.length') * this.get('itemHeight');
    this.set('totalHeight', totalHeight);
  },

  _genRange(start, end) {
    let result = [];
    var n = start;
    while (n < end) {
      result.push(n);
      n += 1;
    }
    return result;
  },


  /*
  @method returns the visible items
   */
  visibleItems(topPoint) {
    const topIndex = this._pointToIndex(topPoint);
    console.log(`Top Index: ${topIndex}`);
    const lastIndex = topIndex + (this.get('containerHeight') / this.get('itemHeight'));
    return this.get('items').slice(topIndex, lastIndex);
  },

  _pointToIndex(point) {
    return parseInt(point / this.get('itemHeight'));
  },

  actions: {
    scrollChange: function(_, scrollTop){
      this.set('scrollTop', scrollTop);
      console.log(`Scroll Top: ${scrollTop}`);
      const visibleItems = this.visibleItems(scrollTop);
      console.log(visibleItems);
    }
  }
});
