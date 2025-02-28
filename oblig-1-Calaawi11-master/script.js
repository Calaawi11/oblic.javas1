//TODO: add on load/ready functionality
document.addEventListener("DOMContentLoaded", () => {
console.log("ready!")

})
//TODO: add functionality to open the correct spell books
let button = document.getElementById("close-tome");
let dav = document.getElementById("book-view");
let spellPage = document.getElementById("change-password-book");
let nameBook = document.getElementById("change-name-book");
let summonBook = document.getElementById("summon-familiar-book");

function openSpellBook(){

   button.addEventListener("click", ()=>{
       dav.classList.remove("hidden");
       spellPage.classList.remove("spell-page");
       nameBook.classList.remove("hidden");
       summonBook.classList.remove("hidden");
   });

    button.addEventListener("click", function (){
        let elements = ["change-password-book", "change-name-book", "summon-familiar-book"];
        elements.forEach(function (element){
            let book = document.getElementById("element");
            if(book.style.display === "none"){
                book.style.display = "block";
            }else {
                book.style.display = "none";
            }
        });
    });

}




// forms
let userName = document.getElementById("userName");
let newPassword = document.getElementById("newPassword");
let condirmNpassword = document.getElementById("confirmNpassword");
let form = document.getElementById("change-password-form");
function changePassword(){
    if(newPassword.value === condirmNpassword.value){
        alert("success");
        event.preventDefault();
    }else if (!newPassword.value === condirmNpassword){
        alert("error, new password does not much confirm password");
    }
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("this has been prevented.");
    });
}

// change new name form and logic

document.getElementById("newName").innerText = "Welcome to The MagiScript Library of Mexyll the Magnificent";
document.getElementById("newTitle").innerText = "Explore the magic within books";

//TODO: add functionality to change password
//TODO: add functionality to change name
//TODO: add functionality to summon familiar
// have a function where you can load content into a "user array" -> easier to work with
