getData1()
async function getData(){
    let search=document.getElementById('search');
   console.log(search.value);
   const res=await fetch(`https://api.github.com/search/users?q=${search.value}`);
   const data=await res.json();
   console.log(data.items[0].login);
   console.log(data);
   console.log(data.items[1].avatar_ur);
   console.log(data.login);
   console.log(data.html_url);

   let card=document.getElementById('card')
   card.innerHTML=""
   
   data.items.map((e)=>{
    card.innerHTML+=`<div class="card">
    <div class="avtar"><img src="${e.avatar_url}" alt="avtar"></div>
    <div class="name">
        <div class="username">${e.login}</div>
        <a href="${e.html_url}">view more</a>
 
    </div>
 </div>`
   })
    
}
async function getData1(){
    let search=document.getElementById('search');
   console.log(search.value);
   const res=await fetch(`https://api.github.com/search/users?q=a`);
   const data=await res.json();
   console.log(data.items[0].login);
   console.log(data);
   console.log(data.items[1].avatar_ur);
   console.log(data.login);
   console.log(data.html_url);

   let card=document.getElementById('card')
   card.innerHTML=""
   
   data.items.map((e)=>{
    card.innerHTML+=`<div class="card">
    <div class="avtar"><img src="${e.avatar_url}" alt="avtar"></div>
    <div class="name">
        <div class="username">${e.login}</div>
        <a href="./profile.html?id=${search}">view more</a>
 
    </div>
 </div>`
   })
    
}