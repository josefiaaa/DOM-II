// Your code goes here

let myButton = document.getElementsByClassName("btn");

let destinations = document.getElementsByTagName("h4");

let text = document.getElementsByTagName("p");

let pictures = document.getElementsByTagName("img");

let nav = document.getElementsByTagName("a");

let colors = ['red', 'blue', 'green', 'purple', 'orange'];

let bus = `🚌`;



//Load
window.addEventListener('load', function() {
    alert('Welcome to Fun Bus!');
});

//Double click
window.addEventListener('dblclick', function() {
    alert(bus);
});

//Scroll
window.addEventListener('scroll', function() {

     text[0].style.color = colors[0];


});

//Copy alert
for(let i = 0; i < text.length; i++)
{
    text[i].addEventListener('copy', function(){
        alert("Thanks for sharing!");
    });
}


//Mouse leave
for(let i = 0; i < destinations.length; i++)
{
    destinations[i].addEventListener('mouseleave', function(){
        //To get random color calculate random number between 0 and length of colors and use as array index
        this.style.color = colors[Math.floor(Math.random()*colors.length)];
    });
}

//Mouse over
for(let i = 0; i < myButton.length; i++)
{
    myButton[i].addEventListener('mouseover', function() {
        this.style.transform = "scale(1.125)";

        this.addEventListener('mouseleave', function() {
            this.style.transform = "scale(1.0)";
        });

    });

    
}

for(let i = 0; i < pictures.length; i++)
{
    pictures[i].addEventListener('mouseover', function() {
        this.style.transform = "scale(1.125)";

        this.addEventListener('mouseleave', function() {
            this.style.transform = "scale(1.0)";
        });
    });

}

for(let i = 0; i < nav.length; i++) {

    nav[i].addEventListener('mouseover', function(){
        this.style.color = "#06659e"
    });


}