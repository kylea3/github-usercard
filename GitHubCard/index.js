import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const divcards = document.querySelector('.cards');
axios.get('https://api.github.com/users/kylea3')
  .then( response => {
    let cards = githubComponent(response.data);
    console.log(cards);
    divcards.appendChild(cards);
    })
  .catch( err => {
    console.log("error", err);
  })

// console.log(githubComponent(axios.get('https://api.github.com/users/kylea3')));
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
followersArray.forEach(el => {
  axios.get(`https://api.github.com/users/${el}`)
  .then( response => {
    let cards = githubComponent(response.data);
    console.log(cards);
    divcards.appendChild(cards);
    })
  .catch( err => {
    console.log("error", err);
  })
})


function githubComponent(obj) {
  const card = document.createElement('div');
  const cardIMG = document.createElement('img');
  const cardInfo = document.createElement('div');
  const heading = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const address = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  card.appendChild(cardIMG);
  card.appendChild(cardInfo);
  cardInfo.appendChild(heading);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  profile.appendChild(address);
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  heading.classList.add('name');
  username.classList.add('username');
  cardIMG.src = obj.avatar_url;
  heading.textContent = obj.name;
  username.textContent = obj.avatar_url;
  location.textContent = obj.location;
  address.href = obj.html_url;
  address.textContent = obj.html_url;
  followers.textContent = `Follower: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = `Bio: ${obj.bio}`;
  return card; 

  
}
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
