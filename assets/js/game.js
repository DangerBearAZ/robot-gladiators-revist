

var playerName = prompt("what is your robot's name?");
var playerHealth = 100;
var playerMoney = 10;
var playerAttack = 10; 


var enemyNames = ["GRR", "HISS", "BITE"];
var enemyHealth = 50;
var enemyAttack = 12; 

// console.log(playerName, playerAttack, playerHealth); 

var  fight = function (enemyName) {
    alert('Welcome to Robot Gladiators!');
    // ask the players if they want to fight 
    var promptFight = prompt("Would you like to FIGHT or SKIP this battle? enter 'FIGHT' OR 'SKIP' to choose.");
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack 
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
          );

          //check enemy's health 
if (enemyHealth <= 0) {
    alert(enemyNames = 'has died');
} else {
    alert(enemyNames + " still has " + enemyHealth + " health left.");
}

// remove player's health by subtracting the amount set in the enemy attack 
playerHealth = playerHealth - enemyAttack;
console.log(
    enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  //check player's health 
if (playerHealth <= 0) {
    alert(playerName + " has died!");
}
else {
    alert(playerName + " still has " + playerHealth +  " health left."); 
}

// if player choses to skip 

    } else if ( promptFight === 'skip' || promptFight === "SKIP") {
        // confirm player wants to skip 
        var confirmSkip = window.confirm("Are you sure you'd like to quite this will cost you $2?");
        //if yes (true), leave fight
        if (confirmSkip) {
            alert(playerName + " has decided to skip this fight. Goodbye.");
            //subtract money form playerMoney for skipping
            playerMoney = playerMoney -2;
        }
        //if no (false) ask question again by running fight() again
        else {
            fight();
        }
    } else {
        alert("You need to choose a valid option. Try again!");
    }


};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}