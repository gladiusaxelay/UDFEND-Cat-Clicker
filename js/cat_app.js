let clicks = [];

function listenToCatClicks() {
    const grabAllCats = document.querySelectorAll('.cat');
    // console.log(grabAllCats);
    grabAllCats.forEach(function (cat) {
        cat.addEventListener('click', function (e) {
            let miauw = e.target.alt;
            // console.log(miauw);
            for (let i = 0; i < grabAllCats.length; i++) {
                switch (miauw) {
                    case 'Cat' + i:
                        clicks[i] += 1;
                        document.querySelector('.clicks' + i).innerText = clicks[i];
                        break;
                }
            }
        })
    })
}

const grabAllresetClicks = document.querySelectorAll('.fa-repeat');
grabAllresetClicks.forEach(function (reset) {
    reset.addEventListener('click', function () {
        for (let i = 0; i < grabAllresetClicks.length; i++) {
            if (document.getElementById('restart' + i).addEventListener('click', function () {
                    clicks[i] = 0;
                    document.querySelector('.clicks' + i).innerText = clicks[i];
                }));
        }
    });
})

function initGame() {
    for (let i = 0; i < grabAllresetClicks.length; i++) {
        let click = 0;
        clicks.push(click);
    }
    listenToCatClicks();
}

initGame();
