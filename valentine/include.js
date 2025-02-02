document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("btnYes").addEventListener('click', saidYes);
    document.getElementById("btnNo").addEventListener('click', saidNo);
    let noCount = 0;
    let origW;
    let origH;
    let origfs;


    function saidYes(){
        document.getElementById('gifShow').setAttribute('src', 'asset/accepted.gif');
        document.getElementById('mp3Source').setAttribute('src', 'asset/accepted.mp3');
        document.querySelector('audio').load()
        let button = document.getElementById("btnYes");
        button.style.width = `${origW}px`;
        button.style.height = `${origH}px`;
        button.style.fontSize = `${origfs}`;
    } 
    function saidNo(){
        if (noCount === 0){
            noCount = true;
            document.getElementById('gifShow').setAttribute('src', 'asset/not-accepted.gif');
            document.getElementById('mp3Source').setAttribute('src', 'asset/not-accepted.mp3');
            document.querySelector('audio').load()
            let element = document.getElementById("btnYes");
            origW = document.getElementById("btnYes").offsetWidth;
            origH = document.getElementById("btnYes").offsetHeight;
            origfs = window.getComputedStyle(element).fontSize;

        } else {
            document.getElementById('gifShow').setAttribute('src', 'asset/not-accepted2.gif');
        }
        let currentSize = document.getElementById("btnYes").offsetWidth;
        let button = document.getElementById("btnYes");
        button.style.width = `${parseInt(currentSize) * 2}px`;
        button.style.height = `${parseInt(currentSize) * 2}px`;
        button.style.fontSize = `${parseInt(currentSize)/2 + 10}px`;
    }

});

