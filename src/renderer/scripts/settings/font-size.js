// This file contains the logic for font size settings.
const fontSizeSlider = document.getElementById('font-size-slider');
const fontSizeValue = document.getElementById('font-size-value');

fontSizeSlider.addEventListener('input', () => {
    const size = fontSizeSlider.value + 'px';
    fontSizeValue.textContent = size;
    editor.style.fontSize = size;
    window.electronAPI.setSettings('fontSize', fontSizeSlider.value);
});

window.electronAPI.getSettings('fontSize').then((savedSize) => {
    fontSizeSlider.value = savedSize;
    fontSizeValue.textContent = savedSize + 'px';
    editor.style.fontSize = savedSize + 'px';
});