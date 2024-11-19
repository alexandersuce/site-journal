// Animation du bouton sur la page d'accueil
document.querySelector('.btn').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});

document.querySelector('.btn').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

// Animation des articles (légère élévation au survol)
document.querySelectorAll('.article').forEach(function(article) {
    article.addEventListener('mouseover', function() {
        this.style.boxShadow = '0px 10px 20px rgba(0, 0, 0, 0.2)';
    });
    article.addEventListener('mouseout', function() {
        this.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
    });
});
