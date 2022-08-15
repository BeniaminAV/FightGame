function rectangularCollision({ rectagle1, rectangle2 }) {
  return (
    rectagle1.attackBox.position.x + rectagle1.attackBox.width >=
      rectangle2.position.x &&
    rectagle1.attackBox.position.x <=
      rectangle2.position.x + rectangle2.width &&
    rectagle1.attackBox.position.y + rectagle1.attackBox.height >=
      rectangle2.position.y &&
    rectagle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
  );
}

function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId);
  document.querySelector("#displayText").style.display = "flex";
  if (player.health === enemy.health) {
    document.querySelector("#displayText").innerHTML = "Tie";
  } else if (player.health > enemy.health) {
    document.querySelector("#displayText").innerHTML = "Player 1 Win!";
  } else if (enemy.health > player.health) {
    document.querySelector("#displayText").innerHTML = "Player 2 Win!";
  }
}


let timer = 60;
let timerId;
function decreaseTimer() {
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000);
    timer--;
    document.querySelector("#timer").innerHTML = timer;
  }

  if (timer === 0) {
    determineWinner({ player, enemy, timerId });
  }
}

