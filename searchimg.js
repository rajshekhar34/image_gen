
// const search = document.getElementById("search");
// const imagesDiv = document.querySelector(".images");
// const more = document.getElementById("more");


// let page = 1;
// let searchRes = "";


// async function getImage(page,searchRes){
//     searchRes = search.value;
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchRes}&client_id=aEfn8IKe4XkMecE4Sir8r2Y2Ocv6_mlvfODHH2RCacs`;
//     const response = await fetch (url);
//     const data = await response.json();
//     const finalRes = data.results;

//     // if (page === 1){
//     //     imagesDiv.innerHTML = "";
//     // }

//     finalRes.map((element)=>{
//         let divCrt = document.createElement("div");
//         divCrt.classList.add("image");
//         let imgcrt = document.createElement("img");
//         imgcrt.src = element.urls.regular;
//         divCrt.appendChild(imgcrt);
//         imagesDiv.appendChild(divCrt);
//     })
    
// }

// getImage(1,'nature')

// search.addEventListener("keydown",(event)=>{
//     if(event.key==="Enter"){
//         event.preventDefault();
//         page = 1;
//         getImage();
//     }
// })

// more.addEventListener("click",()=>{
//     getImage();
//     page++;
   
// })





const homeArr =  ["rain", "beach","spring", "girls", "all", "images", "summer","winter"];
let randomHome = Math.floor(Math.random()*homeArr.length);


const search = document.getElementById("search");
const imagesDiv = document.querySelector(".images");
const more = document.getElementById("more");
const error = document.querySelector(".error");


let page = 1;
let searchRes = "";


async function getImage(){
    try{
    searchRes = search.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchRes}&client_id=aEfn8IKe4XkMecE4Sir8r2Y2Ocv6_mlvfODHH2RCacs`;
    const response = await fetch (url);
    const data = await response.json();
    const finalRes = data.results;
    showFirst(finalRes);
}catch{
    error.classList.remove("error");
    search.classList.add("error");
    imagesDiv.classList.add("error");
    more.classList.add("error");
}
}

let newPage = Math.floor(Math.random()*10)+1;


async function showfirstpage(){
if (searchRes === ""){
    try{
    const url = `https://api.unsplash.com/search/photos?page=${newPage}&query=${homeArr[randomHome]}&client_id=aEfn8IKe4XkMecE4Sir8r2Y2Ocv6_mlvfODHH2RCacs`;
    const response = await fetch (url);
    const data = await response.json();
    const finalRes = data.results;
    showFirst(finalRes);
}catch{
    error.classList.remove("error");
    search.classList.add("error");
    imagesDiv.classList.add("error");
    more.classList.add("error");
}
}
}
showfirstpage()

    function showFirst(evt){
        evt.map((element)=>{
            let divCrt = document.createElement("div");
            divCrt.classList.add("image");
            let imgcrt = document.createElement("img");
            imgcrt.src = element.urls.regular;
            divCrt.appendChild(imgcrt);
            imagesDiv.appendChild(divCrt);
        })
    }



    
let btn = document.querySelector(".btn");



search.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        if (page >= 1){
            page = 1;
            imagesDiv.innerHTML = "";
             }
        event.preventDefault();
        page = 1;
        getImage();
    }
        btn.classList.remove("btn");
})

more.addEventListener("click",()=>{
    
    getImage();
    page++;
   
})






