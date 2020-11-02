
//fonction validation:

function validation() {

    // METHODE UNE:

    var f = document.getElementById("fname").value;
    var l = document.getElementById("lname").value;
    var d = document.getElementById("date").value;
    var a = document.getElementById("adresse").value;
    var m = document.getElementById("mail").value;


    //Verifier que ts les champs sont remplis et comporte au moins 5 caractères
    if (  (f && l && d && a && m !="" ) && (f.length>4) && (f.length<=20) && (l.length>4) && (l.length<=20)  && (a.length>4) && (a.length<=50) && (m.length>4) && (m.length<=30) ) {

        //Masquer l'erreur:s
        document.getElementById("error").classList.remove("display");

        //Afficher le resultat:
        document.getElementById("resultat").classList.add("display");
        document.getElementById("resultat").innerHTML = " Bienvenue " +  document.getElementById("lname").value ;
        
      
    }else{


        
       //Masquer le resultat quand on affiche l'erreur:
        document.getElementById("resultat").classList.remove("display");

        //Afficher l'erreur :
        document.getElementById("error").classList.add("display");
        document.getElementById("error").innerHTML = "Veuillez renseigner tous les champs et ils doivent contenir au moins 5 caractères !";
      

    } 

  

        
    //METHODE DEUX:

    // acceder a tous les inputs du formulaire choisit a l'aide de id
   /*var inputs = document.getElementById("formulaire").getElementsByTagName("input");
 
	for (var i = 0; i < inputs.length; i++) {
        //pour afficher dans la console
        console.log(inputs[i]);
        
		if ( (inputs[i].value !="") && (inputs[i].length > 4) ){

            document.getElementById("resultat").innerHTML = " Bienvenue " +  document.getElementById("lname").value ;
			
        }else{

            document.getElementById("error").innerHTML = "Veuillez renseigner tous les champs !";


        }
	}*/





}