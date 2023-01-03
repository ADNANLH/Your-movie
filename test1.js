
let xhttp = new XMLHttpRequest;

    xhttp.onreadystatechange = function(){
       
        // Check the readyState and status of the request
        if(xhttp.readyState === 4 && xhttp.status === 200){
            let data = JSON.parse(xhttp.responseText)
            let movies = data.movies
    
            movies.forEach(movie => {
                let row = table.tBodies[0].insertRow()
                let posterCell = row.insertCell();
                posterCell.innerHTML = `<img src="${movie.poster}" alt="${movie.title}">`;

                let titreCell = row.insertCell();
                titreCell.innerText = movie.titre;

                let réalisateurCell = row.insertCell();
                réalisateurCell.innerText = movie.réalisateur;

                let durationCell = row.insertCell();
                durationCell.innerText = movie.durée;

                let dateCell = row.insertCell();
                dateCell.innerText = movie.date;

               

                let festivalCell = row.insertCell();
                festivalCell.innerHTML = movie.festivals.join(' <br>');
                row.appendChild(festivalCell);

                let acteursCell = row.insertCell();
                acteursCell.innerHTML = movie.acteurs.map(acteur => acteur.nom +" "+ acteur.prénom +" "+ acteur.nationalité + `</br>`);
                row.appendChild(acteursCell);
            })

        }
        
    }
    // Open the request and set the HTTP method and URL
    xhttp.open("GET", "movie.json", true)

    // Send the request
    xhttp.send()


//event listner to the element with the idin searsh
document.getElementById("search").addEventListener("keyup", function(){
        let searchValue = this.value.toLowerCase();
      

        // Set the onreadystatechange event handler
        xhttp.onreadystatechange = function test() {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                // Parse the response  
                let data = JSON.parse(xhttp.responseText);
                let movies = data.movies
                let dataFiltrer = movies.filter(movie => movie.titre.toLowerCase().includes(searchValue));

                // console.log(dataFiltrer);

                table.tBodies[0].innerHTML = '';

                dataFiltrer.forEach(movie => {
                    let row = table.tBodies[0].insertRow()
                    let posterCell = row.insertCell();
                    posterCell.innerHTML = `<img src="${movie.poster}" alt="${movie.title}" >`;

                    let titreCell = row.insertCell();
                    titreCell.innerText = movie.titre;

                    let réalisateurCell = row.insertCell();
                    réalisateurCell.innerText = movie.réalisateur;

                    let durationCell = row.insertCell();
                    durationCell.innerText = movie.durée;

                    let dateCell = row.insertCell();
                    dateCell.innerText = movie.date;
                    
                    let festivalCell = row.insertCell();
                    festivalCell.innerHTML = movie.festivals.join(' <br>');
                    row.appendChild(festivalCell);


                    let acteursCell = row.insertCell();
                    acteursCell.innerHTML = movie.acteurs.map(acteur => acteur.nom +" "+ acteur.prénom +" "+ acteur.nationalité + `</br>`)  ;
                    row.appendChild(acteursCell);
                })

        }}

        xhttp.open("GET", "movie.json", true);

        // Send the request
        xhttp.send();
})
    

    








// function sortTable(n) {
    //     var table, switching, rows, i, x, y, shouldSwitch, dir, switchcount = 0;
    //     table = document.getElementById("table");
    //     switching = true;
    //     //Set the sorting direction to ascending:
    //     dir = "asc"; 
    //     //while loop that will continue until no switching has been done
        
    //     while (switching) {
    //       //start by saying: no switching is done:
    //       switching = false;
    //         rows = table.rows;
    //       //loop through all table rows  without thead
    //       for (i = 1; i < (rows.length - 1); i++) {
    //         //start by saying there should be no switching:
    //         shouldSwitch = false;
    //         //getting the value from the current cell and the next cell respecting the loop
    //         x = rows[i].getElementsByTagName("td")[n];
    //         y = rows[i + 1].getElementsByTagName("td")[n];
    //        //check if the two rows should switch
    //         if (dir == "asc") {
    //           if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
    //             //if so, mark as a switch and break the loop:
    //             shouldSwitch= true;
    //             break;
    //           }
    //         } else if (dir == "desc") {
    //           if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
    //             //if so, mark as a switch and break the loop:
    //             shouldSwitch= true;
    //             break;
    //           }
    //         }
    //       }
    //       if (shouldSwitch) {
    //       //log the switch value if true then switch and mark the as done
    //         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    //         switching = true;
    //         //Each time a switch is done, increase this count by 1:
    //         switchcount ++;      
    //       } else {
    //         //if the switch value is false, check if the direction is "asc" and set the direction to "desc" and run the while loop again.
    //         if (switchcount == 0 && dir == "asc") {
    //           dir = "desc";
    //           switching = true;
    //         }
    //       }
    //     }
    //   }