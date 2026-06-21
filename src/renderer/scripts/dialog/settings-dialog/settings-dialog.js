// This file contains the basic logic of the settings dialog.
const dialog = document.getElementById('settings-dialog');
const settingsBtn = document.getElementById('settings-btn');
const closeBtn = document.getElementById('dialog-close-btn');

settingsBtn.addEventListener('click', () => {
    dialog.showModal();
});

closeBtn.addEventListener('click', () => {
    dialog.close();
});