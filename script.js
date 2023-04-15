function highlight() {
    //Write your code here

    const k = document.querySelectorAll("strong");
	k.forEach((elem) => {
		elem.style.color = "green";
	})
}


function return_normal() {
    //Write your code here

	const k = document.querySelectorAll("strong");
	k.forEach((elem) =>{
		elem.style.color = "black";
	})
    
}
