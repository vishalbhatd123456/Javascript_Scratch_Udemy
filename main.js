//add an event listener to the

var button1 = document.getElementById('change-background');

button1.addEventListener('click', function (){
    //action will go here if
    document.body.style.backgroundColor = 'tomato';
});

var button2 = document.getElementById('change-background2');
button2.addEventListener('dblclick', function(){
    document.body.style.backgroundColor = 'red';
})

var button3 = document.getElementById('change-background3');
button3.addEventListener('mouseover', function(){
    document.body.style.backgroundColor = 'yellow';
})
