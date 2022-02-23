var film ={ init: function(titre, annee){
    this.titre = titre;
    this.annee = annee;
},
decrire: function()                 //=> fonction pour affiche
{
    var descripition = this.titre + " (" + this.annee +")" ;
    return descripition;
}
};

//----- cree tableau ---
var films =[];

//------ cree un film et ajoute en tab------
var film = Object.create(film);
film.init("ta'ang",2016);
films.push(film);

//------ cree un film et ajoute en tab------
var film = Object.create(film);
film.init("divines",2016);
films.push(film);

//------ cree un film et ajoute en tab------
var film = Object.create(film);
film.init("juste la fin du monde",2016);
films.push(film);

//---------affiche------------
films.forEach(function(film)
{
    //console.log(film.decrire());
    document.getElementById("a").innerHTML += "<th>" + film.decrire() + "</th>";
});
