const CV = fetch("./data/CV.json"); // Récupération du fichier JSON
CV.then((response) => response.json()) // Conversion de la réponse en JSON
  .then((data) => {
    console.log(data);
    generatePage(data);
    generateNav(data);
  })
  .catch((error) => console.error("Error fetching CV:", error)); // Gestion des erreurs

console.log(CV); // Affichage de la promesse

function generatePage(cvData) {
  const container = document.getElementById("cv-content");

  cvData.sections.forEach((section) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("CV-section");
    sectionDiv.id = section.title;

    const title = document.createElement("h2");
    title.innerHTML = `${section.icon} ${section.title}`;
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
          if (item.name && item.niveau) {
            const stars = "⭐".repeat(item.niveau);
            const circles = "⚫".repeat(5 - item.niveau);
            li.innerHTML = `${item.name} <span class="stars">${stars}${circles}</span>`;
          } else {
            li.textContent = item;
          }
          ul.appendChild(li);
        });
        subTitle.appendChild(ul);
      });
    }

    container.appendChild(sectionDiv);
  });
}
function generateNav(cvData) {
  const nav = document.getElementById("cv-nav");
  const navul = document.createElement("ul");
  nav.appendChild(navul);

  cvData.sections.forEach((section) => {
    const navItem = document.createElement("li");
    const navlink = document.createElement("a");
    navlink.href = `#${section.title}`;
    navlink.textContent = `${section.title}`;
    navItem.appendChild(navlink);
    navul.appendChild(navItem);
  });
}
