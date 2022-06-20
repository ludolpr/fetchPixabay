let keyGive = "28067265-e1b2e13d58c37680a1a031824";

// key & import de paxabay
function getData() {
  fetch(`https://pixabay.com/api/?key=${keyGive}&per_page=72`).then(function (
    response
  ) {
    response.json().then(function (pixdata) {
      console.log(pixdata);
      getImg(pixdata);
    });
  });
}
getData();

// Data des images & titre

function getImg(data) {
  header = document.createElement("header")
  var input = document.createElement("input")
  titre = document.createElement("h1");
  imghead = document.createElement("img1")
  input.innerHTML = ""
  header.innerHTML =""
  // img1.src = Images/paysage.jpg
  titre.innerHTML = "bienvenue sur mon stockage d'images";
  document.body.appendChild(header);
  // image
  var img = document.createElement("img");
  
  img.src = "/images/paysage.jpg";
  header.appendChild(img);
  header.appendChild(titre);
  header.appendChild(input)
  body.appendChild(header)
  
  // h1.innerHTML = data.hits[0].user; // Ajout du nom dans le h1 grace au premier user dans notre objet 0 du tableau " hits "
  
  // setAttribute
  header.setAttribute("class","txt-center p-5")
  input.setAttribute("class","txt-center")
  input.setAttribute("placeholder","recherche")
  input.setAttribute("type", "search")
  titre.setAttribute("class", "text-center mt-5 p-5" )
  img.setAttribute("class", "img-fluid");
 
 
    var app = document.createElement("div");
    var cont = document.createElement("div");
    var row = document.createElement("div");
    

    app.setAttribute("class", "container");
    cont.setAttribute("class", "container-fluid");
    row.setAttribute("class", "m-5" )
    
  


  // boucle
  for (let i = 0; i < data.hits.length; i++) {
    console.log(i);
    var img = document.createElement("img");
    var h1 = document.createElement("h3"); // creer l'element
    img.src = data.hits[i].previewURL;
    h1.innerHTML = data.hits[i].user;
    
    var col = document.createElement("div");

    row.setAttribute("class", "row");
    col.setAttribute("class", "col-md-3");
    
    row.appendChild(col);
    col.appendChild(h1); // h1 enfant du body
    col.appendChild(img);
  
    
  }
  document.body.appendChild(app);
    app.appendChild(cont);
    cont.appendChild(row);
}

