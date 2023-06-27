let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
  };

let profileContainer = document.getElementById('profileContainer');
profileContainer.classList.add("text-center",'d-flex','flex-column','justify-content-center')
let imgContainer = document.getElementById('imgContainer');

//create an userProfile Image and append to the imageContainer

let imgEl = document.createElement('img');
imgEl.setAttribute('src',profileDetails.imgSrc);
imgEl.classList.add('profile-img');
imgContainer.appendChild(imgEl);

//creating nameEl and append it to the profile container

let nameEl = document.createElement('h1');
nameEl.classList.add('profile-name');
nameEl.textContent = profileDetails.name;
profileContainer.appendChild(nameEl);

//creating ageEl and append it to the profile Container

let ageEl = document.createElement('p');
ageEl.classList.add("age");
ageEl.textContent = "Age: " + profileDetails.age;
profileContainer.appendChild(ageEl);

