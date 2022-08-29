

let url = new URL(location.href);
console.log(url);
let id = url.searchParams.get('id');
console.log(id);

let divPost = document.getElementsByClassName('post')[0];

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(resp => resp.json())
    .then(post => {
        for (const key in post) {
            let p = document.createElement('p');
            p.innerText = key + " : " + post[key] ;
            divPost.appendChild(p);
        }
    });

let divComents = document.getElementsByClassName('coments')[0];

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(resp => resp.json())
    .then(coments => {
        for (const coment of coments) {
            let comentCard = document.createElement('div');
            comentCard.classList.add('comentCard');
            for(const key in coment) {
                let p = document.createElement('p');
                p.innerText = key + " : " + coment[key] ;
                comentCard.appendChild(p);
            }
            divComents.appendChild(comentCard)
        }
    });
