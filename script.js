function DarkM() {
    const Darkid = document.getElementById('Dark')
    const inital = 'Let There Be Night';
    if (Darkid.textContent.includes(inital)) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        Darkid.textContent = 'Let There Be Light';
    } else {
        Darkid.textContent = inital;
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}

function opencloseSide() {
    if (document.getElementById("mySide").style.width == "20%") {
        document.getElementById("mySide").style.width = "0px";
    } else {
        document.getElementById("mySide").style.width = "20%";
    }
}
