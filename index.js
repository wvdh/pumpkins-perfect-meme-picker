import { catsData } from '/data.js'

function getEmotionsArray(cats){
    const emotionsArray = []
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            emotionsArray.push(emotion)
        }
    }
    return emotionsArray
}

const emotionRadios = document.getElementById('emotion-radios')

function renderEmotionsRadios(cats){
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){















            
        radioItems += `<p>${emotion}</p>`
    }
    emotionRadios.innerHTML = radioItems
}
   
renderEmotionsRadios(catsData)
