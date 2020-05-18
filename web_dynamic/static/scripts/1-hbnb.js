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
    $('.amenities h4').text(myList);
  });
});
