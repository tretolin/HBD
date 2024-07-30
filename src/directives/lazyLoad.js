document.addEventListener("DOMContentLoaded", function () {
    const lazyLoadImages = () => {
        const lazyImages = document.querySelectorAll("img[data-src]");

        if ("IntersectionObserver" in window) {
            let lazyImageObserver = new IntersectionObserver(function (
                entries,
                observer
            ) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        let lazyImage = entry.target;
                        lazyImage.src = lazyImage.getAttribute("data-src");
                        lazyImage.classList.add("visible");
                        lazyImage.removeAttribute("data-src");
                        lazyImageObserver.unobserve(lazyImage);
                    }
                });
            });

            lazyImages.forEach(function (lazyImage) {
                lazyImageObserver.observe(lazyImage);
            });
        } else {
            // Fallback for browsers that don't support IntersectionObserver
            lazyImages.forEach(function (lazyImage) {
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.removeAttribute("data-src");
            });
        }
    };

    // Load images on initial load
    lazyLoadImages();

    // Export function to be used in other modules
    window.lazyLoadImages = lazyLoadImages;
});