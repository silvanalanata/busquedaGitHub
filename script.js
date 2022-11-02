
let consultar =  document.querySelector("#buscar");

document.addEventListener("click",search);


function search(){
    $.get("https://api.github.com/users/silvanalanata", displayname)    
    
        function displayname(data){
            console.log(data)
            let name = document.querySelector("#nombre");
            name.innerHTML=data.name;
        }
}



