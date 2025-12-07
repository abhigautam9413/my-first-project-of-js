// const h1tag = document.getElementsById("h1tag");
//const pTag = document,querySelector("p");



const image = document.querySelector("img");

// imager.src = "https://images.unsplash.com/photo-1682685792083-5f5e3c6f5f4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";
image.addEventListener("click", function() {
    image.src = "https://up.yimg.com/ib/th/id/OIP.U_VJuupQohwnzXcKMztqWgHaEo?pid=Api&rs=1&c=1&qlt=95&w=153&h=95";
    console.log("clicked on image");
});