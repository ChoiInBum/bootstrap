// #(document).ready(function() {
//
// });

$(function() {
  $('#myTab a:first').tab('show');
  $('#yourTab').on('shown.bs.tab', function (event) {
    // 이전에 선택되었던 탭메뉴의 아이콘
    $(event.relatedTarget).find('i').remove();
    // 현재 선택한 탭메뉴에 아이콘을 추가하는 코드
    $(event.target).prepend('<i class="fa fa-arrow-right"></i>');
  });

  $('#myTab').on('shown.bs.tab', function (event) {
    console.log(1);
    // 이전에 선택되었던 탭메뉴의 아이콘
    $(event.relatedTarget).find('i').css('display', 'none');
    // 현재 선택한 탭메뉴에 아이콘을 추가하는 코드
    $(event.target).find('i').css('display', 'inline')
  });
});
