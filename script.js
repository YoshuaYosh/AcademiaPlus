document.addEventListener("DOMContentLoaded", function () {
    console.log("Script chargé avec succès !");

    // ✅ 1. MENU RESPONSIVE
    const menuToggle = document.createElement("button");
    menuToggle.innerHTML = "☰ Menu";
    menuToggle.classList.add("menu-toggle");
    document.querySelector("header").prepend(menuToggle);

    const navLinks = document.querySelector(".nav-links");
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // ✅ 2. ANIMATION HERO AU CHARGEMENT
    const heroText = document.querySelector(".hero-content");
    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(20px)";

    setTimeout(() => {
        heroText.style.transition = "all 1s ease-out";
        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0)";
    }, 500);

    // ✅ 3. ANIMATION AU SURVOL DES CARTES
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
        });
    });

    // ✅ 4. VALIDATION FORMULAIRE DE RECHERCHE
    const searchForm = document.querySelector(".search-bar");
    if (searchForm) {
        searchForm.addEventListener("submit", (e) => {
            const searchInput = searchForm.querySelector("input[name='q']");
            if (searchInput.value.trim() === "") {
                e.preventDefault();
                alert("Veuillez entrer un terme de recherche !");
            }
        });
    }
});