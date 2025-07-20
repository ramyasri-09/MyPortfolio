document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll (only applies to internal links starting with #)
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href.startsWith("#")) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Fade-in on Scroll (optional)
    const sections = document.querySelectorAll(".section");
    function fadeInOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();

    // Word-by-word animation
    const aboutParagraph = "I am a passionate Computer Science student specializing in AI, Machine Learning, and Web Development. I enjoy working on innovative projects that combine technology and creativity.";
    const aboutTextElement = document.getElementById("aboutText");
    const words = aboutParagraph.split(" ");
    let index = 0;

    function revealWords() {
        if (index < words.length) {
            aboutTextElement.innerHTML += words[index] + " ";
            index++;
            setTimeout(revealWords, 200); // Speed in ms
        }
    }

    revealWords();
});
