



let url = new URL(location.href);
console.log(url);
let id = url.searchParams.get('id');
console.log(id);

let divUser = document.getElementsByClassName('user')[0];

fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp => resp.json())
    .then(user => {
        for (const key in user) {
            let userKey = JSON.stringify(user[key]);
            userKey = userKey.replaceAll('"', ' ');
            userKey = userKey.replaceAll('{', ' ');
            userKey = userKey.replaceAll('}', ' ');
            let p = document.createElement('p');
            p.innerText = key + " : " + userKey;
            divUser.appendChild(p);
        }
    });


let divPosts = document.getElementsByClassName('posts')[0];

fetch(`http://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(resp => resp.json())
    .then(posts => {
        const button = document.createElement('button');
        button.innerText = 'post of current user'
        button.classList.add('button');
        divPosts.appendChild(button);
        button.onclick = () => {
            let pocu = document.createElement('div');
            pocu.classList.add('pocu')
            for (const post of posts) {
                let postCard = document.createElement('div')
                postCard.classList.add('postCard')
                let p = document.createElement('p');
                p.innerText = post.title;
                let a = document.createElement('a');
                a.href = `post-details.html?id=${post.id}`;
                a.innerHTML = '<button type="button">Post details</button>';
                postCard.append(p,a);
                pocu.appendChild(postCard)
                divPosts.appendChild(pocu);
            }
        }
    });