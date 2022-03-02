function LoopForever() 
  {
    $(document).ready(function(){

      $('header.masthead').fadeTo('slow',1, function()
      {
        $(this).css('background-image', 'url('+'img/portfolio/IMG_3877.JPG'+')');
      }).delay(2000).fadeTo('slow', 3); 
    $('header.masthead').fadeTo('slow',1, function()
      {
        $(this).css('background-image', 'url('+'img/portfolio/rodinny3.JPG'+')');
      }).delay(2000).fadeTo('slow', 3);
    $('header.masthead').fadeTo('slow',1, function()
      {
        $(this).css('background-image', 'url('+'img/portfolio/bytovyDomZavadka.JPG'+')');
      }).delay(2000).fadeTo('slow', 3);
    $('header.masthead').fadeTo('slow',1, function()
      {
        $(this).css('background-image', 'url('+'img/header2.jpg'+')');
      }).delay(7000).fadeTo('slow', 3);    
    });
  }

  var interval = self.setInterval(function(){LoopForever()},7000);
