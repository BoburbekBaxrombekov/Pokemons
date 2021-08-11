function createLi(x){
	let newLi = document.createElement("li");
    let liHeader = document.createElement("div")
    liHeader.setAttribute('class', 'imgWrap')
	let newImg = document.createElement("img")
	newImg.setAttribute("src", x.img);
	newImg.setAttribute("width", "300px");
	liHeader.appendChild(newImg)
    newLi.appendChild(liHeader)
	let newTitle = document.createElement("h3");
	newTitle.textContent = x.name
	newLi.appendChild(newTitle)
	let newP = document.createElement("p");
	newP.textContent = "Type: " + x["type"];
	newLi.appendChild(newP)
    let Height = document.createElement("h3")
    Height.textContent = "Height: " + x["height"]
    let Weight = document.createElement("h3")
    Weight.textContent = "Weight: " + x["weight"]
    newLi.appendChild(Height)
    newLi.appendChild(Weight)
	listParent.appendChild(newLi)
}
for (let pokemon of pokemons) {
	createLi(pokemon)
}
let elSelect = document.querySelector('.mySelect')

function actionFunc(x) {
	listParent.innerHTML = ""
    console.log(mySelect)
	for (let pokemon of x) {
		if (mySelect.value == "All") {
			createLi(pokemon)
		}
		else if (pokemon["type"].includes(mySelect.value)) {
			createLi(pokemon)
		}
	}
}
function RegexFunc(x) {
	listParent.innerHTML = ""
	let regex = new RegExp(`${input.value}`, 'gi')
	for (let i of x) {
		if (i.name.match(regex)) {
			createLi(i)
		}
	}
    input.value = ""
}

function parent(){
    if(select.value == "random"){{
        if(input.value != ""){
            RegexFunc(pokemons)
        }else{
            actionFunc(pokemons)
        }
    }

    }
    else if(select.value == "Aa-Zz"){
        pokemons = pokemons.sort((a,b) =>{
            if(a["name"] > b["name"]){
                return 1
            }else if(a["name"] < b["name"]){
                return -1
            }else{
                return 0
            }
        })
        if(input.value != ""){
            RegexFunc(pokemons)
        }else{
            actionFunc(pokemons)
        }
    }else if(select.value == "Zz-Aa"){
        pokemons = pokemons.sort((a,b) =>{
            if(a["name"] > b["name"]){
                return -1
            }else if(a["name"] < b["name"]){
                return 1
            }else{
                return 0
            }
        })
        if(input.value != ""){
            RegexFunc(pokemons)
        }else{
            actionFunc(pokemons)
        }
    }
    
}



