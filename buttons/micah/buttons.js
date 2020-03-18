let give_him_the_stick= document.getElementById('give_him_the_stick');

let dont_give_him_the_stick= document.getElementById('dont_give_him_the_stick');

let oooooooooooo= document.getElementById('oooooooooooo');

 

console.log('Button reference: ', give_him_the_stick);

console.log('Button reference: ', dont_give_him_the_stick);

console.log('Button reference: ', oooooooooooo);

 

console.log(document);

 

give_him_the_stick.addEventListener('click', function() {

 

    console.log('one click');

    give_him_the_stick.value = 'pressed';

    dont_give_him_the_stick.value = 'not pressed';

    oooooooooooo.value = 'not pressed';

});

 

dont_give_him_the_stick.addEventListener('click', function(){

    console.log('two clicks');

    give_him_the_stick.value = 'not pressed';

    dont_give_him_the_stick.value = 'pressed';

    oooooooooooo.value = 'not pressed';

});

 

oooooooooooo.addEventListener('click', function(){

    console.log('three clicks, ah ah ah');

    give_him_the_stick.value = 'not pressed';

    dont_give_him_the_stick.value = 'not pressed';

    oooooooooooo.value = 'pressed';

});