// This file contains the logic for the spellcheck setting.
const spellcheckToggle = document.getElementById('spellcheck-toggle');
const editor = document.getElementById('editor');

spellcheckToggle.addEventListener('change', () => {
    window.electronAPI.setSettings('spellcheck', spellcheckToggle.checked);
    editor.spellcheck = spellcheckToggle.checked;
});

window.electronAPI.getSettings('spellcheck').then((saved) => {
    spellcheckToggle.checked = saved !== undefined ? saved : true;
    editor.spellcheck = spellcheckToggle.checked;
});