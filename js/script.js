function main() {
    const titlee = document.getElementsByClassName('title');
    const cbtn = document.getElementsByClassName('btn');

    let current_title = titlee[0].textContent;
    let next_title = 'The Dom';

    cbtn[0].addEventListener('click',function(e){
        titlee[0].textContent = next_title;
        const temp = current_title;
        current_title = next_title;
        next_title = temp;


        titlee[0].classlist.toggle('title1');
        titlee[0].classlist.toggle('title2');
    });
}

window.onload = function(){
    main();
}





const scrollTotop = document.querySelector('.scrollTop');
scrollTotop.addEventListener("click",smoothScroll);
function smoothScroll(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// function main() { 
//     const titlee = document.getElementsByClassName('title');
//     const cbtn = document.getElementsByClassName('btn');

//     let current_title = titlee[0].textContent;
//     let next_title = 'The Dom';

//     cbtn[0].addEventListener('click', function(e) {
//         titlee[0].textContent = next_title;
//         const temp = current_title;
//         current_title = next_title;
//         next_title = temp;

//         titlee[0].classList.toggle('title1');
//         titlee[0].classList.toggle('title2');
//     });
// }

// window.onload = function() {
//     main();
// };
