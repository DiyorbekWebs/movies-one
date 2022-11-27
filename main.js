render(movies);

function render(movies) {
  for (let i = 0; i < movies.length; i++) {
    $("#BoxCard").innerHTML += `
        <div class="col-4">
              <div class="card">
                <img src=${movies[i].bigThumbnail} alt="img">
                <div class="card-body">
                  <h5 class="card-title">${movies[i].title}</h5>
                  <p class="card-text"> ${movies[i].year} </p>
                  <p class="card-text">${movies[i].imdbRating} </p>
                  <p class="card-text"> ${movies[i].language} </p>
                  <div class="d-flex justify-content-between">
                    <button type="button" class="btn btn-outline-primary" onclick="">Primary</button>
                    <button type="button" class="btn btn-outline-secondary">Secondary</button>
                  </div>
                </div>
              </div>
            </div>
        `;
  }
}

// ===== ===== ===== Add Movies ===== ===== =====//

function addMovies() {
  var name = document.querySelector("#move_name").value;
  var year = document.querySelector("#year").value;
  var reting = document.querySelector("#reting").value;
  var img = document.querySelector("#setImg").value;
  var kategorya = document.querySelector("#kategorya").value;
  var lang = document.querySelector("#language").value;
  console.log(name, year, reting, img, kategorya, lang);

  var addMovi = {
    title: name,
    year: year,
    categories: [kategorya],
    imdbId: "tt7026230",
    imdbRating: reting,
    runtime: 66,
    language: lang,
    youtubeId: "4hZi5QssssaMBFc",
    summary:
      "Patton Oswald, despite a personal tragedy, produces his best standup yet. Focusing on the tribulations of the Trump era and life after the loss of a loved one, Patton Oswald continues his journey to contribute joy to the world.",
    smallThumbnail: "http://i3.ytimg.com/vi/4hZi5QaMBFc/hqdefault.jpg",
    bigThumbnail: img
  };
  movies.unshift(addMovi);
  movies.join('')
  var maP=movies.map((e)=>{
    return `
    <div class="col-4">
              <div class="card">
                <img src=${e.bigThumbnail} alt="img">
                <div class="card-body">
                  <h5 class="card-title">${e.title}</h5>
                  <p class="card-text"> ${e.year} </p>
                  <p class="card-text">${e.imdbRating} </p>
                  <p class="card-text"> ${e.language} </p>
                  <div class="d-flex justify-content-between">
                    <button type="button" class="btn btn-outline-primary" onclick="">Primary</button>
                    <button type="button" class="btn btn-outline-secondary">Secondary</button>
                  </div>
                </div>
              </div>
            </div>   
    `
  })
  $('#BoxCard').innerHTML=maP;
}

var submit = document.querySelector("#submit");
submit.addEventListener("click", function () {
  addMovies();
});
