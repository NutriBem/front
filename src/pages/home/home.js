document.addEventListener("DOMContentLoaded", function () {
    const botoes = document.querySelectorAll(".toggle-btn");

    botoes.forEach((btn) => {
        btn.addEventListener("click", function () {
            const info = this.parentElement.nextElementSibling;
            info.classList.toggle("ativo");
            this.textContent = info.classList.contains("ativo") ? "-" : "+";
        });
    });
});