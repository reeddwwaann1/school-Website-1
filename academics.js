function toggleDropdown() {
    var dropdown = document.getElementById("academicsDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", function(event) {
    var dropdown = document.getElementById("academicsDropdown");
    var dropdownToggle = document.querySelector(".dropdown-toggle");

    if (!dropdown.contains(event.target) && event.target !== dropdownToggle) {
        dropdown.style.display = "none";
    }
});
