fetch('https://www.reddit.com/r/memes.json')
.then(res=>res.json())
.then(res=>res.data.children)
.then(res=>res.map(post=>({
  author: post.data.author,
  link: post.data.url,
  img: post.data.thumbnail,
  title: post.data.title
})))
.then(res=>res.map(render))
.then(res=>console.log(res))

const app = document.querySelector(".app");
console.log(app);
const render = post => {
  const node = document.createElement('div');
  node.innerHTML = `
    <img class ="img" src="${post.link}" onerror="this.style.display='none';"/>
    `;
  app.appendChild(node);
}
