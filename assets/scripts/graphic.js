document.addEventListener("DOMContentLoaded", function () {
  const imageGallery = document.getElementById("image-gallery");
  const images = [
    {
      src: "../graphic/AlbumPochetteBack.jpg",
      category: "logiciel",
      description: "Couverture Album CD 'Le Métalleux Geek' (face)",
      materiel: "Photoshop",
      realisation: "sur demande",
    },
    {
      src: "../graphic/AlbumPochetteFace.jpg",
      category: "logiciel",
      description: "Couverture Album CD 'Le Métalleux Geek' (dos)",
      materiel: "Photoshop",
      realisation: "sur demande",
    },
    {
      src: "../graphic/BD1.jpeg",
      category: "crayon",
      description: "BD - 1 page",
      materiel: "Crayon de couleur, scénarisation",
      realisation: "à Ynov",
    },
    {
      src: "../graphic/BDStrip.png",
      category: "crayon",
      description:
        "BD strip des péripéties d'un personnage se rendant en cour - 2 pages",
      materiel: "Crayon HB & 2B, scénarisation",
      realisation: "à Ynov",
    },
    {
      src: "../graphic/voiture.png",
      category: "logiciel",
      description: "Logo d'entrerpise",
      materiel: "Illustrator",
      realisation: "sur demande",
    },
    {
      src: "../graphic/Logo.jpeg",
      category: "peinture",
      description: "Logo d'entreprise",
      materiel: "Peinture acrylique",
      realisation: "à Ynov",
    },
    {
      src: "../graphic/flyers.jpg",
      category: "logiciel",
      description:
        "Flyer pour un concert dans le cadre d'un projet de Création d'Action et de Recherche",
      materiel: "Photoshop",
      realisation: "en Licence de Musicologie",
    },
    {
      src: "../graphic/Bluecity.png",
      category: "logiciel",
      description: "Affiche vectoriel",
      materiel: "Illustrator",
      realisation:
        "initiative personnelle\nprise en main des outils de perspective",
    },
    {
      src: "../graphic/illustration.png",
      category: "peinture",
      description: "Illustration d'un conte pour enfants ",
      materiel: "Peinture acrylique",
      realisation: "à Ynov",
    },
    {
      src: "../graphic/Batman.png",
      category: "logiciel",
      description: "Batman minimaliste",
      materiel: "Illustrator",
      realisation: "initiative personnelle\ntravail des images vectoriel",
    },
    {
      src: "../graphic/Joker.png",
      category: "logiciel",
      description: "Joker minimaliste",
      materiel: "Illustrator",
      realisation: "initiative personnelle\ntravail des images vectoriel",
    },
    {
      src: "../graphic/Superman.png",
      category: "logiciel",
      description: "Superman minimaliste",
      materiel: "Illustrator",
      realisation: "initiative personnelle\ntravail des images vectoriel",
    },
    {
      src: "../graphic/Luthor.png",
      category: "logiciel",
      description: "Lex Luthor minimaliste",
      materiel: "Illustrator",
      realisation: "initiative personnelle\ntravail des images vectoriel",
    },
    {
      src: "../graphic/Flash.png",
      category: "logiciel",
      description: "Flash minimaliste",
      materiel: "Illustrator",
      realisation: "initiative personnelle\ntravail des images vectoriel",
    },
    {
      src: "../graphic/thwane.png",
      category: "logiciel",
      description: "Reverse Flash minimaliste",
      materiel: "Illustrator",
      realisation: "initiative personnelle\ntravail des images vectoriel",
    },
    {
      src: "../graphic/Sinestro.png",
      category: "logiciel",
      description: "Sinistro minimaliste",
      materiel: "Illustrator",
      realisation: "initiative personnelle\ntravail des images vectoriel",
    },
    {
      src: "../graphic/GreenLantern.png",
      category: "logiciel",
      description: "Green Lantern minimaliste",
      materiel: "Illustrator",
      realisation: "initiative personnelle\ntravail des images vectoriel",
    },
    {
      src: "../graphic/Pastel.jpeg",
      category: "pastel",
      description: "Pointillisme du système solaire",
      materiel: "Pastel grasse",
      realisation: "initiative personnelle\ntravail du pointillisme",
    },
    {
      src: "../graphic/Sac.png",
      category: "feutre",
      description: "Croquis sac à dos\nDesign de produit",
      materiel: "Crayon HB, feutres",
      realisation: "à Ynov",
    },
    {
      src: "../graphic/chaussures.png",
      category: "feutre",
      description: "Croquis de chaussures\nDesign de produit",
      materiel: "Crayon HB, feutres",
      realisation: "à Ynov",
    },
    {
      src: "../graphic/usb.png",
      category: "feutre",
      description: "Croquis clé USB\nDesign de produit",
      materiel: "Crayon HB, feutres",
      realisation: "à Ynov",
    },
    {
      src: "../graphic/NYB.png",
      category: "logiciel",
      description: "Illustration vectoriel d'un bâtiment fictif",
      materiel: "Illustrator",
      realisation:
        "initiative personnelle\nutilisation des outils de perspective",
    },
    {
      src: "../graphic/oiseau.jpeg",
      category: "crayon",
      description: "Crayonnage Cygne",
      materiel: "Crayon HB, estompe",
      realisation:
        "initiative personnelle\ntravail de l'ombrage et des relfets",
    },
    {
      src: "../graphic/Zoro.jpeg",
      category: "crayon",
      description: "Crayonnage personnage Zoro",
      materiel: "Crayon HB, estompe",
      realisation: "initiative personnelle\ntravail de l'ombrage",
    },
    {
      src: "../graphic/Luffy.jpeg",
      category: "crayon",
      description: "Crayonnage personnage Luffy",
      materiel: "Crayon HB, estompe",
      realisation: "initiative personnelle\ntravail de l'ombrage",
    },
    {
      src: "../graphic/Luffy2.jpeg",
      category: "crayon",
      description: "Crayonnage personnage Luffy",
      materiel: "Crayon HB, estompe",
      realisation: "initiative personnelle\ntravail de l'ombrage",
    },
    {
      src: "../graphic/Natsu.jpeg",
      category: "crayon",
      description: "Crayonnage personnage Natsu",
      materiel: "Crayon HB, estompe",
      realisation: "initiative personnelle\ntravail de l'ombrage",
    },
    {
      src: "../graphic/Aquarelle.jpeg",
      category: "aquarelle",
      description: "Colorisation d'un pikachu aviateur",
      materiel: "Feutres, Aquarelles",
      realisation: "initiative personnelle\ntravail de l'aquarelle",
    },
    {
      src: "../graphic/Picsou.jpeg",
      category: "feutre",
      description: "Colorisation de Picsou",
      materiel: "Feutres",
      realisation: "initiative personnelle\ntravail du feutre",
    },
    {
      src: "../graphic/Cygne.jpg",
      category: "bombe",
      description:
        "Illustration 'La Princesse et le Cygne'\nColorisaiton, Manipulation de pochoirs",
      materiel: "Bombes en spray",
      realisation: "sur demande",
    },
    {
      src: "../graphic/Univers2.jpeg",
      category: "bombe",
      description: "Univers\nColorisaiton, Manipulation de pochoirs",
      materiel: "Bombes en spray",
      realisation: "initiative personnelle\ntravail de colorisation en spray",
    },
    {
      src: "../graphic/Univers3.jpeg",
      category: "peinture",
      description: "Univers : Terre VS Mars",
      materiel: "Peinture acrylique, Eponge, Carton",
      realisation:
        "initiative personnelle\ntravail des textures avec de le peinture",
    },
    {
      src: "../graphic/Univers4.jpeg",
      category: "peinture",
      description:
        "Travail de la peinture acrylique et de la texture avec des éponges",
      description: "Mer rouge à la double Lune",
      materiel: "Peinture acrylique, Eponge, Carton",
      realisation:
        "initiative personnelle\ntravail des textures avec de le peinture",
    },
    {
      src: "../graphic/Univers5.jpeg",
      category: "peinture",
      description: "Ville bleuté",
      materiel: "Peinture acrylique, Eponge, Carton",
      realisation:
        "initiative personnelle\ntravail des textures avec de le peinture",
    },
    {
      src: "../graphic/mignion.jpg",
      category: "peinture",
      description: "Illustration 'Les Mignons à Sydney'",
      materiel: "Peinture acrylique",
      realisation: "sur demande",
    },
    {
      src: "../graphic/Anarchie.jpg",
      category: "peinture",
      description: "Illustration sur le thème de l'Anarchie",
      materiel: "Peinture acrylique",
      realisation: "sur demande",
    },
    {
      src: "../graphic/Savane.jpg",
      category: "peinture",
      description: "Savane",
      materiel: "Peinture acrylique",
      realisation:
        "initiative personnelle\ntravail de degradé chromatique en peinture",
    },
    {
      src: "../graphic/baymax.jpg",
      category: "peinture",
      description: "Baymax chez Vice Versa",
      materiel:
        "Peinture acrylique, Toile, Pochoirs, Scotch/Scratch (placé sur les 4 rebords des toiles)",
      realisation:
        "initiative personnelle\ntravail des couleurs, éléments amovible",
    },
  ];
  const imagePath = "../../assets/images/";

  // Function to make appear the pictures
  function displayImages(filter) {
    imageGallery.innerHTML = "";

    images.forEach((image, index) => {
      if (filter === "all" || image.category === filter) {
        const container = document.createElement("div");
        container.className = `gallery-item ${image.category}`;

        const img = document.createElement("img");
        img.src = `${imagePath}${image.src}`;
        img.alt = `Image ${index + 1}`;
        img.className = "gallery-image";
        img.setAttribute("data-filter", image.category);

        const description = document.createElement("p");
        description.className = "gallery-description";
        description.innerHTML = image.description.replace(/\n/g, "<br>");

        const materiel = document.createElement("p");
        materiel.className = "gallery-materiel";
        materiel.innerHTML = `Matériel : ${image.materiel.replace(
          /\n/g,
          "<br>"
        )}`;

        const realisation = document.createElement("p");
        realisation.className = "gallery-realisation";
        realisation.innerHTML = `Réalisation : ${image.realisation.replace(
          /\n/g,
          "<br>"
        )}`;

        container.appendChild(img);
        container.appendChild(description);
        container.appendChild(materiel);
        container.appendChild(realisation);
        imageGallery.appendChild(container);
      }
    });
  }

  // Display all the picture in loading
  displayImages("all");

  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");
      displayImages(filter);
    });
  });

  const filterSelect = document.getElementById("filter-select");
  filterSelect.addEventListener("change", function () {
    const filter = this.value;
    displayImages(filter);
  });
});
