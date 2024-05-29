function switchLanguage() {
    const frContent = document.getElementById('fr-content');
    const enContent = document.getElementById('en-content');
    const title = document.getElementById('title');
    const langSwitch = document.getElementById('lang-switch');
    
    if (frContent.style.display === 'none') {
        frContent.style.display = 'block';
        enContent.style.display = 'none';
        title.textContent = 'Politique de Confidentialité';
        langSwitch.textContent = 'Changer de langue';
    } else {
        frContent.style.display = 'none';
        enContent.style.display = 'block';
        title.textContent = "What'sApp Statuses";
        langSwitch.textContent = 'Switch Language';
    }
}
