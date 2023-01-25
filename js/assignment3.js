//Problem1
let object = document.getElementById('object');
console.log(object)
let classes = ["name", "email", "dob", "contact", "gender"];
for (let index = 0; index < classes.length; index++) {
    object.innerHTML += "<div class='col-2 event'>" + classes[index] + "</div>";
}
let patient1 = document.getElementById('patient1');
console.log(patient1)
let patient1_object = ["Bright", "bright@gmail.com", "22/12/1994", "09435686774", "Male"];
for (let index = 0; index < patient1_object.length; index++) {
    patient1.innerHTML += "<div class='col-2 event'>" + patient1_object[index] + "</div>";
}
let patient2 = document.getElementById('patient2');
console.log(patient2)
let patient2_object = ["Win", "win@gmail.com", "9/1/1999", "09435786774", "Male"];
for (let index = 0; index < patient2_object.length; index++) {
    patient2.innerHTML += "<div class='col-2 event'>" + patient2_object[index] + "</div>";
}
let patient3 = document.getElementById('patient3');
console.log(patient3)
let patient3_object = ["Meen", "meen@gmail.com", "12/3/1994", "09987866774", "Male"];
for (let index = 0; index < patient3_object.length; index++) {
    patient3.innerHTML += "<div class='col-2 event'>" + patient3_object[index] + "</div>";
}

//Problem2
let list = document.getElementById('list');
console.log(list);
let todolist = ["html", "css", "java", "javascript", "bootstrap"];
for (let index = 0; index < todolist.length; index++) {
    list.innerHTML += "<li>" + todolist[index] + "</li>";
}

//Problem3
let movie_list = document.getElementById('movie_list')
console.log(movie_list);
let movie = [
    ["Devil Sister", "Hospital", "Tom & Jerry"],
    ["home7.jpg", "hospital.jpg", "16.jpg"],
    ["Thai Serie", "Korean Serie", "Cartoon Serie"],
]

for (let index = 0; index < movie.length; index++) {
    for (let i = 0; i < movie[index].length; i++) {
        movie_list.innerHTML = "<div><strong>" + movie[0][0] + "</strong></div>";
        movie_list.innerHTML += "<img src='images/" + movie[1][0] + "'width=300px height=200px'/><br/>";
        movie_list.innerHTML += "<strong>" + movie[2][0] + "</strong>";

        movie_list.innerHTML += "<div><strong>" + movie[0][1] + "</strong></div>";
        movie_list.innerHTML += "<img src='images/" + movie[1][1] + "'width=300px height=200px'/><br/>";
        movie_list.innerHTML += "<strong>" + movie[2][1] + "</strong>";

        movie_list.innerHTML += "<div><strong>" + movie[0][2] + "</strong></div>";
        movie_list.innerHTML += "<img src='images/" + movie[1][2] + "'width=300px height=200px'/><br/>";
        movie_list.innerHTML += "<strong>" + movie[2][2] + "</strong>";
    }

}