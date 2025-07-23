const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

function changeTheme(){
  const currentTheme = rootHtml.getAttribute("data-theme");

  currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark")

  toggleTheme.classList.toggle("bi-sun")
  toggleTheme.classList.toggle("bi-moon-stars")
}

toggleTheme.addEventListener("click", changeTheme);

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
  })
})

menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  })
})

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section.projects");

  // Inicialmente, ocultar a segunda e terceira seções
  sections.forEach((section, index) => {
    if (index > 0) {
      section.style.display = "none";
      section.style.opacity = "0";
      section.style.transition = "opacity 2s ease";
    }
  });

  // Adicionar eventos de clique aos botões com IDs específicos
  document.getElementById("btn-section-1").addEventListener("click", (event) => {
    event.preventDefault();
    const nextSection = sections[1];
    nextSection.style.display = "block";
    setTimeout(() => {
      nextSection.style.opacity = "1";
    }, 10); // Pequeno atraso para ativar a transição
    event.target.style.display = "none";
  });

  document.getElementById("btn-section-2").addEventListener("click", (event) => {
    event.preventDefault();
    const nextSection = sections[2];
    nextSection.style.display = "block";
    setTimeout(() => {
      nextSection.style.opacity = "1";
    }, 10); // Pequeno atraso para ativar a transição
    event.target.style.display = "none";
  });
});