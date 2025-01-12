"use script"
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut

        let isValid = true; // Variable pour l'état de validation du formulaire

        // Récupérer  tous les éléments du formulaire
        let lastname = document.getElementById("lastname");
        let firstname = document.getElementById("firstname");
        let email = document.getElementById("email");
        let address = document.getElementById("address");
        let birthdate = document.getElementById("birthdate");
        let password = document.getElementById("password");
        let confirmPassword = document.getElementById("confirm-password");

        // Fonction pour créer et afficher les messages d'erreur sous chaque champ
        function showError(inputElement, message) {
            let errorElement = document.getElementById(inputElement.id + "-error");
            errorElement.textContent = message;
            
        }

        // réintialisation des messages d'erreurs
        let errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(error => {
            error.textContent = "";
        });

        
        // condition pour vérifier le nom 
        if (!lastname.value) {
            isValid = false;
            showError(lastname, "Erreur de nom : Le nom est requis.");
        } else if (lastname.value.length < 5 || lastname.value.length > 15) {
            isValid = false;
            showError(lastname, "Erreur de nom : Le nom doit être entre 5 et 15 caractères.");
        }

        // condition pour vérifier le prénom 
        if (!firstname.value) {
            isValid = false;
            showError(firstname, "Erreur de prénom : Le prénom est requis.");
        } else if (firstname.value.length < 5 || firstname.value.length > 15) {
            isValid = false;
            showError(firstname, "Erreur de prénom : Le prénom doit être entre 5 et 15 caractères.");
        }

        // condition pour vérifier l'email avec une regex
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!email.value) {
            isValid = false;
            showError(email, "Erreur d'email : L'email est requis.");
        } else if (!emailPattern.test(email.value)) {
            isValid = false;
            showError(email, "Erreur d'email : L'email n'est pas valide.");
        }

        //condition pour vérifier l'adresse
        if (!address.value) {
            isValid = false;
            showError(address, "Erreur d'adresse : L'adresse est requise.");
        }

        // condition pour vérifier le birthday
        if (!birthdate.value) {
            isValid = false;
            showError(birthdate, "Erreur de date de naissance : La date de naissance est requise.");
        }

        // condition pour vérifier le mot de passe 
        if (!password.value) {
            isValid = false;
            showError(password, "Erreur de mot de passe : Le mot de passe est requis.");
        } else if (password.value.length < 8) {
            isValid = false;
            showError(password, "Erreur de mot de passe : Le mot de passe doit contenir au moins 8 caractères.");
        }

        // condition pour verifier le confirmation du mot de passe
        if (password.value !== confirmPassword.value) {
            isValid = false;
            showError(confirmPassword, "Erreur : Les mots de passe ne correspondent pas.");
        }

        // affiche le message d'erreur si tout est ok .
        if (isValid) {
            document.getElementById("success-message").textContent = "Formulaire envoyé avec succès!";
        }
    });
});
