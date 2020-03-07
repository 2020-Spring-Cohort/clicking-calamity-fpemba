
let autoClick = 0;
let collectiveCulminationCompounderClick = 0;
let multiplier = 1.2;
let power=0;
let cursorCost=100;
let costOfCollectiveCulminationCompounder=10;
let priceMultiplier=.10;
let cookiecount =Math.pow(multiplier, power);
let value = 0;
function update() {

    document.getElementById('cookie').value = Math.floor(cookiecount)

    document.title = Math.floor(cookiecount) + "  Cookies";

    document.getElementById('numberOfClickingCompanion').innerHTML = "You Have " + autoClick + " Clicking Companions.";

    document.getElementById('costOfClickingCompanion').innerHTML = "Cost: " + cursorCost + " Cookies";

    document.getElementById('costOfCollectiveCulminationCompounder').innerHTML = "Cost: " + costOfCollectiveCulminationCompounder + " Cookies";

    document.getElementById('numberOfCollectiveCulminationCompounders').innerHTML = "You Have " + collectiveCulminationCompounderClick + " Collective Culmination Compounders.";

};


function timer() {
    cookiecount = cookiecount + autoClick;
    cookiecount = cookiecount + collectiveCulminationCompounderClick;
    update()

};
setInterval(timer, 1000)


function addCookie() {

    cookiecount+=Math.pow(multiplier, power);
    update()
};



function reset() {
    cookiecount = 0
    document.getElementById('cookie').innerHTML = Math.floor(cookiecount);
    update()

};

function purchaseClickingCompanion() {

    if (cookiecount >= cursorCost) {
        cookiecount = cookiecount - cursorCost;
        autoClick = autoClick + 1;
        cursorCost+=Math.floor((cursorCost*.10));
        update()
    }
}

function purchaseCollectiveCulminationCompounder() {

    if (cookiecount >= costOfCollectiveCulminationCompounder) {
        cookiecount = cookiecount - costOfCollectiveCulminationCompounder;
        collectiveCulminationCompounderClick = collectiveCulminationCompounderClick + 1;
        costOfCollectiveCulminationCompounder+=Math.round(costOfCollectiveCulminationCompounder*priceMultiplier);
        power++;
        cookiecount+=value;
        priceMultiplier+=.10;
        update()

    };
}