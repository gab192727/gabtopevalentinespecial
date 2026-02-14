document.addEventListener('DOMContentLoaded', function () {
    let yesButton = document.getElementById("btnYes");
    let noButton = document.getElementById("btnNo");

    yesButton.addEventListener('click', saidYes);
    noButton.addEventListener('click', saidNo);

    let noCount = 0;
    let origW;
    let origH;
    let origfs;


    function saidYes() {
        document.getElementById('gifShow').setAttribute('src', 'asset/accepted.gif');
        document.getElementById('mp3Source').setAttribute('src', 'asset/accepted.mp3');
        document.querySelector('audio').load()
        let button = document.getElementById("btnYes");
        button.style.width = `${origW}px`;
        button.style.height = `${origH}px`;
        button.style.fontSize = `${origfs}`;

        yesButton.disabled = true
        noButton.disabled = true

        document.getElementById("valentineText").textContent = "YIPPIE!!!"
        const textElement = document.getElementById("valentineText");
        let count = 0;

        const interval = setInterval(() => {
            count++;
            textElement.textContent += " YIPPIE!!!";
            if (count >= 10) clearInterval(interval);
        }, 500);


    }
    function saidNo() {
        if (noCount === 0) {
            noCount = true;
            document.getElementById('gifShow').setAttribute('src', 'asset/not-accepted.gif');
            document.getElementById('mp3Source').setAttribute('src', 'asset/not-accepted.mp3');
            document.querySelector('audio').load()
            let element = document.getElementById("btnYes");
            origW = document.getElementById("btnYes").offsetWidth;
            origH = document.getElementById("btnYes").offsetHeight;
            origfs = window.getComputedStyle(element).fontSize;
            document.getElementById("valentineText").textContent = "Please?"

        } else if (noCount > 2) {
            document.getElementById("valentineText").textContent += "Please?"
            document.getElementById('gifShow').setAttribute('src', 'asset/not-accepted2.gif');
        }
        noCount++;
        let currentSize = document.getElementById("btnYes").offsetWidth;
        yesButton.style.width = `${parseInt(currentSize) * 1.5}px`;
        yesButton.style.height = `${parseInt(currentSize) * 1.5}px`;
        yesButton.style.fontSize = `${parseInt(currentSize) / 2 + 10}px`;
    }

});
