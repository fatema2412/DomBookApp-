function navbar(){
 const navbar=`  <div>
            <a href="index.html">Home</a>
            <a href="admin.html">Admin</a>
            <a href="books.html">Book</a>

        </div>
 `
 let card=document.getElementById("nav").innerHTML=navbar
}
navbar()
export{navbar}