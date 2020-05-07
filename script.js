const url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
const roomList = document.getElementById('room-list');

function createCard (room) {
    
    let roomType = document.createElement('span');
    roomType.className = 'type';
    roomType.innerHTML = room.property_type;
    
    let roomName = document.createElement('h3');
    roomName.innerHTML = room.name;
    
    let roomPrice = document.createElement('span');
    roomPrice.className = 'price';
    roomPrice.innerHTML = 'R$' + room.price;

    let roomPriceWrapper = document.createElement('span');    
    roomPriceWrapper.appendChild(roomPrice);
    roomPriceWrapper.appendChild(document.createTextNode('/noite'));
    
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardBody.appendChild(roomType);
    cardBody.appendChild(roomName);
    cardBody.appendChild(roomPriceWrapper);
    
    let roomPhoto = document.createElement('img');
    roomPhoto.src = room.photo;

    let card = document.createElement('div');
    card.className = 'card';
    card.appendChild(roomPhoto);
    card.appendChild(cardBody);

    roomList.appendChild(card);
}

fetch(url)
    .then(res => res.json())
    .then(rooms => {
        rooms.forEach(room => {
            createCard(room);
        });
    })
    .catch(error => {
        console.log("Erro ao buscar dados no sistema!");
        console.log(error);
    });