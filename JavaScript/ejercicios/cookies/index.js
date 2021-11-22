/*
Cookies
An HTTP cookie (web cookie, browser cookie) is a small piece of data that a server sends to a user's web browser. 
The browser may store the cookie and send it back to the same server with later requests. Typically, an HTTP 
cookie is used to tell if two requests come from the same browser—keeping a user logged in, for example. It 
remembers stateful information for the stateless HTTP protocol. 

Cookies are mainly used for three purposes:

Session management --> Logins, shopping carts, game scores, or anything else the server should remember
Personalization --> User preferences, themes, and other settings
Tracking --> Recording and analyzing user behavior

*/

document.querySelector("#create").addEventListener("click", create);
document.querySelector("#show").addEventListener("click", show);
document.querySelector("#modify").addEventListener("click", modify);
document.querySelector("#delete").addEventListener("click", del);

function create() {
  document.cookie =
    "userName=Martín; expires=Fri, 31 Dec 2021 12:00:00 UTC; path=/ejercicios/cookies/index.html";
}

function show() {
  console.log(document.cookie);
}
function modify() {
  document.cookie =
    "userName=Martín Lupa; path=/ejercicios/cookies/index.html; Max-Age=100";
}
function del() {
  document.cookie =
    "userName= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/ejercicios/cookies/index.html";
}
