
//console.log(instagram.data[9].images.standard_resolution.url);

//30189300.1677ed0.92029470846c4aa2aee9db352b950afb

$.ajax({

    method:"get",
    url:"https://api.instagram.com/v1/users/self/media/recent/?access_token=30189300.1677ed0.92029470846c4aa2aee9db352b950afb",
    success: function(response) {

        console.log(response.data[8].images.standard_resolution.url);

        const posts=response.data;
        const galeria = $('.galeria')



        posts.forEach(element => {
           
            console.log(element);
            galeria.append(`<a href="${element.link}" target="_blank"><img src="${element.images.standard_resolution.url}"><p><i class="material-icons">
            favorite
            </i>${element.likes.count}</p></a>`);
          
        });
    }

})