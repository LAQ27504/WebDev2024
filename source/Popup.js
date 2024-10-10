document.addEventListener('DOMContentLoaded', function() {
    // Get the popup
    var popup = document.getElementById("applyPopup");

    // Get the button that opens the popup
    var btn = document.getElementById("applyBtn");

    // Get the <span> element that closes the popup
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the popup
    if (btn) {
        btn.onclick = function() {
            popup.classList.add('show');
            popup.style.display = "block";
        }
    }

    // When the user clicks on <span> (x), close the popup
    if (span) {
        span.onclick = function() {
            popup.classList.remove('show');
            setTimeout(() => {
                popup.style.display = "none";
            }, 300);
        }
    }

    // When the user clicks anywhere outside of the popup, close it
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.classList.remove('show');
            setTimeout(() => {
                popup.style.display = "none"; 
            }, 300);
        }
    }
});
