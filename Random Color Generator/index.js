const btn = document.querySelector("button");
const container = document.getElementById("container");
const result = document.getElementById("text");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

btn.addEventListener('click',function(){
    let hexcd = '#';
    for(let i=1;i<7;i++)
    {
        hexcd += hexcode() ;
    }
    container.style.backgroundColor = hexcd;
    text.innerHTML = hexcd;
})

function hexcode(){
    const h = Math.floor(Math.random()*16) 
    return hex[h]
}