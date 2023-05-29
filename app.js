'use-strict';

const addBtn = document.querySelector('.add-btn');
const removeBtn = document.querySelector('.remove-btn')
const modal = document.querySelector('.modal-cont');
const mainContainer = document.querySelector('.main-cont');
const textArea = document.querySelector('.text-area-cont');
const priorityColor = document.querySelectorAll('.priority-color');



addBtn.addEventListener('click', function () {
    modal.classList.remove('hidden');
    mainContainer.classList.add('hidden');
});

removeBtn.addEventListener('click', function () {
    modal.classList.add('hidden');
    mainContainer.classList.remove('hidden');
});


const createTicket = function () {
    const ticketContainer = document.createElement('div');
    ticketContainer.classList.add('ticket-cont');
    ticketContainer.innerHTML = `<div class="ticket-color"></div>
    <div class="ticket-id"></div>
    <div class="task-area"></div>`;

    mainContainer.appendChild(ticketContainer);
    textArea.value = '';

    modal.classList.add('hidden');
    mainContainer.classList.remove('hidden');
}

modal.addEventListener('keydown', function (e) {
    if (e.getModifierState('Shift')) {
        createTicket();
    }
})