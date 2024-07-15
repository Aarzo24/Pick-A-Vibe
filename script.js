document.addEventListener('DOMContentLoaded', function() {
    const text = "Vibe with Myntra <3";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            document.getElementById("animated-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 150); // Adjust typing speed here
        }
    }

    window.onload = typeText;
});