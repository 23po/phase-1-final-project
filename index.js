// Grabbing Elements Setting Global Vriables

const cards = document.querySelector("#card-container");
var imageId = document.querySelector('#imageNo')
let id = 0;  
function handleDelete() {
  for (let i = 0; i < cards.children.length; i++)  {
  cards.children[i].querySelector('#delete-button').addEventListener('click', (e) => {
    console.log(cards.children[i])
    cards.children[i].innerHTML = " ";
    
    //deleteToy(cards.children[i].imageId);
  })
  
}
}

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
              <p id = "imageNo" class="card-text">image no. ${i+1}</p>
              <p class="uid"> UID: ${uniqueId}</p> 
            </div>
            
          <button id ="like-button" class="like-button">♥</button> 
          <span id ="like-count" class="likes">0 likes</span>
          <button id ="delete-button" class="delete-button">remove</button> 
        </div>
        </div>`
          
          
        
        }
         
        addLiker();
        handleDelete();
        
        console.log(cards); 
        
        
        
        
       
    
        
      })
        //document.getElementById('like-button').addEventListener('click', () => console.log("I WS CLIK"))
        console.log(cards);
        
      }
      function addToy (newObj) {
        fetch ('http://localhost:3000/toys',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },

          body:JSON.stringify(newObj)

        })
        .then(res => res.json())
        .then(data => {
          console.log(data);

        })

      }

      function deleteToy () {
        fetch (`http://localhost:3000/toys/${id}`, {
          method: 'DELETE',
          headers: 'Application/json'
        })
        .then(res => res.json())
        .then(data => console.log(data))
      }

      
    
 function handleNewToy () {
  document.querySelector('#form').addEventListener('submit', (e) => {
       e.preventDefault();
        let newObj = {
          name: e.target.toyName.value,
          image: e.target.url.value
    }

    addToy(newObj);
     })
     
    }
    
   
fetchToys();
handleNewToy();







