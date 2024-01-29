// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


let url = window.location.pathname;

if (url == "/") {
    document.getElementById("index").classList.add("active");

} else if (url == "/Razor") {
    document.getElementById("razor").classList.add("active");
} else if (url == "/About") {
    document.getElementById("about").classList.add("active");
}