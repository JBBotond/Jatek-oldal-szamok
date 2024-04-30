let randomNumber = Math.floor(Math.random() * 100) + 1;

  const guesses = document.querySelector('.guesses');
  const lastResult = document.querySelector('.lastResult');
  const lowOrHi = document.querySelector('.lowOrHi');
  const guessSubmit = document.querySelector('.guessSubmit');
  const guessField = document.querySelector('.guessField');
  const resetButton = document.querySelector('.resetButton');
  const reactKep = document.querySelector('#reactKep');
  const gameGarden = document.querySelector('#gameGarden');

  let guessCount = 1;
  resetButton.style.visibility = 'hidden';
  reactKep.style.visibility = 'hidden';

  function checkGuess() {

    const userGuess = Number(guessField.value);
    if(guessCount === 1) {
      guesses.textContent = 'Previous attempts: ';
    }
    guesses.textContent += userGuess + ' ';

    if(userGuess === randomNumber) {
      lastResult.textContent = 'Congratulations! You guessed the number!';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      reactKep.style.visibility = 'visible';
      reactKep.src= "https://www.nicepng.com/png/full/32-324680_like-emoji-smiley-face-thumbs-up.png";
      reactKep.scrollIntoView(true);
      setGameOver();
    } else if(guessCount === 10) {
      lastResult.textContent = 'Game over!';
      reactKep.style.visibility = 'visible';
      reactKep.src= "https://www.pngmart.com/files/12/Dislike-Emoji-PNG-Clipart.png";
      reactKep.scrollIntoView(true);
      setGameOver();
    } else {
      lastResult.textContent = 'Incorrect';
      lastResult.style.backgroundColor = 'red';
      if(userGuess < randomNumber) {
        lowOrHi.textContent = 'The number you selected is too small!';
      } else if(userGuess > randomNumber) {
        lowOrHi.textContent = 'The number you selected is too large!';
      }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
  }
  guessSubmit.addEventListener('click', checkGuess);
  function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.style.visibility = 'visible';
    resetButton.addEventListener('click', resetGame);
}

  function resetGame() {
    reactKep.style.visibility = 'hidden';
	  guessCount = 1;
    resetButton.style.visibility = 'hidden';
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
      resetPara.textContent = '';
    }
    
	  guessField.disabled = false;
	  guessSubmit.disabled = false;
	  guessField.value = '';
	  guessField.focus();
    
	  lastResult.style.backgroundColor = 'white';
    
	  randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber)
    gameGarden.scrollIntoView(true);
  }
  /*"https://www.pngmart.com/files/12/Dislike-Emoji-PNG-Clipart.png"
   */