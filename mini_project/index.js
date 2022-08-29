

let divMain = document.getElementsByClassName('main')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            div.classList.add('userCard');
            let h2 = document.createElement('h2');
            h2.innerText = `${user.id} ${user.name}`;
            let a = document.createElement('a');
            a.href = `user-details.html?id=${user.id}`;
            a.innerHTML = '<button type="button">User details</button>';
            div.append(h2,a);
            divMain.appendChild(div);
        }
    });
