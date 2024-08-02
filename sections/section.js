function goToPage(page) {
    window.location.href = page;
}
// -------------------
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.navbar ul').classList.toggle('showing');
});

function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}