// Add your code here
 
const submitData=(userName, userEmail)=>{
const configurationObject = {
    method:"POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify({name:userName,email:userEmail}),
          };
const bodyId= document.querySelector("body");
    fetch("http://localhost:3000/users",configurationObject)
    .then(response=>response.json())
    .then(data=>bodyId.innerHTML=data.id)
    .catch(function (error){
        console.log(error);
    })
   
}