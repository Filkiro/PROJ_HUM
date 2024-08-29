document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".note1, .note2, .note3");
    const overlay = document.querySelector(".overlay");

    function toggleOverlay(isExpanded) {
        if (isExpanded) {
            overlay.style.display = "block";
        } else {
            overlay.style.display = "none";
        }
    }

    function toggleExpand(id, button) {
        var box = document.getElementById(id);

        // Remove a expansão de todas as outras caixas
        boxes.forEach(function(otherBox) {
            if (otherBox !== box) {
                otherBox.classList.remove('expandida');
                otherBox.querySelector("button").textContent = 'Mostrar Mais';
            }
        });

        // Alterna a expansão da caixa atual
        const isExpanded = box.classList.toggle('expandida');
        if (isExpanded) {
            button.textContent = 'Mostrar Menos';
        } else {
            button.textContent = 'Mostrar Mais';
        }

        // Ativa/desativa o blur do fundo
        const anyBoxExpanded = Array.from(boxes).some(b => b.classList.contains("expandida"));
        toggleOverlay(anyBoxExpanded);
    }

    // Adiciona event listeners a cada botão
    boxes.forEach(box => {
        const button = box.querySelector("button");
        button.addEventListener("click", function() {
            toggleExpand(box.id, this);
        });
    });

    // Fechar caixas ao clicar na overlay
    overlay.addEventListener("click", function() {
        boxes.forEach(box => {
            box.classList.remove("expandida");
            box.querySelector("button").textContent = 'Mostrar Mais';
        });
        toggleOverlay(false);
    });
});
