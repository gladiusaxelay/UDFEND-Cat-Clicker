let clicks = [];

let names = ["Cat 0", "Cat 1", "Cat 2"];

const list = document.querySelector('.cat-list');
const insertCat = document.querySelector('.cat-insert');

function listenToCatClicks() {
    const grabAllCats = document.querySelectorAll('.cat');
    grabAllCats.forEach(function (cat) {
        cat.addEventListener('click', function (e) {
            let miauw = e.target.alt;
            let test = miauw[miauw.length - 1]
            clicks[test] += 1;
            document.querySelector('.clicks' + test).innerText = clicks[test];
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

function generateCats(name) {
    return `<li class = list id = '${name}'>${name}</li>`;
}

function showClickedCat(miauwName, i) {
    return `
    <div class="column">
        <section class="click-panel">
            <div class="restart" id="restart${i}">
                <span class="clicks${i}">${clicks[i]}</span> clicks
                <i class="fa fa-repeat"></i>
            </div>
        </section>
        <img src="img/${miauwName}.jpg" alt="Cat${i}" class="cat row image rounded-corners">
    </div>`;
}

function makeList() {
    const listHTML = names.map(function (name) {
        return generateCats(name);
    });

    list.innerHTML = listHTML.join('');

    for (let i = 0; i < listHTML.length; i++) {
        let click = 0;
        clicks.push(click);
    }

    start();
}

makeList();

function start() {
    const grabAlllistItems = document.querySelectorAll('.list');
    grabAlllistItems.forEach(function (list) {

        list.addEventListener('click', function (e) {
            let miauwName = e.target.id;

            for (let i = 0; i < grabAlllistItems.length; i++) {
                switch (miauwName) {
                    case 'Cat ' + i:
                        insertCat.innerHTML = showClickedCat(miauwName, i);
                        listenToCatClicks();
                        if (document.getElementById('restart' + i).addEventListener('click', function () {
                                clicks[i] = 0;
                                document.querySelector('.clicks' + i).innerText = clicks[i];
                            }));
                        break;
                }
            }
        });
    })
}