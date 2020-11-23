

$(document).ready(function () {


    //afficher le nombre de caractère saisie en temps réel pour chaque input:
    //je cible tous les inputes par la classe "form-control" et je calcule this.val.length et je l'affiche dns un div de class "compteur" pour ts les inputes 
    //.parent() ça fait remonter l’élémént ciblé d’1 niveau $(this): cible ton <input> et $(this).parent() : cible l’élément parent de <input> = <div class="col-sm-9>

    $('.form-control').keyup(function () {

        var nombreCaractere = $(this).val().length;
        $(this).parent().parent().find(".compteur").text(nombreCaractere + " car.");
    })

    //Affichage du datepicker jQuery:
    $("#date").datepicker({

        dateFormat: "dd-mm-yy",
        maxDate: " ",

    });

    $("#button").click(function (event) {

        event.preventDefault();

        if (($("#nom").val() && $("#prenom").val() && $("#date").val() && $("#adresse").val() && $("#email").val()) != "") {

            //Enregistrer le contact dans un tableau JSON 
            contactStore.add($('#nom').val(), $('#prenom').val(), $('#date').val(), $('#adresse').val(), $('#email').val());

            //Affichage des contacts dans le tableau
            $("#table_contact tbody").html("");
            for (var i in contactStore.getList()) {
                $("#table_contact tbody").append(
                    '<tr>' +
                    '<th scope="row">' + i + '</th>' +
                    '<td>' + contactStore.getList()[i].nom + '</td>' +
                    '<td>' + contactStore.getList()[i].prenom + '</td>' +
                    '<td>' + contactStore.getList()[i].date + '</td>' +
                    '<td>' + contactStore.getList()[i].adresse + '</td>' +
                    '<td>' + contactStore.getList()[i].email + '</td>' +
                    '</tr>'
                );
            }


        } else {

            $('#myModal').modal({ show: true })
            $(".modal-body").html('Veuillez renseigner tous les champs s\'il vous plait');

        }
    });





});


