'use-strict';

const addBtn = document.querySelector('.add-btn');
const removeBtn = document.querySelector('.remove-btn');
const modal = document.querySelector('.modal-cont');
const mainContainer = document.querySelector('.main-cont');
const textArea = document.querySelector('.text-area-cont');
const priorityCardsModal = document.querySelectorAll('.priority-color');
const priorityCardsToolbox = document.querySelectorAll('.color');
const deleteBtn = document.querySelector('.remove-btn i');

const settingDelete = function () {
    setDelete = true;
    deleteBtn.classList.add('delete');
}

const unsettingDelete = function () {
    setDelete = false;
    deleteBtn.classList.add('delete');
}


let tickets;
let selectedCard = 'lightred';
let setDelete = false;

//OPEN - modal CLOSE - tickets
addBtn.addEventListener('click', function () {
    modal.classList.remove('hidden');
    mainContainer.classList.add('hidden');
    unsettingDelete();
});

//CLOSE - modal OPEN - tickets
removeBtn.addEventListener('click', function () {
    if (setDelete === true) {
        alert('Delete button has been activated!');
        settingDelete();

    } else {
        modal.classList.add('hidden');
        mainContainer.classList.remove('hidden');
        settingDelete();
        console.log('else is hit');
    }
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

//GENERATE NEW-TICKET 
const createTicket = function () {

    const ticketContainer = document.createElement('div');
    ticketContainer.classList.add('ticket-cont');
    ticketContainer.innerHTML = `<div class="ticket-color ${selectedCard} ">${priorityMessage()}</div>
    <div class="ticket-id"><li>ID  ${shortid()}</li></div>
    <div class="task-area">${textArea.value}</div>`;
    ticketContainer.classList.add(`${selectedCard}-border`);
    mainContainer.appendChild(ticketContainer);
    tickets = document.querySelectorAll('.ticket-cont');
    textArea.value = '';

    modal.classList.add('hidden');
    mainContainer.classList.remove('hidden');
}

//SHOW-ALL TICKETS
const renderTickets = function () {
    tickets.forEach((ticket) => {
        ticket.classList.remove('hidden');
    });
}

//ON PRESSING SHIFT NEW CARD IS SAVED, GENERATED AND RENDERED
modal.addEventListener('keydown', function (e) {
    if (e.getModifierState('Shift')) {
        createTicket();
        renderTickets();
        settingDelete();
    }
})

//filter tickets by color
const filterTickets = function (filterCardsColor) {

    tickets.forEach((ticket) => {
        ticket.classList.remove('hidden');
        if (!ticket.classList[1].includes(filterCardsColor)) {
            ticket.classList.add('hidden');
        }
    });
};

//ADDING-EVENT LISTENER TO ALL PRIORITY TOOLBOX CARDS
priorityCardsToolbox.forEach((card) => {
    card.addEventListener('click', () => {
        filterTickets(card.classList[0]);
    })
})






