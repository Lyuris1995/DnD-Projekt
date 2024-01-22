function calculateModifier(wert, targetId) {
    const modifierElement = document.getElementById(targetId);

    const modifier = Math.floor((parseInt(wert) - 10) / 2);

    modifierElement.innerHTML = modifier.toString();
}

function calculateLevel() {
    const experience = document.getElementById("experience").value;
    const level = document.getElementById("level");

    if (experience < 300) {
        level.value = "1";
    } else if (experience >= 300 && experience < 900) {
        level.value = "2";
    } else if (experience >= 900 && experience < 2700) {
        level.value = "3";
    } else if (experience >= 2700 && experience < 6500) {
        level.value = "4";
    } else if (experience >= 6500 && experience < 14000) {
        level.value = "5";
    } else if (experience >= 14000 && experience < 23000) {
        level.value = "6";
    } else if (experience >= 23000 && experience < 34000) {
        level.value = "7";
    } else if (experience >= 34000 && experience < 48000) {
        level.value = "8";
    } else if (experience >= 48000 && experience < 64000) {
        level.value = "9";
    } else if (experience >= 64000 && experience < 85000) {
        level.value = "10";
    } else if (experience >= 85000 && experience < 100000) {
        level.value = "11";
    } else if (experience >= 100000 && experience < 120000) {
        level.value = "12";
    } else if (experience >= 120000 && experience < 140000) {
        level.value = "13";
    } else if (experience >= 140000 && experience < 165000) {
        level.value = "14";
    } else if (experience >= 165000 && experience < 195000) {
        level.value = "15";
    } else if (experience >= 195000 && experience < 225000) {
        level.value = "16";
    } else if (experience >= 225000 && experience < 265000) {
        level.value = "17";
    } else if (experience >= 265000 && experience < 305000) {
        level.value = "18";
    } else if (experience >= 305000 && experience < 335000) {
        level.value = "19";
    } else if (experience >= 335000) {
        level.value = "20";
    }
}