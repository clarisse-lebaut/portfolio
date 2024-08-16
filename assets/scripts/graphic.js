document.addEventListener("DOMContentLoaded", function () {
  const imageGallery = document.getElementById("image-gallery");
  const images = [
    {
      src: "../graphic/AlbumPochetteBack.jpg",
      category: "illustration",
      description:
        "Face arrière - Pochette de l'album CD pour 'Le Métalleux Geek', conçu sur Photoshop",
    },
    {
      src: "../graphic/AlbumPochetteFace.jpg",
      category: "illustration",
      description:
        "Face avant - Pochette de l'album CD pour 'Le Métalleux Geek', conçu sur Photoshop",
    },
    {
      src: "../graphic/BD1.jpeg",
      category: "bd",
      description: "BD en 1 page - réalisé à Ynov",
    },
    {
      src: "../graphic/BDStrip.png",
      category: "bd",
      description:
        "BD en 2 pages, raconte les péripétie d'un personnage se rendant en cour - réalisé à Ynov",
    },
    {
      src: "../graphic/Capture.png",
      category: "illustrator",
      description: "Logo d'entrerpise avec Illustrator - réalisé sur commande",
    },
    {
      src: "../graphic/Logo.jpeg",
      category: "peinture",
      description: "Logo d'entrerpise avec Illustrator - réalisé sur commande",
    },
    {
      src: "../graphic/flyers.jpg",
      category: "flyer",
      description:
        "Flyer - Concert dans le cadre d'un projet de Création d'Action et de Recherche - rélaisé en licence de Musicologie",
    },
    {
      src: "../graphic/Bluecity.png",
      category: "illustrator",
      description:
        "Affiche vectoriel réalisé sur illustrator pour prendre en main les outils de perspective",
    },
    {
      src: "../graphic/illustration.jpeg",
      category: "peinture",
      description: "Illustration pour un conte pour enfants - réalisé à Ynov",
    },

    {
      src: "../graphic/Batman.png",
      category: "illustrator",
      description: "Batman minimaliste - image vectoriel conçu sur Illustrator",
    },
    {
      src: "../graphic/Superman.png",
      category: "illustrator",
      description:
        "Superman minimaliste - image vectoriel conçu sur Illustrator",
    },
    {
      src: "../graphic/GreenLantern.png",
      category: "illustrator",
      description:
        "Green Lantern minimaliste - image vectoriel conçu sur Illustrator",
    },
    {
      src: "../graphic/Flash.png",
      category: "illustrator",
      description: "Flash minimaliste -image vectoriel conçu sur Illustrator",
    },

    {
      src: "../graphic/Joker.png",
      category: "illustrator",
      description:
        "Le Joker minimaliste - image vectoriel conçu sur Illustrator",
    },
    {
      src: "../graphic/Luthor.png",
      category: "illustrator",
      description:
        "Lex Luthor minimaliste - image vectoriel conçu sur Illustrator",
    },
    {
      src: "../graphic/Sinestro.png",
      category: "illustrator",
      description:
        "Sinistro minimaliste - image vectoriel conçu sur Illustrator",
    },
    {
      src: "../graphic/thwane.png",
      category: "illustrator",
      description:
        "Négatif de Flash minimaliste - image vectoriel conçu sur Illustrator",
    },
    {
      src: "../graphic/Pastel.jpeg",
      category: "pastel",
      description:
        "Pointillisme du système solaire, travail de la pastel grasse",
    },
    {
      src: "../graphic/chaussures.png",
      category: "croquis",
      description:
        "Croquis de chaussures, travail des proportions et colorisation en design de produit - réalisé à Ynov",
    },
    {
      src: "../graphic/Sac.png",
      category: "croquis",
      description:
        "Croquis sac à dos, travail des proportions et de colorisation en design de produit - réalisé à Ynov",
    },

    {
      src: "../graphic/usb.png",
      category: "croquis",
      description:
        "Croquis clé USB, travail des proportions et de colorisation en design de produit - réalisé à Ynov",
    },
    {
      src: "../graphic/NYB.png",
      category: "illustrator",
      description:
        "Illustration vectoriel sur illustrator d'un bâtiment fictif - utilisation des outils de perspective",
    },
    {
      src: "../graphic/oiseau.jpeg",
      category: "crayon",
      description:
        "Crayonnage Cygne, travail de l'ombrage et des relfets - réalisé sur commande",
    },
    {
      src: "../graphic/Zoro.jpeg",
      category: "crayon",
      description: "Crayonnage personnage Zoro - travail de l'ombrage",
    },
    {
      src: "../graphic/Luffy.jpeg",
      category: "crayon",
      description: "Crayonnage personnage Luffy - travail de l'ombrage",
    },
    {
      src: "../graphic/Luffy2.jpeg",
      category: "crayon",
      description: "Crayonnage personnage Luffy - travail de l'ombrage",
    },
    {
      src: "../graphic/Natsu.jpeg",
      category: "crayon",
      description: "Crayonnage personnage Natsu - travail de l'ombrage",
    },
    {
      src: "../graphic/Aquarelle.jpeg",
      category: "aquarelle",
      description:
        "Colorisation d'un pikachu aviateur - travail de l'aquarelle",
    },
    {
      src: "../graphic/Picsou.jpeg",
      category: "feutre",
      description: "Colorisation de Picsou - travail du feutre",
    },
    {
      src: "../graphic/Cygne.jpg",
      category: "bombe",
      description:
        "Travail au spray, gestion des couloirs et manipulation des pochoirs",
    },
    {
      src: "../graphic/Univers2.jpeg",
      category: "bombe",
      description:
        "Travail au spray, gestion des couloirs et manipulation des pochoirs",
    },
    {
      src: "../graphic/Univers3.jpeg",
      category: "peinture",
      description:
        "Travail de la peinture acrylique et de la texture avec des éponges",
    },
    {
      src: "../graphic/Univers4.jpeg",
      category: "peinture",
      description:
        "Travail de la peinture acrylique et de la texture avec des éponges",
    },
    {
      src: "../graphic/Univers5.jpeg",
      category: "peinture",
      description:
        "Travail de la peinture acrylique et de la texture avec des éponges",
    },
    {
      src: "../graphic/mignion.jpg",
      category: "peinture",
      description:
        "Illustration, travail de la peinture acrylique - réalisé sur demande",
    },

    {
      src: "../graphic/Anarchie.jpg",
      category: "peinture",
      description: "Illustration, thème de l'anarchie - réalisé sur demande",
    },
    {
      src: "../graphic/Savane.jpg",
      category: "peinture",
      description:
        "Travail de la peinture acrylique, cercle crhomatique et travail de dégradé",
    },
    {
      src: "../graphic/baymax.jpg",
      category: "peinture",
      description:
        "Baymax, travail des couleurs associé avec une émotion, création d'un élement amovible afin de les positionnée dans l'odre souhaité (scotch/scrath placé sur les 4 rebords des toiles)",
    },
    {
      src: "../graphic/Anarchie.jpg",
      category: "portrait",
      description: "Anarchie",
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
        description.textContent = image.description;

        container.appendChild(img);
        container.appendChild(description);
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
