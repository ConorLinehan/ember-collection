import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,

  itemWidth: 300,
  itemHeight: 100,
  containerWidth: 315,
  containerHeight: 600,
  scrollLeft: 0,
  scrollTop: 200,
  items: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],

  setScroll(x, y) {
    this.set('scrollLeft', x);
    this.set('scrollTop', y);
  },

  actions: {
    scrollChange: function(scrollLeft, scrollTop){
      let currentX = scrollLeft;
      let currentY = scrollTop;
      const contentHeight = this.get('containerHeight');
      if ((currentY) < (contentHeight / 8.0)) {
        this.setScroll(currentX,(currentY + (contentHeight / 2.0)));
      }

      if ((currentY) > ((contentHeight * 6) / 8.0)) {
        this.setScroll(currentX, (currentY - (contentHeight / 2.0)));
      }
    }
  }
});
