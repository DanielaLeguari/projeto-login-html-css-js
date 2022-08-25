function efetuaLogin(email, password) {
  if (email && password) {
    return true;
  } else {
    return false;
  }
}

document.querySelector("#form").addEventListener("submit", function (e) {
  const email = document.getElementById("email").value;
  //console.log(email);
  const password = document.getElementById("password").value;
  const sucessoLogin = efetuaLogin(email, password);
  //console.log(sucessoLogin);
  if (!sucessoLogin) {
    e.preventDefault(); // previne que o form seja submetido
    alert('Insira os dados para logar!');
    return;
  }
  alert("Logou com sucesso!");
});
