document.addEventListener("DOMContentLoaded", function () {
  const audioGallery = document.getElementById("audio-gallery");

  const cards = [
    {
      title: "My beast of Deep",
      audio: "../../assets/music/sound/deep.mp3",
      type: "Paroles",
      plateforme: "Suno",
    },
    {
      title: "Face à ce désert",
      format: "Audio",
      audio: "../../assets/music/sound/desert.mp3",
      type: "Paroles",
      plateforme: "Suno",
    },
    {
      title: "Une jeunesse à moi",
      format: "Audio",
      audio: "../../assets/music/sound/passé.mp3",
      type: "Paroles",
      plateforme: "Suno",
    },
    {
      title: "Sample Start",
      format: "Audio",
      audio: "../../assets/music/sound/sample1.mp3",
      type: "Instrumental",
      plateforme: "Garageband",
    },
    {
      title: "Sample To Continue",
      format: "Audio",
      audio: "../../assets/music/sound/sample2.mp3",
      type: "Instrumental",
      plateforme: "Garageband",
    },
    {
      title: "Sample to Be",
      format: "Audio",
      audio: "../../assets/music/sound/sample5.mp3",
      type: "Instrumental",
      plateforme: "Garageband",
    },
    {
      title: "Mélancholie",
      format: "Audio",
      audio: "../../assets/music/sound/Mélancholie.mp3",
      type: "Instrumental",
      plateforme: "Garageband",
    },
    {
      title: "Angry Christmas",
      format: "Audio",
      audio: "../../assets/music/sound/christmas.mp3",
      type: "Instrumental",
      plateforme: "Garageband",
    },
    {
      title: "Quand le diable danse",
      format: "Audio",
      audio: "../../assets/music/sound/devil.mp3",
      type: "Instrumental",
      plateforme: "Garageband",
    },
    {
      title: "Aurevoir",
      format: "Audio",
      audio: "../../assets/music/sound/l1.mp3",
      type: "Instrumental",
      plateforme: "Garageband",
    },
    {
      title: "Hauted House",
      format: "Image",
      img1: "../../assets/music/pictures/hanté.png",
      audio: "../../assets/music/sound/hanté.mp3",
      type: "Instrumental",
      plateforme: "Musescore",
    },
    {
      title: "Come Back",
      format: "Image",
      img1: "../../assets/music/pictures/find1.png",
      img2: "../../assets/music/pictures/find3.png",
      audio: "../../assets/music/sound/Retrouvé.mp3",
      type: "Instrumental",
      plateforme: "Musescore",
    },
    {
      title: "Le rythme au trippes",
      format: "Image",
      img1: "../../assets/music/pictures/basse1.png",
      img2: "../../assets/music/pictures/basse2.png",
      audio: "../../assets/music/sound/bass.mp3",
      type: "Instrumental",
      plateforme: "Musescore",
    },
    {
      title: "SuperHero Theme",
      description:
        "Application musicale, enregistrement des Bandes Oringales via le logicial Garageband - réalisé en Licence Musicologie",
      format: "Image",
      img1: "../../assets/music/pictures/hero1.png",
      video: "../../assets/music/video/hero.mp4",
      type: "Application",
      plateforme: "MaxMsp",
    },
    {
      title: "Métro, Boulot, Dodo",
      format: "Image",
      img1: "../../assets/music/pictures/partitiongraphique1.png",
      img2: "../../assets/music/pictures/partitiongraphique2.png",
      img3: "../../assets/music/pictures/partitiongraphique3.png",
      img4: "../../assets/music/pictures/partitiongraphique4.png",
      description:
        "Partition graphique à but pédagogique, s'inspirant des réalisations de Cathy Berberian",
      type: "Graphique",
      plateforme: "Photoshop",
    },
    {
      title: "Minimalisme musical",
      format: "Image",
      img1: "../../assets/music/pictures/451.png",
      img2: "../../assets/music/pictures/452.png",
      img3: "../../assets/music/pictures/453.png",
      img4: "../../assets/music/pictures/454.png",
      audio: "../../assets/music/sound/mini.mp3",
      type: "Instrumental",
      plateforme: "Musescore",
    },
    {
      title: "Composer le monde",
      format: "Image",
      img1: "../../assets/music/pictures/monde1.png",
      img2: "../../assets/music/pictures/monde2.png",
      img3: "../../assets/music/pictures/monde3.png",
      audio: "../../assets/music/sound/l3.mp3",
      type: "Instrumental",
      plateforme: "Musescore",
    },
    {
      title: "Comptine musicale",
      description:
        "Application musicale, lecteur de comptine, cette application à pour but de senesibliser à la découverte des notes de musique - réalisé en Licence Musicologie",
      format: "Image",
      img1: "../../assets/music/pictures/comptine1.png",
      img2: "../../assets/music/pictures/comptine2.png",
      img3: "../../assets/music/pictures/comptine5.png",
      video: "../../assets/music/video/comptine.mp4",
      type: "Application",
      plateforme: "MaxMsp",
    },
  ];

  function displayItems(typeFilter, plateformeFilter) {
    audioGallery.innerHTML = "";

    cards.forEach((card) => {
      const typeMatches = typeFilter === "all" || card.type === typeFilter;
      const plateformeMatches =
        plateformeFilter === "all" || card.plateforme === plateformeFilter;

      if (typeMatches && plateformeMatches) {
        const container = document.createElement("div");
        container.className = `gallery-item ${card.type || card.format}`;

        // Title in top
        const title = document.createElement("h4");
        title.className = "gallery-title";
        title.textContent = card.title;
        container.appendChild(title);

        // If picture here --> display
        if (card.img1 || card.img2 || card.img3 || card.img4) {
          const imageContainer = document.createElement("div");
          imageContainer.className = "gallery-images";

          [card.img1, card.img2, card.img3, card.img4].forEach((imgSrc) => {
            if (imgSrc) {
              const imgElement = document.createElement("img");
              imgElement.src = imgSrc;
              imgElement.className = "gallery-image";
              imageContainer.appendChild(imgElement);
            }
          });

          container.appendChild(imageContainer);
        }

        // If video here --> display
        if (card.video) {
          const videoElement = document.createElement("video");
          videoElement.controls = true;
          videoElement.src = card.video;
          videoElement.className = "gallery-video";
          container.appendChild(videoElement);
        }

        // If audio here --> display
        if (card.audio) {
          const audioElement = document.createElement("audio");
          audioElement.controls = true;
          audioElement.src = card.audio;
          audioElement.className = "gallery-audio";

          audioElement.addEventListener("play", function () {
            stopAllAudiosExceptThis(audioElement);
          });

          container.appendChild(audioElement);
        }

        if (card.description) {
          const description = document.createElement("p");
          description.className = "gallery-description";
          description.textContent = card.description;
          container.appendChild(description);
        }

        if (card.plateforme) {
          const plateforme = document.createElement("p");
          plateforme.className = "gallery-plateforme";
          plateforme.textContent = `Plateforme: ${card.plateforme}`;
          container.appendChild(plateforme);
        }

        audioGallery.appendChild(container);
      }
    });
  }

  function stopAllAudiosExceptThis(currentAudio) {
    const allAudios = document.querySelectorAll("audio");
    allAudios.forEach((audio) => {
      if (audio !== currentAudio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
  }

  displayItems("all", "all");

  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const filterValue = this.dataset.filter;
      const filterType = this.parentElement.querySelector("h3").innerText;
      const activeFilterButton = document.querySelector(".filter-btn.active");

      if (activeFilterButton) {
        activeFilterButton.classList.remove("active");
      }

      this.classList.add("active");

      if (filterType === "Type de Chanson") {
        displayItems(
          filterValue,
          document.querySelector(".filter-btn[data-filter-platform].active")
            ?.dataset.filter || "all"
        );
      } else if (filterType === "Plateforme") {
        displayItems(
          document.querySelector(".filter-btn[data-filter-type].active")
            ?.dataset.filter || "all",
          filterValue
        );
      }
    });
  });

  document
    .getElementById("filter-type-select")
    .addEventListener("change", function () {
      const typeFilter = this.value;
      const plateformeFilter = document.getElementById(
        "filter-platform-select"
      ).value;
      displayItems(typeFilter, plateformeFilter);
    });

  document
    .getElementById("filter-platform-select")
    .addEventListener("change", function () {
      const typeFilter = document.getElementById("filter-type-select").value;
      const plateformeFilter = this.value;
      displayItems(typeFilter, plateformeFilter);
    });
});
