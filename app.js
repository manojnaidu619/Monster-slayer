new Vue({
  el: '#app',
  data: {
    gameStart: false,
    myHealth: 100,
    monsterHealth: 100
  },
  methods:{
    startGame: function() {
      this.gameStart = true
      this.myHealth = 100
      this.monsterHealth = 100
    },
    attack: function(){
          var monsterDamage = Math.floor(Math.random() * 10)
          this.monsterHealth -= monsterDamage

          var myDamage = Math.floor(Math.random() * 10)
          this.myHealth -= myDamage
    },
    specialAttack: function(){

    },
    heal: function(){

    },
    giveUp: function(){

    }
  }
});
