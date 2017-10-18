const store = new Vuex.Store({
    state: {
        count: 0,
        numbers: [0,0,0]
    },
    mutations: {
        changeCount(state, newCount){
            state.count = newCount;
            console.log('store.changeCount: ' + newCount);
        },
        increaseCount(state){
          state.count++;
          console.log('store.increaseCount: ' + state.count);
        },
        changeNumbers(state, newNumbers){
          state.numbers = newNumbers;
          console.log('store.changeNumbers: ' + state.numbers);
        }
    }
})

const number = Vue.component('number', {
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
           topOn: true,
           topLeftOn: true,
           topRightOn: true,
           middleOn: false,
           bottomLeftOn: true,
           bottomRightOn: true,
           bottomOn: true,
       }
    },
    props: ['pos'],
    computed: {
      number(){return store.state.numbers[this.pos];}
    },
    watch: {
      number(newValue){
        switch(newValue){
          case 0:
            this.topOn = true;
            this.topLeftOn = true;
            this.topRightOn = true;
            this.middleOn = false;
            this.bottomLeftOn = true;
            this.bottomRightOn = true;
            this.bottomOn = true;
            break;
          case 1:
            this.topOn = false;
            this.topLeftOn = false;
            this.topRightOn = true;
            this.middleOn = false;
            this.bottomLeftOn = false;
            this.bottomRightOn = true;
            this.bottomOn = false;
            break;
          case 2:
            this.topOn = true;
            this.topLeftOn = false;
            this.topRightOn = true;
            this.middleOn = true;
            this.bottomLeftOn = true;
            this.bottomRightOn = false;
            this.bottomOn = true;
            break;
          case 3:
            this.topOn = true;
            this.topLeftOn = false;
            this.topRightOn = true;
            this.middleOn = true;
            this.bottomLeftOn = false;
            this.bottomRightOn = true;
            this.bottomOn = true;
            break;
          case 4:
            this.topOn = false;
            this.topLeftOn = true;
            this.topRightOn = true;
            this.middleOn = true;
            this.bottomLeftOn = false;
            this.bottomRightOn = true;
            this.bottomOn = false;
            break;
          case 5:
            this.topOn = true;
            this.topLeftOn = true;
            this.topRightOn = false;
            this.middleOn = true;
            this.bottomLeftOn = false;
            this.bottomRightOn = true;
            this.bottomOn = true;
            break;
          case 6:
            this.topOn = true;
            this.topLeftOn = true;
            this.topRightOn = false;
            this.middleOn = true;
            this.bottomLeftOn = true;
            this.bottomRightOn = true;
            this.bottomOn = true;
            break;
          case 7:
            this.topOn = true;
            this.topLeftOn = false;
            this.topRightOn = true;
            this.middleOn = false;
            this.bottomLeftOn = false;
            this.bottomRightOn = true;
            this.bottomOn = false;
            break;
          case 8:
            this.topOn = true;
            this.topLeftOn = true;
            this.topRightOn = true;
            this.middleOn = true;
            this.bottomLeftOn = true;
            this.bottomRightOn = true;
            this.bottomOn = true;
            break;
          case 9:
            this.topOn = true;
            this.topLeftOn = true;
            this.topRightOn = true;
            this.middleOn = true;
            this.bottomLeftOn = false;
            this.bottomRightOn = true;
            this.bottomOn = true;
            break;
          default:
            alert("No Display defined for: " + newValue);
        }
      }
    }

});
const counter = Vue.component('counter', {
   template: '<div id="counter">' +
                '<number :pos="0" style="float: left"></number>' +
                '<number :pos="1"></number>' +
                '<number :pos="2" style="float:right"></number>' +
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
       }
    },
    computed: {
      count() {return store.state.count;}
    },
    watch: {
      count(newValue){
        var numbers = [
          Math.floor(newValue / 100),
          Math.floor(newValue /10) % 10,
          newValue % 10
        ];
        store.commit('changeNumbers', numbers);
      }
    }
});

const app = new Vue({
  el: '#app',
  data: {
      running: false,
      topLeftOn: false
  },
  components: {
      counter: counter
  },
  methods: {
      state: function () {
        store.commit('increaseCount');
      },
      stateTwo: function() {
        var count = window.prompt("Inser new count", 0);;
        store.commit('changeCount', count);
      },
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
