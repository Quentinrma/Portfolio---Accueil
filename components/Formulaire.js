
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (name === '' || email === '') {
        errorMessage.textContent = 'Tous les champs sont obligatoires.';
        return;
    }
    
    if (!validateEmail(email)) {
        errorMessage.textContent = 'Veuillez entrer un email valide.';
        return;
    }
    
    errorMessage.textContent = '';
    alert('Formulaire soumis avec succès!');
    // Vous pouvez envoyer les données au serveur ici si nécessaire
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}