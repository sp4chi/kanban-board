'use-strict';

const addBtn = document.querySelector('.add-btn');
const removeBtn = document.querySelector('.remove-btn')
const modal = document.querySelector('.modal-cont');
const mainContainer = document.querySelector('.main-cont')



addBtn.addEventListener('click', function () {
    modal.classList.remove('hidden');

});

removeBtn.addEventListener('click', function () {
    modal.classList.add('hidden');

});


const createTicker = function () {
    const ticketContainer = document.createElement('div');
    ticketContainer.classList.add('ticket-cont');
    ticketContainer.innerHTML = `<div class="ticket-color"></div>
    <div class="ticket-id">99999</div>
    <div class="task-area">Fixing CSS bugs</div>`;

    mainContainer.appendChild(ticketContainer);
}

modal.addEventListener('keydown', function (e) {
    const key = e.key;
    if (key === 'Shift') {
        createTicker();

    }

})