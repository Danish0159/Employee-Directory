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

  console.log(users);
  // Load data
  for (let i = 0; i < users.length; i++) {
    // Setting unique id's, to show data on modal later.
    let html = `<div class="card" id="card${i}">
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

  // Pass data to show on modal.
  modalUser(users);

  // Pass data to Search on modal.
  SearchUser(users);
}

randomUser();


//////////////////////////////////////
// Implement Modal functionality.

function modalUser(users) {
  // Event listner on cards.
  document.addEventListener('click', function (e) {
    for (let i = 0; i < users.length; i++) {
      let id = "card" + i;

      if (e.target && e.target.id === id) {
        const html = `
    <div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                    <img class="modal-img" src="${users[i].picture.large}" alt="profile picture">
                    <h3 id="name" class="modal-name cap">${users[i].name.first + ' ' + users[i].name.last}</h3>
                    <p class="modal-text">${users[i].email}</p>
                    <p class="modal-text cap">${users[i].location.city}</p>
                    <hr>
                    <p class="modal-text">${users[i].cell}</p>
                    <p class="modal-text">${users[i].location.state}</p>
                    <p class="modal-text">Birthday: ${users[i].dob.date.slice(0, 10)}</p>
                </div>
            </div>
        </div> `;

        document.body.insertAdjacentHTML('beforeend', html);


        // Close Modal
        let closebtn = document.querySelector(".modal-close-btn");
        let modalContainer = document.querySelector('.modal-container');
        closebtn.addEventListener('click', function () {
          modalContainer.remove();
        })
      }
    }
  })
}


//////////////////////////////////////
// Implement Search functionalitys
// function SearchUser(users) {

//   // Insert the form.
//   const html = `
// <form action="#" method="get">
// <input type="search" id="search-input" class="search-input" placeholder="Search...">
// <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
// </form> `;


//   let searchContainer = document.querySelector('.search-container');
//   searchContainer.insertAdjacentHTML('beforeend', html);


//   const searchBar = document.querySelector(".search-input");
//   searchBar.addEventListener("keyup", e => {
//     const searchString = e.target.value;


//     for (let i = 0; i < users.length; i++) {
//       if (users[i].email === searchString) {

//         alert('this is matching');
//       }
//     }


//   });

// }