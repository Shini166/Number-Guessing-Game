let min=1,max=10,winningNum=randomNum(min,max),guesseLeft=3;

const game=document.querySelector('#game'),
      minNum=document.querySelector('.min-num'),
      maxNum=document.querySelector('.max-num'),
      guessBtn=document.querySelector('#guess-btn'),
      guessInput=document.querySelector('#guess-input'),
      message=document.querySelector('.message');

      minNum.textContent=min;
      maxNum.textContent=max;

      game.addEventListener('mousedown', function(e)
      {
      if(e.target.className==='play-again')
      {
          window.location.reload();
      }});

      guessBtn.addEventListener('click' , function ()
      {
        let guess = parseInt(guessInput.value);
        if(isNaN(guess) || guess<min || guess>max)
        {
            setmessage(`Please Enter a number between ${min} and ${max}` , 'red' );
        }

        if(guess===winningNum)
        {
            gameOver(true, `${guess} is Correct, You Win !`);
        }
        else{
            
              guesseLeft -=1;

            if(guesseLeft===0)
            {
            gameOver(false,`Game Over, You Lost, The correct guess was ${winningNum}`)
            }

            else{
            guessInput.value='';
            setmessage(`${guess} is Incorrect, you have ${guesseLeft} guesses left` , 'red');
            }
        }
      });

      function setmessage(msg,color)
      {
          message.style.color=color;
          message.textContent=msg;
          guessInput.style.borderColor=color;
      }
      function gameOver(won,msg)
      {
          let color;
          won===true ? color='green' : color='red';
          guessInput.disabled=true;
          guessInput.style.borderColor= color;
          message.style.color= color;
          
          setmessage(msg);

          guessBtn.value='Play Again';
          guessBtn.className +='play-again';
      }
      function randomNum(min,max)
      {
          return Math.floor(Math.random()*(max-min+1)+min);
      }

