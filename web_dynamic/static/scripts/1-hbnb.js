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
    let str;
    for (key in myDict) {
      myList.push(myDict[key]);
    }
    str = myList.join(', ');
    $('.amenities h4').text(str);
  });
});
