const cards = document.querySelector("#card-container");



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
          </div>`  
           }
        })

    }
fetchToys();
