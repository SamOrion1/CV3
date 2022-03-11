//MEMORY GAME ! Début


let motifsCartes=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]; 
//10 cartes

let etatsCartes=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
//Carte 0 = caché / 1 = visible / -1 = enlevée

let cartesRetournees=[];
//Carte retournée

let nbPairesTrouvees=0;
//Les cartes trouvées

let imgCartes=document.getElementById("tapis").getElementsByTagName("img");
//Contient les img utilisateur

for(let i=0;i<imgCartes.length;i++){
	//Appeller controleJeu avec le numéro de l'image cliquée.
	imgCartes[i].noCarte=i; //Ajout de la propriété noCarte à l'objet img
	imgCartes[i].onclick=function(){
		controleJeu(this.noCarte);
	}                      
}

initialiseJeu();
//Mélanger cartes

function majAffichage(noCarte){
	//Met à jour l'affichage de la carte
	switch(etatsCartes[noCarte]){
		case 0: //Face cachée
			imgCartes[noCarte].src="fondcarte.png";
			break;
		case 1: //Carte retournée
			imgCartes[noCarte].src="carte"+motifsCartes[noCarte]+".png";
			break;
		case -1: //Carte enlevée
			imgCartes[noCarte].style.visibility="hidden";
			break;
	}
}

function rejouer(){
	alert("Bravo !");
	location.reload();
} 

function initialiseJeu(){
	for(let position=motifsCartes.length-1; position>=1; position--){
		let hasard=Math.floor(Math.random()*(position+1));
		let sauve=motifsCartes[position];
		motifsCartes[position]=motifsCartes[hasard];
		motifsCartes[hasard]=sauve;
	} //Mélange les numéros Cartes
}

function controleJeu(noCarte){
	//Appelée chaque fois que l'utilisateur clique sur une carte
    if(cartesRetournees.length<2){
		//Pas plus de deux cartes
        if(etatsCartes[noCarte]==0){
			etatsCartes[noCarte]=1;
			cartesRetournees.push(noCarte);
			majAffichage(noCarte);
			//Si carte cliqué de (0) alors -> (1)
		}
        if(cartesRetournees.length==2){
			let nouveauEtat=0;
			if(motifsCartes[cartesRetournees[0]]==motifsCartes[cartesRetournees[1]]){
				nouveauEtat=-1;
				nbPairesTrouvees++;
			}

			etatsCartes[cartesRetournees[0]]=nouveauEtat;
			etatsCartes[cartesRetournees[1]]=nouveauEtat;
			//Si trouvé deux carte -> (-1) Si non ->(0)

            setTimeout(function(){
				majAffichage(cartesRetournees[0]);
				majAffichage(cartesRetournees[1]);
				cartesRetournees=[];
				if(nbPairesTrouvees==10){
					rejouer();
				}
			},750); //Temps de voir + rejoué si terminé
		}
	}
}

//----------------------------------------------------------------------------


//Changement de fond d'écran (bg)

let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector('#btn-2');
let btn3 = document.querySelector('#btn-3');
let btn4 = document.querySelector('#btn-4');

btn1.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('https://i.imgur.com/1BOiy18.png')";
});
btn2.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('https://i.imgur.com/vqSCiLH.png')";
});
btn3.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('https://i.imgur.com/QC16IpJ.png')";
});
btn4.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('https://i.imgur.com/QwwT2LK.png')";
});