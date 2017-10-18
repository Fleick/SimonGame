const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        changeCount(state, newCount){
            state.count = newCount;
            console.log(state.count);
        }
    }
})

var number = Vue.component('number', {
   template: '<div class="number"> ' +
                '<div class="top" ' +
                     ':class="{on: topOn}"></div>' +
                '<div class="topLeft" ' +
                     ':class="{on: topLeftOn}"></div>' +
                '<div class="topRight" ' +
                     ':class="{on: topRightOn}"></div>' +
                '<div class="middle" ' +
                     ':class="{on: middleOn}"></div><br />' +
                '<div class="bottomLeft" ' +
                     ':class="{on: bottomLeftOn}"></div>' +
                '<div class="bottomRight" ' +
                     ':class="{on: bottomRightOn}"></div>' +
                '<div class="bottom" ' +
                     ':class="{on: bottomOn}"></div>' +
             '</div>',
    data: function () {
       return {
           /* Number parts on or off */
           topOn: false,
           topLeftOn: false,
           topRightOn: true,
           middleOn: false,
           bottomLeftOn: false,
           bottomRightOn: true,
           bottomOn: false
       }
    },
    methods: {
       changeNumber: function () {
           console.log("change Number");
       }
    }
});
var counter = Vue.component('counter', {
   template: '<div id="counter">' +
                '<number ref="number1" style="float: left"></number>' +
                '<number ref="number2"></number>' +
                '<number ref="number3" style="float:right"></number>' +
       '<button @click="state">Test</button>' +
            '</div>',
    components: {
       number: number
    },
    data: function () {
       return {
           //number1: app.$refs.number1,
           //number2: '',
           //number3: ''
       }
    },
    methods: {
       changeCounter: function () {
           this.number1.changeNumber();
       },
       state: function () {
           store.commit('changeCount', 20);
       }
    }
});

var app = new Vue({
  el: '#app',
  data: {
      running: false,
      topLeftOn: false
  },
  components: {
      counter: counter
  },
  methods: {
      TopLeft: function () {
        
      },
      TopRight: function () {
          
      },
      BottomLeft: function () {
          
      },
      BottomRight: function () {
          
      },
      Start: function () {
          this.topLeftOn = !this.topLeftOn;
          console.log(this.topLeftOn);
      },
      Strict: function () {
          
      },
      SetCounter: function (number) {

      },
      ShowSimon: function () {

      }
  }
});
