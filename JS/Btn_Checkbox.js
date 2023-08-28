const checkbox = document.getElementById("card_checkbox");
const btn_content = document.getElementById("btn_content");

function checkboxHandler() {
    if (checkbox.checked) {
        const summa = document.getElementById("summa").textContent;
        btn_content.textContent = `Оплатить ${summa} сом`;
        return btn_content.textContent;
    }
    else if (checkbox.checked != true) {
        return btn_content.textContent = 'Заказать';
    }
}

checkbox.addEventListener('change', checkboxHandler);
