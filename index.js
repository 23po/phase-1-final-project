const cards = document.querySelector("#card-container");

function fetchToys () { 
fetch('http://localhost:3000/toys')
        .then(res => res.json())
        .then(data => {
           for (i = 0; i < data.length; i++) {
            cards.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${data[i].image}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">image no. ${i}</p>
            </div>
          </div>`  
           }
        })

    }
fetchToys();
