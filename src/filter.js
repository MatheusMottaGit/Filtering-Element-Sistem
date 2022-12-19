const inputValue = document.querySelector('input')
const cards = document.querySelectorAll('.cards li')

    inputValue.addEventListener('input', ()=>{

        if(inputValue.value != ''){
            for(let card of cards){

                let cardTitle = card.querySelector('h2')
                cardTitle = cardTitle.textContent.toLowerCase()

                let filterText = inputValue.value.toLowerCase()

                    if(cardTitle.includes(filterText)){
                        card.style.display = "block"
                    }else{
                        card.style.display = "none"
                    }
                
            }
        }else{
            for(let card of cards){
                card.style.display = "block"
            }
        }
    })