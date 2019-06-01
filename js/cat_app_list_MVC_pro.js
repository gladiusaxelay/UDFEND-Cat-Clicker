/* eslint-disable no-undef */
let clicks = [];

let names = [];

/* ======= Model ======= */

let model = {

    currentCat: null,
    cats: [{
            clickCount: 0,
            name: 'Cat 0',
            imgSrc: 'img/Cat 0.jpg',
            imgURL: 'URL0'
        },
        {
            clickCount: 0,
            name: 'Cat 1',
            imgSrc: 'img/Cat 1.jpg',
            imgURL: 'URL1'
        },
        {
            clickCount: 0,
            name: 'Cat 2',
            imgSrc: 'img/Cat 2.jpg',
            imgURL: 'URL2'
        },
        {
            clickCount: 0,
            name: 'Cat 3',
            imgSrc: 'img/Cat 3.jpg',
            imgURL: 'URL3'
        },
        {
            clickCount: 0,
            name: 'Cat 4',
            imgSrc: 'img/Cat 4.jpg',
            imgURL: 'URL4'
        }
    ],
    adminFlag: true
};

/* ======= Octopus ======= */

let octopus = {

    init: function () {
        // set our current cat to the first one in the list
        // model.currentCat = model.cats[0];

        // tell our views to initialize
        adminView.init();
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
    },

    setAdminFlag: function () {
        if (model.adminFlag) {
            model.adminFlag = false;
        } else {
            model.adminFlag = true;
        }
        adminView.render()
    }
};

/* ======= Views ======= */

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

                for (let i = 0; i < catListView.grabAlllistItems.length; i++) {
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
                            model.currentCat = i;

                            if (!model.adminFlag) {
                                adminView.render();
                            }

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

let adminView = {

    init: function () {
        this.showAdmin = document.querySelector('.admin-btn');
        this.cancelAdmin = document.querySelector('.cancel-btn');
        this.showAdmin.addEventListener('click', function (e) {
            octopus.setAdminFlag();
        })
        this.cancelAdmin.addEventListener('click', function (e) {
            e.preventDefault();
            octopus.setAdminFlag();
        })
        this.render();
    },

    render: function () {

        let form = document.getElementById('theForm');
        // debugger;
        if (model.adminFlag) {
            form.style.display = 'none';
        } else if (model.currentCat === null) {
            form.style.display = 'block';
            document.getElementById('name').placeholder = 'Please select a cat';
            document.getElementById('imageURL').placeholder = 'Please select a cat';
        } else {
            form.style.display = 'block';
            document.getElementById('name').placeholder = model.cats[model.currentCat].name;
            document.getElementById('imageURL').placeholder = model.cats[model.currentCat].imgURL;
        }

    }

};

octopus.init();