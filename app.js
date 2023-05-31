'use-strict';

const addBtn = document.querySelector('.add-btn');
const removeBtn = document.querySelector('.remove-btn')
const modal = document.querySelector('.modal-cont');
const mainContainer = document.querySelector('.main-cont');
const textArea = document.querySelector('.text-area-cont');
const priorityCardsModal = document.querySelectorAll('.priority-color');
const priorityCardsToolbox = document.querySelectorAll('.color');




let allTickets;
let selectedCard = 'lightred';



//OPEN - modal CLOSE - tickets
addBtn.addEventListener('click', function () {
    modal.classList.remove('hidden');
    mainContainer.classList.add('hidden');
});

//CLOSE - modal OPEN - tickets
removeBtn.addEventListener('click', function () {
    modal.classList.add('hidden');
    mainContainer.classList.remove('hidden');
});

//make priority-cards inactive when not clicked
const makeInactive = function () {
    priorityCardsModal.forEach((card) => {
        card.classList.remove('active');
    })
};

//make priority-cards active on click
priorityCardsModal.forEach((card) => {
    card.addEventListener('click', function () {
        makeInactive();
        card.classList.add('active');
        selectedCard = card.classList[0];
    })
});


const priorityMessage = function () {
    if (selectedCard === 'lightpink')
        return 'Assigned';
    else if (selectedCard === 'lightgreen')
        return 'Working';
    else if (selectedCard === 'lightblue')
        return 'Complete';
    else if (selectedCard === 'beige')
        return 'Closed';

}
const createTicket = function () {

    const ticketContainer = document.createElement('div');
    ticketContainer.classList.add('ticket-cont');
    ticketContainer.innerHTML = `<div class="ticket-color ${selectedCard} ">${priorityMessage()}</div>
    <div class="ticket-id"><li>ID  ${shortid()}</li></div>
    <div class="task-area">${textArea.value}</div>`;
    ticketContainer.classList.add(`${selectedCard}-border`);
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

//filter tickets by color
priorityCardsToolbox.forEach((card) => {
    card.addEventListener('click', () => {
        console.log(`${card.classList[0]} color has been selected!`);
        const tickets = document.querySelectorAll('.ticket-cont');
        tickets.forEach((ticket) => {
            ticket.classList.remove('hidden');
            if (!ticket.classList[1].includes(card.classList[0])) {
                ticket.classList.add('hidden');
            }
        })

    })
})






