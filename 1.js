//---------------------- appele prototype --------------------
// prototype = eqivalent de la class

var Personnage =        // faite att a egale (=)
{
    nome:"",
    sante:0,
    force: 0,
    xp: 0,

    decrire: function()
    {
        var description = this.nome +" a " +this.sante +" points de vie, "+this.force +" en force et " + this.xp +" point d'exprience";
        return description;
    }

}; 

//--------------- creation d'objet ---------------
// par objet.creat(nome de class)
// creation variablel a partire a prototype

var person1 = Object.create(Personnage);
person1.nome="aurora";
person1.sante = 150;
person1.force = 25;

var person2 = Object.create(Personnage);
person2.nome="Glacius";
person2.sante = 130;
person2.force = 35; 


/*

//*********************** technique 2 par creation classe *************************


var Personnage =
{
inti: function(nome , sante, force)
{
    this.nome = nome;
    this.sante = sante;
    this.force = force;
    this.xp = 0;
},
decrire: function()
    {
        var description = this.nome +" a " +this.sante +" points de vie, "+this.force +" en force et " + this.xp +" point d'exprience";
        return description;
    }
};

var person1 = Object.create(Personnage);
person1.inti("aurora",150,25);
console.log(person1.decrire());  */


//----------- cree prototype personnage ----------------
var Personnage ={
    initperso: function(nome, sante, force)              // initialisation
    {
        this.nome= nome;
        this.sante= sante;
        this.force= force;
    }
};

//------------ cree prototype jouer -------------------
var jouer = Object.create(Personnage);

//--------------- ajoute fonction initjouer au prototype -------
jouer.initjouer = function (nome,sante,force)
{
    this.initperso(nome,sante,force);
    this.xp=0;
};

//----------------- ajoute fonction decrire au prototype -----------
jouer.decrire = function(){
    var description= this.nome +" a " +this.sante +" points de vie, "+this.force +" en force et " + this.xp +" point d'exprience";
    return description;
};

//----------------------- on cree prototype advesr ---------------
var adversaire = Object.create(Personnage);



//----------- on ajoute fonction initadvers au prototype -----------
adversaire.initadversaire = function(nome,sante,force,race,valeur)
{
    this.initperso(nome, sante, force);
    this.race = race;
    this.valeur=valeur;
};


//------------------------------------------------------------------ mon travail --------------------------

/*
function Personnage(name ,sante , force )
{
    let Personnage = Object.create(Personnage.prototype);
    Personnage.name= name;
    Personnage.sante= sante;
    Personnage.force= force;

    return Personnage;
}

Personnage.prototype.decrire = function()
{
    var description = this.nome +" a " +this.sante +" points de vie, "+this.force +" en force et " + this.xp +" point d'exprience";
        return description;
};

const pers1 = Personnage("aurora" , 150, 25);
const pers2 = Personnage("Glacius" , 130, 35);

//pers1.decrire();
document.getElementById("control").innerHTML += pers1.decrire(); */

person1.forEach(function(person1) 
{
  document.getElementById("A").innerHTML = person1.decrire();
});


