const tourItems = document.querySelectorAll(".tour-item");
const previewImg = document.getElementById("previewImg");
const previewTitle = document.getElementById("previewTitle");

tourItems.forEach(item => {

    item.addEventListener("click", function () {

        // Remove Active
        tourItems.forEach(i => i.classList.remove("active"));

        // Active Item
        this.classList.add("active");

        // Get Data
        const image = this.dataset.image;
        const title = this.dataset.title;

        // Fade Animation
        previewImg.classList.add("fade");

        setTimeout(() => {

            previewImg.src = image;
            previewTitle.textContent = title;

            previewImg.classList.remove("fade");

        }, 250);

    });

});