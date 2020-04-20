fetch('https://randomuser.me/api/')
    .then(resp => resp.json())
    .then(data => {
        let name = data.results[0].name;
    
        console.log(data.results[0].name);
    });