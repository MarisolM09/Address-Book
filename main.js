

const listNames = document.querySelector("#list-names");
console.log(listNames)

    fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((data) => {
        let fetchedData = data.results;
        console.log(fetchedData)

        fetchedData.forEach(element => {
            const li = document.createElement("li");
            const h2 = document.createElement("h2");
            const img = document.createElement("img");
            const btn = document.createElement("button");
            
            h2.innerText = Object.values(element.name);
            img.src = element.picture.thumbnail;
            btn.innerText = "More Details";
           
            li.appendChild(h2);
            li.appendChild(img);
            li.appendChild(btn);
            listNames.appendChild(li);
           
            
        })
    });

