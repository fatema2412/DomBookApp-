let form=document.getElementById("form")
form.addEventListener("submit",function(event){
    event.preventDefault()
    let Email=form.email.value
    let Password=form.password.value
    let logindatonj={email: Email, password:Password}
   let  logindataarr=[]
   logindataarr.push(logindatonj)
    console.log(logindataarr)
    if(Email=="admin@empher.com" && Password=="empher@123"){
        alert("Logged in as Admin.")
        localStorage.setItem("logindata",JSON.stringify(logindataarr))
        window.location.href="admin.html"
    }
    else if(Email=="user@empher.com" && Password=="user@123" ){
        localStorage.set("logindata",JSON.stringify(logindataarr))
        window.location.href="books.html" 
    }
    else{
        alert("Wrong Credentials ")
    }
})