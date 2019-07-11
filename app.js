new Vue({
  el: '#app',
  data: {
    gameStart: false,
    myHealth: 100,
    monsterHealth: 100,
    spAttack: 0
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
          var myDamage = this.damage(min,max)
          this.myHealth -= myDamage
          this.healthCheck()
    },
    specialAttack: function(){
          this.attack(10,20)
    },
    heal: function(){
          this.myHealth += 10
          var newDamage = this.damage(1,10)
          this.myHealth -= newDamage
    },
    giveUp: function(){

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
      this.myHealth = this.monsterHealth = 100
      this.gameStart = true
    },
    quitGame: function(){
      this.myHealth = this.monsterHealth = 100
      this.gameStart = false
    }
  }
});
