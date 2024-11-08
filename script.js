function validate() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("msg");

  if (username === "" || password === "") {
    errorMessage.textContent = "Both fields are required!";
    return false;
  }
  localStorage.setItem("username", username);
  window.location.href = "Github.html";
  return false;
}

function logout() {
    localStorage.clear();
    window.location.href = "Login.html";
    return false;
  }




// async function fetchdata() {
//   try {
//     let response = await fetch("https://api.github.com/users?per_page=10");
//     let data = await response.json();
//     data.forEach((element) => {
//       let p = document.createElement("p");
//       p.textContent = element.login;
//       let a = document.createElement("a");
//       a.setAttribute("target", "_blank");
//       let top = document.getElementById("top");
//       top.appendChild(p);
//       top.appendChild(a);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

let usersData = []; 

async function fetchdata() {
  try {
    const response = await fetch("https://api.github.com/users?per_page=10");
    usersData = await response.json();
    displayUsers(usersData); 
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


function displayUsers(users) {
  const top = document.getElementById("top");
  top.innerHTML = ''; 

  users.forEach((user) => {
    const p = document.createElement("p");
    p.textContent = user.login;

    const a = document.createElement("a");
    a.setAttribute("href", `https://github.com/${user.login}`);
    a.setAttribute("target", "_blank");
    a.textContent = "View Profile";

    top.appendChild(p);
    top.appendChild(a);
  });
}

function sortUsersAlphabetically() {
  const sortedUsers = [...usersData].sort((a, b) => a.login.localeCompare(b.login));
  displayUsers(sortedUsers);
}


document.getElementById("sort").addEventListener("change", (event) => {
  const sortOrder = event.target.value;
  if (sortOrder === "Alphabetical") {
    sortUsersAlphabetically();
  } else {
    displayUsers(usersData);
  }
});




