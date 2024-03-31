document.addEventListener("DOMContentLoaded", function() {
    const kapcsolatGomb = document.getElementById('kapcsolatGomb');
    const kapcsolatLeiras = document.getElementById('kapcsolatLeiras');

    kapcsolatGomb.addEventListener('click', function() {
        if (kapcsolatLeiras.style.display === 'none' || kapcsolatLeiras.style.display === '') {
            kapcsolatLeiras.style.display = 'block';
        } else {
            kapcsolatLeiras.style.display = 'none';
        }
    });

    const socialmediaGomb = document.getElementById('socialmediaGomb');
    const megjelenoLinkek = document.getElementById('megjelenoLinkek');
    
    socialmediaGomb.addEventListener('click', function() {
        if (megjelenoLinkek.style.display === 'none' || megjelenoLinkek.style.display === '') {
            megjelenoLinkek.style.display = 'block';
        } else {
            megjelenoLinkek.style.display = 'none';
        }
    });
});