// Getting Elements By id and class
const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".content").children;
for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    for (let j = 0; j < filterButtons.length; j++) {
      // removing active class from all li
      filterButtons[j].classList.remove("active");
    }
    // Adding Active class to li
    this.classList.add("active");
    const target = this.getAttribute("data-target");

    // Showing Active Section when click on Sidebar link
    for (k = 0; k < items.length; k++) {
      items[k].style.display = "none";
      if (target == items[k].getAttribute("data-id")) {
        items[k].style.display = "block";
      }
      if (target == "all") {
        items[k].style.display = "block";
      }
    }
  });
}

