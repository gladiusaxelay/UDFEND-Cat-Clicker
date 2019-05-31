/* eslint-disable no-undef */
let clicks = [];

let names = [];

/* ======= Model ======= */

let model = {
    
    currentCat: null,
    cats: [{
            clickCount: 0,
            name: 'Cat 0',
            imgSrc: 'img/Cat 0.jpg'
        },
        {
            clickCount: 0,
            name: 'Cat 1',
            imgSrc: 'img/Cat 1.jpg'
        },
        {
            clickCount: 0,
            name: 'Cat 2',
            imgSrc: 'img/Cat 2.jpg'
        },
        {
            clickCount: 0,
            name: 'Cat 3',
            imgSrc: 'img/Cat 3.jpg'
        },
        {
            clickCount: 0,
            name: 'Cat 4',
            imgSrc: 'img/Cat 4.jpg'
        }
    ]
};

/* ======= Octopus ======= */

let octopus = {

    init: function () {
        // set our current cat to the first one in the list
        model.currentCat = model.cats[0];

        // tell our views to initialize
        catListView.init();
        catListView.makeList();
        catListView.listenClickedCat();
        catView.init();
        this.listenToCatClicks();
    },

    listenToCatClicks: function () {
        catView.grabAllCats.forEach(function (cat) {
            cat.addEventListener('click', function (e) {
                let miauw = e.target.alt;
                let test = miauw[miauw.length - 1]
                clicks[test] += 1;
                document.querySelector('.clicks' + test).innerText = clicks[test];
            })
        })
    },

    grabAllresetClicks: function () {
        this.forEach(function (reset) {
            reset.addEventListener('click', function () {
                for (let i = 0; i < grabAllresetClicks.length; i++) {
                    if (document.getElementById('restart' + i).addEventListener('click', function () {
                            clicks[i] = 0;
                            document.querySelector('.clicks' + i).innerText = clicks[i];
                        }));
                }
            });
        })
    }
};

/* ======= View ======= */

let catView = {

    init: function () {
        this.grabAllCats = document.querySelectorAll('.cat');
        this.grabAllresetClicks = document.querySelectorAll('.fa-repeat');
    }

};

let catListView = {

    init: function () {
        this.list = document.querySelector('.cat-list');
        this.insertCat = document.querySelector('.cat-insert');
    },

    makeList: function () {
        

        let namesArr = [];

        for (let i = 0; i < model.cats.length; i++) {
            namesArr.push(model.cats[i].name);
        }
        
        this.listHTML = namesArr.map(function (name) {
            return `<li class = list id = '${name}'>${name}</li>`;
        })

        // this.listHTML = Object.keys(model.cats).forEach(function (cat){
        //     return `<li class = list id = '${cats.name[cat]}'>${cats.name[cat]}</li>`;
        // })

        this.list.innerHTML = this.listHTML.join('');

        for (let i = 0; i < this.listHTML.length; i++) {
            let click = 0;
            clicks.push(click);
        }
    },


    listenClickedCat: function () {
        this.grabAlllistItems = document.querySelectorAll('.list');
        this.grabAlllistItems.forEach(function (list) {

            list.addEventListener('click', function (e) {
                let miauwName = e.target.id;
  
                for (let i = 0; i < catListView.grabAlllistItems.length ; i++) {
                    switch (miauwName) {
                        case 'Cat ' + i:
                            catListView.insertCat.innerHTML = `
                                        <div class="column">
                                            <section class="click-panel">
                                                <div class="restart" id="restart${i}">
                                                    <span class="clicks${i}">${clicks[i]}</span> clicks
                                                    <i class="fa fa-repeat"></i>
                                                </div>
                                            </section>
                                            <img src="img/${miauwName}.jpg" alt="Cat${i}" class="cat row image rounded-corners">
                                        </div>`;

                            catView.init();

                            octopus.listenToCatClicks();
                            if (document.getElementById('restart' + i).addEventListener('click', function () {
                                    clicks[i] = 0;
                                    document.querySelector('.clicks' + i).innerText = clicks[i];
                                }));
                            break;
                    }
                }
            });
        })
    },
}

octopus.init();