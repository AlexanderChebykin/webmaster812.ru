$(document).ready(function(){

  /*Header button */
  $('.btn-success').on('click',function(){
      $('.hidden-paragraph').toggle();
      $('.hidden-form').css('display','none');
       });


  $('.btn-primary').on('click',function(){
   $('.hidden-form').toggle();
   $('.hidden-paragraph').css('display','none')
      
  });


  
  $('.right-top').on('click', function(){
  		$('.hidden-form').css('display','none');
  });

});
