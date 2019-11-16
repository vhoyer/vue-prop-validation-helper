import Vue from 'vue';
import validationHelper from 'vue-prop-validation-helper';

const TestComponent = Vue.extend({
  props: {
    test: validationHelper({
      default: 'maaaan',
      options: ['world', 'me'],
      required: true,
      type: String,
    }),
  },
  render(h) {
    const test = this.test as string;

    return h('div', ['hello ', test]);
  },
});

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: '#app',
  render(h) {
    return h(TestComponent, {
      props: {
        test: 'man',
      },
    });
  },
});
