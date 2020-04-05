let getPosts = async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    createPost(data);
}

let createPost = (data) => {
    const list = document.getElementById('list');
    for(i=0;i < 10; i++){
        let div = document.createElement('div')
        div.innerText = data[i].title;
        div.classList.add('post');
        list.append(div);
    }
}


document.querySelector('.btn').addEventListener('click', getPosts);
