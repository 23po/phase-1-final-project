// Grabbing Elements Setting Global Vriables

const cards = document.querySelector("#card-container");

  


function addLiker() {
  
  for (let i = 0; i < cards.children.length; i++) {
    let clickCount = 0;
    cards.children[i].querySelector('#like-button').addEventListener('click', (e) => 
    
    {
    const likeCount = cards.children[i].querySelector("#like-count")  
    
    console.log("I WS Clik")
    console.log(likeCount);
    clickCount += 1;
    likeCount.innerText = `${clickCount} likes`;
  
  })
}
}

// Function declarations

/*function addLiker() {
  
  for (let i = 0; i < cards.children.length; i++) {
    
    cards.children[i].querySelector('#like-button').addEventListener('click', (e) => 
    
    {console.log("I WS Clik")
    console.log(likeCount);
    clickCount ++
    likeCount.innerText = `${clickCount} likes`;
  
  })
}

}*/
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
            
          <button id ="like-button" class="like-button">♥</button> 
          <span id ="like-count" class="likes">0 likes</span>
        </div>
          </div>`
          
          
          
        }
         
        addLiker();
        console.log(cards); 
        
        
        
        
       
    
        
      })
        //document.getElementById('like-button').addEventListener('click', () => console.log("I WS CLIK"))
        console.log(cards);
       
      }
fetchToys();






