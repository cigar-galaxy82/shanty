var first = document.querySelector("#first")
var second = document.getElementById("second")
var button = document.getElementById("third")
var fuel = document.getElementById("fourth")
const ref = firebase.firestore().collection('notifications');
var winning = 0;
var temp;
var co2;
var four;
var info = document.querySelector('.co2');
info.addEventListener('submit', (e) => {
    console.log("its working")
    e.preventDefault();
    const km = info.km.value;
    const type = info.type.value;
    const fuel = info.fuel.value;
    winning = first.value;
    console.log(winning)
    temp = second.value;
    console.log(temp)
    four = fourth.value;
    if (temp === "KTM Suzuki") {

        if (four === "petrol") {
            co2 = (winning * 2.31) / 23;

        }
        else if (four === "diesel") {
            co2 = (winning * 2.68) / 23;
        }
        alert(co2);
    }
    if (temp === "Yamaha Bajaj") {
        if (four === "petrol") {
            co2 = (winning * 2.31) / 28;
        }
        else if (four === "diesel") {
            co2 = (winning * 2.68) / 28;
        }
        alert(co2);
    }
    if (temp === "Mahindra Vespa") {
        if (four === "petrol") {
            co2 = (winning * 2.31) / 30;
        }
        else if (four === "diesel") {
            co2 = (winning * 2.68) / 30;
        }
        alert(co2);
    }
    if (temp === "zuki Hayabusa") {
        if (four === "petrol") {
            co2 = (winning * 2.31) / 34;
        }
        else if (four === "diesel") {
            co2 = (winning * 2.68) / 34;
        }
        alert(co2);
    }
    if (temp === "MV Agusta") {
        if (four === "petrol") {
            co2 = (winning * 2.31) / 43;
        }
        else if (four === "diesel") {
            co2 = (winning * 2.68) / 43;
        }
        alert(co2);
    }
    if (temp === "Super Blackbird") {
        if (four === "petrol") {
            co2 = (winning * 2.31) / 50;
        }
        else if (four === "diesel") {
            co2 = (winning * 2.68) / 50;
        }
        alert(co2);
    }
    if (temp === "Agusta") {
        if (four === "petrol") {
            co2 = (winning * 2.31) / 60;
        }
        else if (four === "diesel") {
            co2 = (winning * 2.68) / 60;
        }
        alert(co2);
    }
    if (temp === "Royal Enfield Classic") {
        if (four === "petrol") {
            co2 = (winning * 2.31) / 65;
        }
        else if (four === "diesel") {
            co2 = (winning * 2.68) / 65;
        }
        alert(co2);
    }
    if (temp === "Honda Activa ") {
        if (four === "petrol") {
            co2 = (winning * 2.31) / 74;
        }
        else if (four === "diesel") {
            co2 = (winning * 2.68) / 74;
        }
        alert(co2);
    }
    if (temp === "Bajaj Pulsar") {
        if (four === "petrol") {
            co2 = (winning * 2.31) / 55;
        }
        else if (four === "diesel") {
            co2 = (winning * 2.68) / 55;
        }
        alert(co2);
    }
    if (temp === "Ducati") {
        if (four === "petrol") {
            co2 = (winning * 2.31) / 44;
        }
        else if (four === "diesel") {
            co2 = (winning * 2.68) / 44;
        }
        alert(co2);
    }

    const ref = firebase.firestore().collection('complains');
    ref.onSnapshot(snapshot => {


        snapshot.docs.forEach(doc => {
            renderFeeds(doc)
        })
    });

});


