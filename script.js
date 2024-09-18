const myLibrary=[];
const cards =document.querySelector(".cards");
const leftbar=document.querySelector(".leftbar");
const dialog=document.querySelector("dialog");
const add=document.querySelector("#add");
function Book(title,author,pages,readStatus) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.readStatus=readStatus;    
  }
  
function addBookToLibrary(title,author,pages,readStatus) {

    myLibrary.push(new Book(title,author,pages,readStatus));
    const div=addCardDetails(title,author,pages,readStatus); 
    div.className="card";
    cards.appendChild(div);
    
}
function addCardDetails(title, author, pages, readStatus) {
    const details = [
        `BOOK NAME: ${title}`,
        `AUTHOR NAME: ${author}`,
        `NO OF PAGES: ${pages}`,
        `READ STATUS: ${readStatus}`
    ];

    const div = document.createElement("div");

    details.forEach(detail => {
        const detailDiv = document.createElement("div");
        detailDiv.textContent = detail;
        div.appendChild(detailDiv);
    });

    return div;
}


// function displayBooks(myLibrary){
//     myLibrary.forEach(e => {
//         const div=addCardDetails(e.title,e.author,e.pages,e.readStatus); 
//         div.className="card";
//         cards.appendChild(div);
//     });
//     myLibrary
// }

const addBook=document.createElement("button");
addBook.textContent="ADD BOOK";
addBook.className="addBook";
leftbar.appendChild(addBook);

addBook.addEventListener("click",()=>{
    dialog.showModal();
    
})
add.addEventListener("click",()=>{
    addBookToLibrary(
        document.querySelector("#bookName").value,
        document.querySelector("#author").value,
        document.querySelector("#pages").value,
        document.querySelector("#readStatus").checked
    )
    displayBooks(myLibrary);
})

function removeBook(){
    myLibrary.pop()
}






