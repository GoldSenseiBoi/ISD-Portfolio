// Get all modals
var modals = document.getElementsByClassName("modal");

// Get all buttons that open modals
var btns = document.querySelectorAll("[id^='openModal']");

// Get all <span> elements that close the modals
var spans = document.getElementsByClassName("close");

// Function to open a modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    modal.querySelector('.modal-content').classList.add('show');
}

// Function to close a modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
    modal.querySelector('.modal-content').classList.remove('show');
}

// When the user clicks on a button, open the corresponding modal
btns.forEach(function(btn) {
    btn.onclick = function(event) {
        event.preventDefault();
        var modalId = btn.id.replace('openModal', 'myModal');
        openModal(modalId);
    };
});

// When the user clicks on <span> (x), close the corresponding modal
for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        var modalId = this.getAttribute("data-modal");
        closeModal(modalId);
    };
}

// When the user clicks anywhere outside of the modals, close the open modal
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        event.target.querySelector('.modal-content').classList.remove('show');
    }
}
