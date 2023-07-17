

console.clear();

// const input = document.querySelector("input[name=name");
// input.addEventListener('change', changeHandler)

// function changeHandler(event){
    
//     // console.log(event);
//     // console.log(event.type);
//     console.log(event.target);
//     console.log(event.target.id);
//     console.log(event.target.value);
    
// }












// CheckBox er sathe kivabe use krte hbe ........ 











const programs = document.querySelectorAll("input[name=program]");
// console.log(programs);

Array.from(programs).map((program) => {

    program.addEventListener("change", programHandeler)
});

        function programHandeler (e) {

            if (e.target.checked) {
                console.log(e.target.value);
            }
        }
        
