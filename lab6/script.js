async function getPerson() {
    const response = await fetch('https://randomuser.me/api/');

    const { results: [person] } = await response.json();

    return {
        imageLink: person.picture.large,
        email: person.email,
        name: `${person.name.first} ${person.name.last}`,
        phone: person.phone,
        city: person.location.city,
    };
};

document.querySelector('.downloadBtn').addEventListener('click', async (event) => {
    event.target.disabled = true;

    const { imageLink, email, name, phone, city } = await getPerson();
    const card = document.createElement('div');

    card.classList.add('card');

    card.innerHTML = `
        <img class="card-image" src="${imageLink}" alt="card-image">
        <div class="card-text">Email:&nbsp;<span>${email}</span></div>
        <div class="card-text">Name:&nbsp;<span>${name}</span></div>
        <div class="card-text">Phone:&nbsp;<span>${phone}</span></div>
        <div class="card-text">City:&nbsp;<span>${city}</span></div>
    `
    document.querySelector('.cards').append(card);

    event.target.disabled = false;
});