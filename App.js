const myChoiceDisplay = document.getElementById('My choice')
const AIChoiceDisplay = document.getElementById('AI choice')
const result = document.getElementById('result')
const buttons = document.querySelectorAll('button')
let userChoice
let AIChoice
let count = 0
const possibleVal = ['Rock','Paper',"Scissors"]
const countDisplay = document.getElementById('count')


buttons.forEach(e => e.addEventListener('click', (ev)=>{
        userChoice = ev.target.innerHTML
        myChoiceDisplay.innerHTML = userChoice
        AIChoice = possibleVal[Math.floor(Math.random() * 3)]
        AIChoiceDisplay.innerHTML = AIChoice 
        result.innerHTML = res()
        getCount(result.innerHTML)
        
    }))

function res() {
    if (userChoice === AIChoice) return 'draw'
    switch(userChoice){
        case 'Rock': return AIChoice === 'Scissors'?'Win':'Loose'
        break
        case 'Paper': return AIChoice === 'Rock'?'Win':'Loose'
        break
        case 'Scissors': return AIChoice === 'Paper'?'Win':'Loose'
        break
    }
}

function getCount(val){
   if(val === 'Win') count+=1
   if(val === 'Loose') count-=1
   countDisplay.innerHTML = count
}