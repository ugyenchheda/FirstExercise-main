
document.getElementById('currentYear').innerText = new Date().getFullYear();
document.addEventListener('DOMContentLoaded', function() {
    var descriptionParagraph = document.getElementById('description');
    var actionButton = document.getElementById('actionButton');

    actionButton.addEventListener('click', function() {
        toggleVisibility(descriptionParagraph);
        toggleButtonText(actionButton);
    });

    document.getElementById('currentYear').innerText = new Date().getFullYear();
});

function toggleVisibility(element) {
    element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
}

function toggleButtonText(button) {
    button.innerText = (button.innerText === "Hide Text") ? "Show Text" : "Hide Text";
}

document.getElementById('description').style.display = 'block';
