angular.module('app', ['ngAnimate', 'angular-inview'])
  .controller('TimelineController', function($window) {

    this.schedule = [
      {
      type: 'incoming',
      date: '1st',
      title: 'Salary',
      amount: 1200,
      inview: false
    }, {
      type: 'outgoing',
      date: '3rd',
      title: 'Rent',
      amount: 450,
      inview: false
    }, {
      type: 'outgoing',
      date: '14th',
      title: 'Shopping',
      amount: 50,
      inview: false
    }, {
      type: 'outgoing',
      date: '14th',
      title: 'Mobile phone bill',
      amount: 30,
      inview: false
    }, {
      type: 'outgoing',
      date: '14th',
      title: 'Car repairs',
      amount: 560,
      inview: false
    }, {
      type: 'outgoing',
      date: '24th',
      title: 'Party',
      amount: 65,
      inview: false
    }, {
      type: 'outgoing',
      date: '30th',
      title: 'Netflix',
      amount: 15,
      inview: false
    }];

    this.total = 1200;

    this.itemInview = function(index, inview, inviewInfo, item) {
      function hasChanged() {
        return inviewInfo.changed;
      }

      function isOutgoing() {
        return item.type === 'outgoing';
      }

      if (isOutgoing() && hasChanged() && inview) {
        this.total = this.total - item.amount;
      }

      this.schedule[index].inview = inview;
    };
  });
