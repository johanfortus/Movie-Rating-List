

$('form').on('submit', function(e){
    e.preventDefault();
    let movieTitle = $('input').eq(0).val();
    let movieRating = $('input').eq(1).val();
    let listItem = $(`<li>${movieTitle}</li>`);
    for(let i = 0; i < movieRating; i++){
        if (movieRating > 5) {
            
            alert('Movie rating cannot be above 5!');
            break; // Stop adding stars if rating is above 5
        }
        else{
            listItem.append(`⭐`);
            $('ul').append(listItem);
        }
        
    }
})