// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

document.getElementById("name-input").addEventListener("input", function(event){
    const input = event.target.value.trim();
    const output = document.getElementById("name-output");
    output.textContent = input === "" ? "Anonymous" : input;
})