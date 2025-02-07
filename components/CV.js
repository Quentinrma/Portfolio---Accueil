
const Header = document.createElement("header");
Header.innerHTML = `<img
      draggable="false"
      src="https://avatars.githubusercontent.com/u/165953054?v=4"
      alt=""
    />
    <nav id="nav">
      <ul>
        <li><a href="../index.html">Accueil</a></li>
        <li><a href="../pages/CV.html">CV</a></li>
      </ul>
    </nav>`;
document.body.appendChild(Header);

const CV = fetch("../components/CV.json"); // Récupération du fichier JSON
CV.then((response) => response.json()) // Conversion de la réponse en JSON
  .then((data) => {
    console.log(data);
    generatePage(data);
  })
  .catch((error) => console.error("Error fetching CV:", error)); // Gestion des erreurs
console.log(CV); // Affichage de la promesse

function generatePage(cvData) {
  // Fonction pour générer le contenu du CV
  const container = document.getElementById("cv-content");

  cvData.sections.forEach((section) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("CV-section");

    const title = document.createElement("h2");
    title.innerHTML = `${section.icon} ${section.title}`;
    sectionDiv.id = section.title;
    sectionDiv.appendChild(title);

    if (section.items) {
      const ul = document.createElement("ul");
      section.items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });

      sectionDiv.appendChild(ul);
    }

    if (section.subSections) {
      const divUl = document.createElement("div");
      divUl.classList.add("grid");

      sectionDiv.appendChild(divUl);
      section.subSections.forEach((subSection) => {
        const divsubTitle = document.createElement("div");
        divUl.appendChild(divsubTitle);
        const subTitle = document.createElement("h3");
        subTitle.textContent = subSection.subTitle;

        divsubTitle.appendChild(subTitle);

        const ul = document.createElement("ul");
        subSection.items.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          ul.appendChild(li);
        });

        subTitle.appendChild(ul);
      });
    }

    container.appendChild(sectionDiv);
  });
}

function generateNav(cvData) {
  // Fonction pour générer la navigation du CV
  const nav = document.getElementById("cv-nav");
  const navul = document.createElement("ul"); // Récupération de l'élément HTML
  nav.appendChild(navul);
  cvData.sections.forEach((section) => {
    const navItem = document.createElement("li"); // Création d'un élément de liste
    const navlink = document.createElement("a"); // Création d'un lien
    navItem.appendChild(navlink);
    navlink.href = `#${section.title}`; // Ajout de l'attribut href
    navlink.textContent = section.icon + "   " + section.title; // Ajout du texte

    navul.appendChild(navItem); // Ajout de l'élément dans la navigation
  });
}
document.addEventListener("DOMContentLoaded", () => {
  fetch("../components/CV.json")
    .then((response) => response.json())
    .then((data) => {
      generatePage(data);
      generateNav(data);
    })
    .catch((error) => console.error("Error fetching CV:", error));
});
