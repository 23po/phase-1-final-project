// Grabbing Elements Setting Global Vriables

const cards = document.querySelector("#card-container");

const likeCount = document.getElementsByClassName('likes')    


// Function declarations

function addLiker() {
  var cardButtons = cards.querySelectorAll('#like-button')
  cardButtons.forEach(() => {addEventListener('click', () => console.log("I WS CLIK"))
})
  //likebuttons.addEventListener('click', () => console.log("I WS CLIK"))
    /*let clickCount = 0;
    clickCount += 1
    likeCount.textContent = clickCount;
*/
  }

function fetchToys () { 
fetch('http://localhost:3000/toys')
        .then(res => res.json())
        .then(data => {
           for (i = 0; i < data.length; i++) {
            var uniqueId = "id" + Math.random().toString(16).slice(2)
            cards.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${data[i].image}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">image no. ${i+1}</p>
              <p class="uid"> UID: ${uniqueId}</p> 
            </div>
            
          <button id ="like-button" class="like-button">♥ 
          <span id="like-count" class="likes">0 likes</span></button>
        </div>
          </div>` 
        
         
        }
       
    
        
      })
        //document.getElementById('like-button').addEventListener('click', () => console.log("I WS CLIK"))
    }
fetchToys();
addLiker();



