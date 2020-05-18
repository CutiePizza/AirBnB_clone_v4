const $ = window.$;
$(document).ready(function () {
  const myDict = {};
  $('input').click(function () {
    if ($(this).prop('checked') === true) {
      myDict[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if ($(this).prop('checked') === false) {
      delete myDict[$(this).attr('data-id')];
    }

    let key;
    const myList = [];
    for (key in myDict) {
      myList.push(myDict[key]);
    }
    const str = myList.join(', ');
    $('.amenities h4').text(str);
  });
  const url = 'http://0.0.0.0:5001/api/v1/status/';
  $.getJSON(url, function (data) {
    if (data.status !== 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});
