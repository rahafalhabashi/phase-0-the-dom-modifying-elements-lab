// const element = document.createElement("div")
// document.body.append(element)

// const ul = document.createElement("ul")

// for (i=0; i < 3; i++) {
//     const li = document.createElement("li")
//     li.textContent = (i + 1).toString()
//     ul.append(li)
// }

// element.append(ul)

const mainId = document.getElementById("main")
mainId.remove();

const newHeader = document.createElement('h1')
newHeader.setAttribute('id', 'victory')
newHeader.innerHTML = "H1"

newHeader.innerHTML = "YOUR-NAME is the champion"