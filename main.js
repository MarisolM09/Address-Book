

const listNames = document.querySelector("#list-names");
console.log(listNames)

    fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((data) => {
        let fetchedData = data.results;
        console.log(fetchedData)

        // button function


        fetchedData.forEach(element => {
            const li = document.createElement("li");
            const h2 = document.createElement("h2");
            const img = document.createElement("img");
            const btn = document.createElement("button");
            const div =  document.createElement("div");
            
            h2.innerText = (element.name.first+ " "+element.name.last);
            img.src = element.picture.thumbnail;
            btn.innerText = "More Details";
            div.innerText = (element.email+ " "+element.phone);
           
            li.appendChild(h2);
            li.appendChild(img);
            li.appendChild(btn);
            listNames.appendChild(li);
            
            btn.addEventListener('click', function() {
                li.appendChild(div);


            });
            
        })
    });

