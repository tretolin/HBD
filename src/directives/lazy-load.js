// src/directives/lazyload.js
export default {
    mounted(el) {
        const loadImage = () => {
            el.src = el.dataset.src;
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    loadImage();
                    observer.unobserve(el);
                }
            });
        });

        observer.observe(el);
    },
};
