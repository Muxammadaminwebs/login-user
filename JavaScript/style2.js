"use strict"

let wrapper = renderElement(".wrapper")
    fetch("https://reqres.in/api/users?page=2")
         .then(res => res.json())
         .then(data => parametr(data))

function parametr(e) {
    console.log(e.data)
    let datas = e.data
    for (let i = 0; i < datas.length; i++){
        console.log(datas[i].first_name);
        let card = createTag("div")
        let h2 = createTag("h2")
        h2.appendChild(textNode(datas[i].first_name))
        card.appendChild(h2)
        let img = createTag("img")
        img.src = datas[i].avatar
        img.className = "img"
        card.appendChild(img) 
        let h3 = createTag("h3")
        h3.appendChild(textNode(datas[i].email))
        card.appendChild(h3)
        card.className= "card"
        wrapper.appendChild(card)
    
    }

}
              
