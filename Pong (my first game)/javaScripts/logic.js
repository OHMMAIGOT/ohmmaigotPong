function keyDown(event) {

    console.log(event.key);

    if (event.key.toLowerCase() == 'w') {   
        wHeld = true;
    } else if (event.key.toLowerCase() == 's') {
        sHeld = true;
    } else if (event.key == 'ArrowUp') {
        upHeld = true;
    } else if (event.key == 'ArrowDown') {
        downHeld = true;
    };
};

function keyUp(event) {

    if (event.key == ' ' && playerHeld) {
        playerHeld = false;
        ballSpeedx = 10;
        ballSpeedy = 10
        ballSpeedx *= -1;
    }

    if (event.key.toLowerCase() == 'w') {   
        wHeld = false;
    } else if (event.key.toLowerCase() == 's') {
        sHeld = false;
    } else if (event.key == 'ArrowUp') {
        upHeld = false;
    } else if (event.key == 'ArrowDown') {
        downHeld = false;
    };
};

function allAnimation() {

    let playeryUnder = playery + 200;
    let opponentyUnder = opponenty + 200;

    //backGround
    brush.fillStyle = 'black';
    brush.fillRect(0, 0, 1528, 665);

    //player
    brush.fillStyle = 'green';
    brush.fillRect(20, playery, 10, 200);

    //opponent
    brush.fillStyle = 'red';
    brush.fillRect(1500, opponenty, 10, 200);

    //ball
    ballx -= ballSpeedx;
    bally -= ballSpeedy;

    
    //ballKeep
    if (ballx <= 19 && bally >= playery && bally <= playeryUnder) {
        playerHeld = true;
    };

    if (playerHeld) {
        ballSpeedx = 0;
        ballSpeedy = 0;
        ballx = 35;
        bally = playery + 95;
    };

    brush.fillStyle = 'white';
    brush.fillRect(ballx, bally, 10, 10);

    //scoreBoard
    brush.fillStyle = 'white';
    brush.fillRect(630, 0, 200, 60);

    brush.fillStyle = 'black';
    brush.fillRect(725, 0, 10, 60);

    //scoreNumber
    brush.fillStyle = 'black';
    
    if (playerScore.toString().length == 1) {
        brush.font = '40px Arial';
        brush.fillText(playerScore, 665, 40);
    } else if (playerScore.toString().length == 2) {
        brush.font = '40px Arial';
        brush.fillText(playerScore, 655, 40);
    } else {
        playerScore *= 2;
        brush.fillStyle = 'red';
        brush.font = '40px Arial';
        brush.fillText(playerScore, 645, 40);
    };

    brush.fillStyle = 'black';
    if (opponentScore.toString().length == 1) {
        brush.font = '40px Arial';
        brush.fillText(opponentScore, 770, 40);
    } else if (opponentScore.toString().length == 2) {
        brush.font = '40px Arial';
        brush.fillText(opponentScore, 760, 40);
    } else {
        opponentScore *= 2;
        brush.fillStyle = 'red';
        brush.font = '40px Arial';
        brush.fillText(opponentScore, 750, 40);
    };

    //playerCtrl
    if (wHeld) {
        playery -= 5;
    } else if (sHeld) {
        playery += 5;
    };
    
    //playerLimit
    if (playery >= 464) {
        playery = 464;
    } else if (playery <= 0) {
        playery = 0;
    };


    //opponentCtrl
    if (upHeld) {
        opponenty -= 5;
    } else if (downHeld) {
        opponenty += 5;
    };

    //opponentLimit
    if (opponenty >= 464) {
        opponenty = 464;
    } else if (opponenty <= 0) {
        opponenty = 0;
    };

    //ballMove
    if (bally <= 0) {
        ballSpeedy *= -1;
    } else if (bally >= 654) {
        ballSpeedy *= -1;
    };

    if (ballx <= 0) {
        ballSpeedx *= -1;
    } else if (ballx >= 1520) {
        ballSpeedx *= -1;
    };

    if (ballx <= 30 || ballx >= 1490) {
        if (ballx <= 30 && bally >= playery && bally <= playeryUnder) {
            ballSpeedx *= -1;
        } else if (ballx >= 1490 && bally >= opponenty && bally <= opponentyUnder) {
            ballSpeedx *= -1;
        };
    };
    
    //score
    if (ballx >= 1520) {
        playerScore += 1;
    } else if (ballx <= 0) {
        opponentScore +=1;
    };

    //win
    if (playerScore == 24 || opponentScore == 24) {
        ballSpeedx = 0;
        ballSpeedy = 0;
    };

    if (playerScore >= 24) {
        brush.fillStyle = 'white';
        brush.font = '100px Arial';
        brush.fillText('Green Win.. ENRIQUE🐱‍🏍', 200, 240);
    } else if (opponentScore >= 24) {
        brush.fillStyle = 'white';
        brush.font = '100px Arial';
        brush.fillText('Red Win👄 Slayyy~', 300, 240);
    };

    requestAnimationFrame(allAnimation);
};

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
allAnimation();