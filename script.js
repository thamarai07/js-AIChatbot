
document.addEventListener('DOMContentLoaded', ()=>{
    let forminput = document.querySelector(".message-input");

    if (forminput) {  // Check if the element exists
        forminput.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {  // Prevents form submission on Enter unless Shift is held down
                e.preventDefault(); // Prevents the form from submitting

                const message = e.target.value.trim(); // Trims the input value
                if (message) {
                    console.log(message);  // You can handle the message here, like sending it to a server
                    e.target.value = "";  // Clears the textarea
                }
            }
        });
    } else {
        console.error("Element with class 'message-input' not found.");
    }
})

