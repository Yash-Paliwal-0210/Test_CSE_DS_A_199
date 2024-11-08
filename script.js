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




async function fetchdata() {
  try {
    let response = await fetch("https://api.github.com/users?per_page=10");
    let data = await response.json();
    data.forEach((element) => {
      let p = document.createElement("p");
      p.textContent = element.login;
      let a = document.createElement("a");
      a.setAttribute("target", "_blank");
      let top = document.getElementById("top");
      top.appendChild(p);
      top.appendChild(a);
    });
  } catch (error) {
    console.log(error);
  }
}


