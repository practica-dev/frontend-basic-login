function showLogin() {
  document.getElementsByClassName("login_basic")[0].style.visibility = 'visible'
  document.getElementsByClassName("log")[0].style.visibility = 'hidden'
}

function login() {
  const name = document.getElementById("name").value
  const password = document.getElementById("password").value

  alert(`name: ${name}\npassword: ${password}`)
}