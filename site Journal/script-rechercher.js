// script.js
document.getElementById("search-input").addEventListener("input", function() {
    const searchValue = this.value.trim();
    const suggestsContainer = document.querySelector(".container-suggests");

    // Affiche ou masque les suggestions selon la présence de texte
    suggestsContainer.style.display = searchValue ? "flex" : "none";
});

document.getElementById("search-button").addEventListener("click", function() {
    const firstSuggest = document.querySelector(".suggest");

    if (firstSuggest) {
        // Retire la classe 'highlight' des autres suggestions
        document.querySelectorAll(".suggest").forEach(suggest => {
            suggest.classList.remove("highlight");
        });
        // Ajoute la classe 'highlight' à la première suggestion
        firstSuggest.classList.add("highlight");
    }
});
