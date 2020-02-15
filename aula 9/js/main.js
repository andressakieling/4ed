

const formulario = document.querySelector('#form');


formulario.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const ano= document.querySelector('#ano');
    const videoId = 'y_70M2GC3jw';
    const video = document.querySelector(".video");
    
    if( (2020 - ano.value) >= 18 ) {
    video.innerHTML= `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    document.querySelector('.popup').style.display ='none'
    }

    
})



// formulario.addEventListner('submit', function(){    

//     const ano = document.querySelector('#ano');
//     console.log(ano.value)

// });