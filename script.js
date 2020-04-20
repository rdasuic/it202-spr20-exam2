fetch('https://randomuser.me/api/')
    .then(resp => resp.json())
    .then(data => {
        let name = data.results[0].name;
        let nation = data.results[0].nat;
        let email = data.results[0].email;
        let userId = data.results[0].id.name;
        let birth = data.results[0].dob.date;
        let userImage = data.results[0].picture.large;
        let imgLink = data.results[0].picture.medium;
        document.querySelector('#nation-email').textContent = `${nation} - ${email}`;
        document.querySelector('#image').src = userImage;
        document.querySelector('#name').textContent = name.first;
        document.querySelector("#pic-button").addEventListener('click', () => {
           window.open(imgLink, "_blank"); 
        });
    });