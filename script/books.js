 let but= document.getElementById("button")
 but .addEventListener("click",getItem())
async function getItem(){
    console.log("ye")
    try{
let res= await fetch("https://trusted-luck-wedge.glitch.me/books?isAvailable=true",{
            method:"GET",
            headers:{
                "content-type" :"application/json"
            }
        })
        let data= await res.json()
        console.log(data)
        displayData(data)
        // return data

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
        let button1=document.createElement("button")
        button1.innerHTML="Borrow  Button"
        button1.addEventListener("click",function(){
       let promptres= prompt("Are you sure to Borrow ..?.")
       let approvedDate=Date.now()
       console.log(approvedDate)
        })
            
        card.append(title,author,category,button1,) 
    }) 
}


