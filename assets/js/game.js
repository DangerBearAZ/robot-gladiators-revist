// fight 

var playerName = prompt("what is your robot's name?");
var playerHealth = 100;
var playerMoney = 10;
// check to see if the value of the playerHealth variable  is create than 0 
if (playerHealth > 0) {
    console.log("Your player is still alive!");
}
var playerAttack = 10; 

var enemyName = "GRR";
var enemyHealth = 50;
var enemyAttack = 12; 

console.log(playerName, playerAttack, playerHealth); 

function fight () {
    alert('Welcome to Robot Gladiators!');
    // ask the players if they want to fight 
    var promptFight = prompt("Would you like to FIGHT or SKIP this battle? enter 'FIGHT' OR 'SKIP' to choose.");
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack 
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
          );

          //check enemy's health 
if (enemyHealth <= 0) {
    alert(enemyName = 'has died');
} else {
    alert(enemyName + " still has " + enemyHealth + " health left.");
}

// remove player's health by subtracting the amount set in the enemy attack 
playerHealth = playerHealth - enemyAttack;
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
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

fight();