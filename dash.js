username=localStorage.getItem("username")
author=localStorage.getItem("author")
btype=localStorage.getItem("btype")
bprize=localStorage.getItem("bprize")

console.log(username);
first.innerHTML="Book Name:   " +username
second.innerHTML="Author Name:  " +author
third.innerHTML="Type of book:  " +btype
fourth.innerHTML="Prize of book: &#8377;" +bprize
function closeItem(){
    window.location="./index.html"
    localStorage.removeItem("username")
    localStorage.removeItem("author")
    localStorage.removeItem("btype")
    localStorage.removeItem("bprize")
}