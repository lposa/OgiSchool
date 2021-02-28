var objPeople = [{
        email: "posa.97@gmail.com",
        password: "123"
    },

    {
        email: "ogi.kovacevic205@gmail.com",
        password: "Og12dog13"
    }

]





function getInfo() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    for (i = 0; i < objPeople.length; i++) {
        if (email == objPeople[i].email && password == objPeople[i].password) {
            window.location.href = "schedule.html";
            return;
        }
        alert("Wrong username or password")
    }
}