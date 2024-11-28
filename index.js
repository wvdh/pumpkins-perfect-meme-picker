import { catsData } from './data.js'

function getEmotionsArray(cats){
    const emotionsArray = []
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            if (!emotionsArray.includes(emotion))
                emotionsArray.push(emotion)
        }
    }
    return emotionsArray
}

    const emotionRadios = document.getElementById('emotion-radios')
    emotionRadios.addEventListener('change', function(e){
        console.log(e.target.id)
    })

    function renderEmotionsRadios(cats){
        let radioItems = ``
        const emotions = getEmotionsArray(cats)
        for (let emotion of emotions){
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input 
                type="radio"
                id="${emotion}"
                value="${emotion}"
                name="emotions"
            >
        </div>
        `
    }
    emotionRadios.innerHTML = radioItems
}
    
renderEmotionsRadios(catsData)
