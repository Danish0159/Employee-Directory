'use strict'

// In this project, you’ll use the Random User Generator API(https://randomuser.me/) 
// to grab information for 12 random “employees, ” and use that data to build a prototype
// for an Awesome Startup employee directory.You’ll request a JSON object from the API using
// fetch and parse the data so that 12 employees are listed in a grid with their thumbnail image,
// full name, email, and location.Clicking the employee’s image or name will open a modal
// window with more detailed information, such as the employee’s birthday and address.


//////////////////////////////////////
// Variables.
const gallery = document.querySelector('.gallery');




//////////////////////////////////////
// Fetch data from randomUser API to display.

const randomUser = async function () {
  const responce = await fetch('https://randomuser.me/api/?results=12');
  const data = await responce.json();
  const users = data.results;

  // Pass data to show on modal.
  modalUser(users);

  for (let i = 0; i < users.length; i++) {
    let html = `<div class="card" id="card">
    <div class="card-img-container">
    <img class="card-img" src="${users[i].picture.large}" alt="profile picture">
    </div>
    <div class="card-info-container">
          <h3 id="name" class="card-name cap">${users[i].name.first + ' ' + users[i].name.last}</h3>
          <p class="card-text">${users[i].email}</p>
          <p class="card-text cap">${users[i].location.city}</p>
          </div>
      </div>`;
    gallery.insertAdjacentHTML('beforeend', html);
  }
}
randomUser();


//////////////////////////////////////
// Implement Modal functionality.

function modalUser(users) {

  document.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'card' || e.target && e.target.id === 'name') {

      // modal.classList.remove('hidden');
      const html = `
 <div class="modal-container">
          <div class="modal">
              <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
              <div class="modal-info-container">
                  <img class="modal-img" src="" alt="profile picture">
                  <h3 id="name" class="modal-name cap">name</h3>
                  <p class="modal-text">email</p>
                  <p class="modal-text cap">city</p>
                  <hr>
                  <p class="modal-text">(555) 555-5555</p>
                  <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                  <p class="modal-text">Birthday: 10/21/2015</p>
              </div>
          </div>
      </div> `;

      document.body.insertAdjacentHTML('beforeend', html);
      e.target.disabled = true;


      // Close Modal
      // let modal = document.querySelector('.modal');
      // let modalContainer = document.querySelector('.modal-container');
      // const closeBtn = document.querySelector('.modal-close-btn');

      // //Event listener for closing modal
      // closeBtno.addEventListener('click', () => {
      //   modalContainer.style = 'display: none';
      //   modal.remove();
      // });

    }
  });
}


//////////////////////////////////////
// Implement Search functionalitys


//Adds a search bar
// var searchBar = function searchBar() {
//   var divToAddFormTo = document.getElementById('formplace');
//   var searchHTML = '<form action="#" method="get" preventDefault>\n          <input type="search" id="search-input" class="search-input" placeholder="Search...">\n          <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">\n      </form> ';
//   divToAddFormTo.innerHTML = searchHTML;

//   //Adds search functionality
//   var searchBar = divToAddFormTo.firstElementChild.firstElementChild;
//   searchBar.addEventListener('keyup', function (e) {
//     var cards = document.getElementsByClassName('card');
//     for (var i = 0; i < 12; i++) {
//       cards[i].style.display = 'none';
//     };
//     for (var _i = 0; _i < 12; _i++) {
//       console.log(searchBar.value);
//       if (usersOnPage[_i].includes(searchBar.value)) {
//         console.log(usersOnPage[_i]);
//         var userToShow = document.getElementById(usersOnPage[_i] + " card");
//         userToShow.style.display = defaultDisplay;
//       }
//     };
//     if (searchBar.value.length == 0) {
//       for (var _i2 = 0; _i2 < 12; _i2++) {
//         cards[_i2].style.display = defaultDisplay;
//       };
//     }
//   });
// }; //end of searchBar


// searchBar();
