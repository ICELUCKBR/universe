//Manipulation
const routes = {
  "": "/pages/home.html",
  "/": "/pages/home.html",
  "/universe": "/pages/universe.html",
  "/exploration": "/pages/exploration.html",
};

function route(event) {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handle();
}

function handle() {
  const body = document.querySelector("body");
  const links = document.querySelectorAll("menu a");

  const { pathname } = window.location; //Propriedade do caminho
  const route = routes[pathname] || routes["/"];
  console.log(pathname);
  fetch(route)
    .then((data) => data.text())
    .then((html) => {
      document.querySelector("#app").innerHTML = html;
    });

  if (pathname == "/" || "") {
    console.log("Deu certo");

    body.classList.add("home");
    body.classList.remove("universe");
    body.classList.remove("exploration");
  }
  if (pathname == "/universe") {
    body.classList.add("universe");
    body.classList.remove("home");
    body.classList.remove("exploration");
  }

  if (pathname == "/exploration") {
    body.classList.add("exploration");
    body.classList.remove("universe");
    body.classList.remove("home");
  }
}

window.onpopstate = () => handle();
window.route = () => route();
