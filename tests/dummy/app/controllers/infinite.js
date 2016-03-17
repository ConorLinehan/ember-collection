import Ember from 'ember';

export default Ember.Controller.extend({
  itemWidth: 300,
  itemHeight: 100,
  containerWidth: 315,
  containerHeight: 600,
  scrollLeft: 0,
  scrollTop: 200,

  rateOfChange: function() {

  },

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
