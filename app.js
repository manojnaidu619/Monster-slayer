new Vue({
  el: '#app',
  data: {
    gameStart: false,
    myHealth: 100,
    monsterHealth: 100,
    logs: []
  },
  methods:{
    startGame: function() {
      this.gameStart = true
      this.myHealth = 100
      this.monsterHealth = 100
    },
    attack: function(min,max){
          var monsterDamage = this.damage(min,max)
          this.monsterHealth -= monsterDamage
          this.logs.unshift(`Player Damages for ${monsterDamage}`)
          var myDamage = this.damage(min,max)
          this.myHealth -= myDamage
          this.logs.unshift(`Monster Damages for ${myDamage}`)
          this.healthCheck()
    },
    specialAttack: function(){
          this.attack(10,20)
    },
    heal: function(){
          this.myHealth += 10
          this.logs.unshift(`player healed for ${this.myHealth-10}`)
          var newDamage = this.damage(1,11)
          this.myHealth -= newDamage
          this.logs.unshift(`Monster Damages for ${newDamage}`)
          if(this.myHealth > 100){
            this.retryGame()
          }
    },
    giveUp: function(){
          if(confirm("Do you really wanna Give-up?")){
            this.gameStart = false
            this.myHealth = 100
            this.monsterHealth = 100
            this.logs = []
          }
    },
    damage: function(min,max){
      return Math.floor(Math.random()*(max-min+1)+min);
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
      this.myHealth = 100
      this.monsterHealth = 100
      this.gameStart = true
      this.logs = []
    },
    quitGame: function(){
      this.myHealth = this.monsterHealth = 100
      this.gameStart = false
      this.logs = []
    }
  }
});
