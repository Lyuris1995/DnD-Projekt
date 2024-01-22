const getModifier = 0;

function calculateModifier(wert, targetId) {
    const modifierElement = document.getElementById(targetId);

    const modifier = Math.floor((parseInt(wert) - 10) / 2);

    modifierElement.innerHTML = modifier.toString();
}
