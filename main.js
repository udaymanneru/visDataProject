data = rawdata.results;
let nameHeading = document.querySelector("h2");
let image = document.querySelector("img");
let information = document.querySelectorAll("#information-container p");
let buttonID = document.querySelector("#randomButton")
let copyClipboard = document.querySelector("#copytoclipboard");

let globalName, globalAddress, globalEmail, globalAge, globalPhone;

function populate(randIndex){
    person = data[randIndex];
    let name = person.name.first + " " + person.name.last;
    console.log(name);
    nameHeading.innerHTML = "My name is " + name;
    globalName = name;

    image.src = person.picture.large;

    let address = "Address: " + person.location.street.number + " " + person.location.street.name + " " + person.location.city + " " + " " + person.location.state + " " + person.location.country;
    globalAddress = address;

    let email = "Email: " + person.email;
    globalEmail = email;

    let age = "Age: " + person.dob.age;
    globalAge = age;

    let phone = "Phone: " + person.phone;
    globalPhone = phone;

    informationArr = [address, email, age, phone];
    for(let i = 0; i < informationArr.length; i++){
        information[i].innerHTML = informationArr[i];
    }

}


populate(0);

buttonID.onclick = function(){
    let randIndex = Math.floor(Math.random() * data.length);
    populate(randIndex);
    
}


copyClipboard.onclick = function(){
    let information = globalName + "\n" + globalAddress + "\n" + globalEmail;
    console.log(information);
    navigator.clipboard.writeText(information);
}