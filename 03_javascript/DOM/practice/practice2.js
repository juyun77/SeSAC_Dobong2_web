
let list =document.querySelectorAll("li")
console.log(list)

for (let el of list)
{
    el.classList.toggle('todo')
    el.classList.toggle('done')
}
