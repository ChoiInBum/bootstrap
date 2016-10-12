$(document).ready(function() {
  // $('p').html("안녕! JQuery");
  var result = $('p').html();
  // document.getElementsbyTagName('p') = $('p')
  console.log(result);

  $('a#google').click(function() {
    alert('구글로 이동합니다.');
    event.preventDefault();
  });

  // GET 방식으로 http 통신을 하는 메소드
  $('#ajax').click(function() {
    $.get('ajax.html', function(reponse) {
      $('p.content').html(response);
    });
  });

  function myCallBack() {
    alert("callback 실행!");
    event.preventDefault();
  }

  // $('h1').addClass('red');
  // $('h1').removeClass('big');

  $('#btn').click(function() {
    if ($('h1').css('display') != 'none') {
      $('h1').hide('slow');
    } else {
      $('h1').show('slow');
    }
  });

//   $('#btn').click(function() {
//     if( $('h1').hasClass('big') ) {
//       $('h1').removeClass('big');
//       // $('h1').removeClass('big');
//     } else {
//       $('h1').addClass('big');
//     }
//   });

});
