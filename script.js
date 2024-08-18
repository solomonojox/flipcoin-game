let score = JSON.parse(localStorage.getItem('info')) || {
  wins: 0,
  losses: 0
}
let display = document.querySelector('.display')
function playGame(playerMove){
  let randomNumber = Math.random()
  let computermove = randomNumber > 0.5 ? 'heads' : 'tails'

  let result = ''
  if(playerMove === 'head'){
    if(computermove === 'heads'){
      result = 'You win'
    } else {
      result = 'You lose'
    }
  } else if(playerMove === 'tails'){
    if(computermove === 'heads'){
      result = 'You lose'
    } else {
      result = 'You win'
    }
  }

  if(result === 'You win'){
    score.wins += 1
  } else {
    score.losses += 1
  }
  
  localStorage.setItem('info', JSON.stringify(score))

  // console.log(`${result}`)
  display.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}`
  console.log(score)
}
display.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}`