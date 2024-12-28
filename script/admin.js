// let loginData= JSON.parse(localStorage.getItem ("logindata"))
// console.log(loginData)
// function check(){
//     loginData.map((elem)=>{
//         if(elem.email!=admin@empher.com){

//         }
//     })
// }

let form=document.getElementById("form")
form.addEventListener("submit", async function(event){
    event.preventDefault()
    let title=form.title.value
    let author=form.author.value
    let category=document.getElementById("category").value
    let booksobj={
        title,
        author,
        category,
        isAvailable: true,
        
    }
    try{
    fetch("https://trusted-luck-wedge.glitch.me/books",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(booksobj)
    })
    alert("Book Added Successfully")
    loadData()
}
catch(err){
    console.log (err)
}
})



 async function getItem(){
    try{
        let res= await fetch("https://trusted-luck-wedge.glitch.me/books",{
            method:"GET",
            headers:{
                "content-type" :"application/json"
            }
        })
        let data= await res.json()
        console.log(data)
        return data

    }
    catch(err){
   console.log(err)
   alert("Something went wrong in getting data")
    }

}

loadData= async()=> {
    let arr= await getItem()
    displayData(arr)
}
window.onload=loadData


function displayData(arr){
    let container=document.getElementById("container")
    container.innerHTML=" "
    arr.map((elem,id)=>{
        let card=document.createElement("div")
        let title=document.createElement("h3")
        title.innerHTML=elem.title
        let author=document.createElement("h4")
        author.innerHTML=elem.author
        let category =document.createElement("h4")
        category.innerHTML=elem.category
        let isAvailable =document.createElement("h4")
        isAvailable.innerHTML=elem.isAvailable==true? "Avaliable" :"NotAvaliable"
        container.append(card)
        let button1=document.createElement("button")
        button1.innerHTML="Delete Button"
        button1.addEventListener("click",function(){
       let promptres= prompt("Are you sure to Delete ..?.")
            if(promptres=="yes"){
                deletefun (elem) 
        
            }
        })
        let button2=document.createElement("button")
        button2.innerHTML="Verify Button"
        button2.addEventListener("click",function(){
       let promptres= prompt("Are you sure to verify ..?.")
            if(promptres=="yes"){
                verfiyfun (elem) 
                button2.disabled=true
            }
        })
        card.append(title,author,category,isAvailable,button1,button2) 
    }) 
}
  async function verfiyfun(elem){
    let verfiyobj={...elem}
    try{
        fetch(`https://trusted-luck-wedge.glitch.me/books/${elem.id}`,{
            method:"PATCH",
            headers:{
                "content-type" :"application/json"
            },
            body:JSON.stringify(verfiyobj)
        })
        alert("Verfiy")
    //   displayData()

    }
    catch(err){
        console.log(err)
    }

 }

 async function deletefun (elem){
    
    try{
        fetch(`https://trusted-luck-wedge.glitch.me/books/${elem.id}`,{
            method:"DELETE",
        })
        loadData()

    }
        catch(err){
            console.log(err)
        }
    }


