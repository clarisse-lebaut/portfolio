// barre de navigation commune à toutes les pages
const nav = document.createElement("nav");
nav.classList.add("nav", "nav-style", "sticky-top"); // les classes ici
nav.innerHTML = `
    <a class="nav-item-style" href="../../index.html">Home</a>
    <a class="nav-item-style" href="../pages/project.html">Projets </a>
    <a class="nav-item-style" href="../pages/contact.html">Moi</a>
`;

document.body.prepend(nav); // prepend pour placer l'élément en début du body