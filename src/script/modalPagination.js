const modals = [
  {
    id: "MatchaTea",
    images: [
      "../../assets/img/byprojects/MatchaTea2.png",
      "../../assets/img/byprojects/MatchaTeaHome.png",
    ],
  },
  {
    id: "WatchMe",
    images: [
      "../../assets/img/byprojects/MatchaTea2.png",
      "../../assets/img/byprojects/MatchaTeaHome.png",
    ],
  },
  {
    id: "Clicker",
    images: [
      "../../assets/img/byprojects/MatchaTea2.png",
      "../../assets/img/byprojects/MatchaTeaHome.png",
    ],
  },
  // ...
];

document.addEventListener("DOMContentLoaded", () => {
  modals.forEach((modal) => {
    const modalElement = document.querySelector(`#${modal.id}`);
    const modalBody = modalElement.querySelector(".modal-body");
    const prevBtn = modalElement.querySelector(".prev-btn");
    const nextBtn = modalElement.querySelector(".next-btn");

    // Ajouter les images au modal
    modal.images.forEach((image) => {
      const imgElement = document.createElement("img");
      imgElement.src = image;
      imgElement.classList.add("img-fluid");
      modalBody.appendChild(imgElement);
    });

    // Cacher toutes les images sauf la première
    const images = modalBody.querySelectorAll("img");
    for (let i = 1; i < images.length; i++) {
      images[i].style.display = "none";
    }

    // Ajouter les événements aux boutons Précédent et Suivant
    let currentIndex = 0;
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + images.length) % images.length;
      updateModalImage();
      console.log("clique");
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex) % images.length;
      updateModalImage();
      console.log("clique encore");
    });

    function updateModalImage() {
      // Cacher l'image actuelle
      images[currentIndex].style.display = "none";

      // Mettre à jour l'index de l'image à afficher
      currentIndex = (currentIndex + 1) % images.length;

      // Afficher la nouvelle image
      images[currentIndex].style.display = "block";
    }
  });
});
