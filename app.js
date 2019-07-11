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
          var monsterDamage = this.damage()
          this.monsterHealth -= monsterDamage
          var myDamage = this.damage()
          this.myHealth -= myDamage
          this.healthCheck()
    },
    specialAttack: function(){

    },
    heal: function(){

    },
    giveUp: function(){

    },
    damage: function(){
      return Math.floor(Math.random() * 10)
    },
    healthCheck: function(){
      if(this.myHealth >= 0 && this.monsterHealth < 0){
        if(confirm("Yeah, you Won! Wanna try again?")){
          this.retryGame()
        }else{
          this.quitGame()
        }
      }else if(this.myHealth <= 0 && this.monsterHealth > 0){
        if(confirm("OOPS, You Lost! Wanna try again?")){
          this.retryGame()
        }else{
          this.quitGame()
        }
      }
    },
    retryGame: function(){
      this.myHealth = this.monsterHealth = 100
      this.gameStart = true
    },
    quitGame: function(){
      this.myHealth = this.monsterHealth = 100
      this.gameStart = false
    }
  }
});
