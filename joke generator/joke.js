async function fetchdata(){

    try{

        const res=await fetch("https://api.chucknorris.io/jokes/random");


        

        if(!res.ok){
            throw new Error("Not found");
        }
        const data=await res.json();

        const jokegen=data.value;
        
        document.getElementById("joke").innerText=jokegen;

    }
    catch(error){
        console.error(error);
    }

}
fetchdata();