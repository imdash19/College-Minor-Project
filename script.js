const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function menuAnimation() {

    var menu = document.querySelector("#menu")
    var close = document.querySelector("#close")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    
    menu.addEventListener("click", function () {
            full.style.top = 0
            navimg.style.opacity = 0
            sidebar.style.display = 'flex'
    })
    
    close.addEventListener("click", function () {
            full.style.top = 0
            navimg.style.opacity = 1
            sidebar.style.display = 'none'
    })
}

menuAnimation()

document.getElementById('searchTrains').addEventListener('click', function() {
    const from = document.getElementById('fromStation').value;
    const to = document.getElementById('toStation').value;
    if (from && to) {
        addToHistory(`From: ${from}, To: ${to}`);
        // Implement train search logic here
        alert(`Searching trains from ${from} to ${to}`);
    } else {
        alert('Please enter both stations.'); 
    }
});

document.getElementById('checkPnr').addEventListener('click', function() {
    const pnr = document.getElementById('pnrNumber').value;
    if (pnr) {
        addToHistory(`PNR Check: ${pnr}`);
        // Implement PNR check logic here
        alert(`Checking PNR: ${pnr}`);
    } else {
        alert('Please enter a PNR number.');
    }
});

document.getElementById('checkTrain').addEventListener('click', function() {
    const trainNumber = document.getElementById('trainNumber').value;
    if (trainNumber) {
        addToHistory(`Train Check: ${trainNumber}`);
        // Implement train number check logic here
        alert(`Checking Train Number: ${trainNumber}`);
    } else {
        alert('Please enter a train number.');
    }
});

function addToHistory(search) {
    const historyList = document.getElementById('searchHistory');
    const listItem = document.createElement('li');
    listItem.textContent = search;
    historyList.appendChild(listItem);
}