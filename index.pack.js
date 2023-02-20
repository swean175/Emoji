
let myEmojis = []
if (myEmojis = JSON.parse(localStorage.getItem('myEmojis'))){
    myEmojis
} else {
 myEmojis = ["🐛", "🎸", "🍤"]
}

const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    
        localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
    }
}

renderEmojis()
let back = document.getElementById('back')

function green(){
    back.className='wrapper-add'
    setTimeout(function() {
        back.className= 'wrapper'
    }, 400)
}

function red(){
    back.className='wrapper-del'
    setTimeout(function() {
        back.className= 'wrapper'
    }, 400)
}

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
        green()
        
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
        green()
    }
})

popBtn.addEventListener("click", function() {
     myEmojis.pop()
        renderEmojis()
        red()
})

shiftBtn.addEventListener("click", function() {
     myEmojis.shift()
        renderEmojis()
        red()
})
