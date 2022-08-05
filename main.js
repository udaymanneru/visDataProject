data = rawdata.results;
let nameHeading = document.querySelector("h2");
let image = document.querySelector("img");
let information = document.querySelectorAll("#information-container p");
let buttonID = document.querySelector("#randomButton")

function populate(randIndex){
    person = data[randIndex];
    let name = person.name.first + " " + person.name.last;
    nameHeading.innerHTML = "My name is " + name;

    image.src = person.picture.large;

    let address = "Address: " + person.location.street.number + " " + person.location.street.name + " " + person.location.city + " " + " " + person.location.state + " " + person.location.country;
    
    let email = "Email: " + person.email;
    let age = "Age: " + person.dob.age;
    let phone = "Phone: " + person.phone;


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

