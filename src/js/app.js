let cookiecount = 0;
let autoClick = 0;
let collectiveCulminationCompounderClick = 0;

function update() {

    document.getElementById('cookie').value = cookiecount

    document.title = cookiecount + "  Cookies";

    document.getElementById('numberOfClickingCompanion').innerHTML = "You own " + autoClick + " Clicking Companion.";

    document.getElementById('costOfClickingCompanion').innerHTML = "Cost: " + ((autoClick + 1) * 20) + " Cookies";

    document.getElementById('numberOfCollectiveCulminationCompounders').innerHTML = "You own " + collectiveCulminationCompounderClick +
        " Collective Culmination Compounder";

    document.getElementById('costOfCollectiveCulminationCompounder').innerHTML = "Cost: " + ((collectiveCulminationCompounderClick + 1) * 10) + " Cookies";
};


function timer() {
    cookiecount = cookiecount + autoClick
    cookiecount = cookiecount + collectiveCulminationCompounderClick;
    update()

};
setInterval(timer, 1000)


function addCookie() {

    cookiecount++
    update()
};



function reset() {
    cookiecount = 0
    document.getElementById('cookie').innerHTML = cookiecount;
    update()

};

function purchaseClickingCompanion() {

    if (cookiecount >= (autoClick + 1) * 20) {
        cookiecount = cookiecount - ((autoClick + 1) * 20);
        autoClick = autoClick + 1;
        update()
    }
}

function purchaseCollectiveCulminationCompounder() {

    if (cookiecount >= ((collectiveCulminationCompounderClick + 1) * 10)) {
        cookiecount = cookiecount - ((collectiveCulminationCompounderClick + 1) * 10);
        collectiveCulminationCompounderClick = collectiveCulminationCompounderClick + 2
        update()
    };
}