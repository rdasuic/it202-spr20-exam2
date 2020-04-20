// fetch('https://randomuser.me/api/')
//     .then(resp => resp.json())
//     .then(data => {
//         let name = data.results[0].name;
//         let nation = data.results[0].nat;
//         let email = data.results[0].email;
//         let userId = data.results[0].id.name;
//         let birth = data.results[0].dob.date;
//         let userImage = data.results[0].picture.large;
//         let imgLink = data.results[0].picture.medium;
//         document.querySelector('#nation-email').textContent = `${nation} - ${email}`;
//         document.querySelector('#image').src = userImage;
//         document.querySelector('#name').textContent = name.first;
//         document.querySelector("#pic-button").addEventListener('click', () => {
//            window.open(imgLink, "_blank"); 
//         });
//     });
fetch('https://randomuser.me/api/?results=6&gender=male&nat=au,nz')
    .then(resp => resp.json())
    .then(data => {
        data.results.map((user) => {
            let clone = document.querySelector('#card1').cloneNode(true);
            let name = user.name;
            let nation = user.nat;
            let email = user.email;
            let userId = user.id.name;
            let birth = user.dob.date;
            let userImage = user.picture.large;
            let imgLink = user.picture.medium;
            clone.querySelector('#nation-email').textContent = `${nation} - ${email}`;
            clone.querySelector('#image').src = userImage;
            clone.querySelector('#name').textContent = name.first;
            clone.querySelector('#body1').textContent = userId;
            clone.querySelector('#body2').textContent = birth;


            clone.querySelector("#pic-button").addEventListener('click', () => {
               window.open(imgLink, "_blank"); 
            });
            document.querySelector('#root').appendChild(clone);
        })
});
