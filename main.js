let light =document.querySelector("#light")
let buttonOn= document.querySelector("#btnOn")
let buttonOf= document.querySelector("#btnOff")


buttonOn.addEventListener("click", ()=> {
    light.style.backgroundColor ="yellow"
})



buttonOf.addEventListener("click", ()=> {
    light.style.backgroundColor ="blue"
})