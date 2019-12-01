$("#js-shopping-list-form").on('submit', function(){
    event.preventDefault();
    let item = $('#shopping-list-entry').val();
    let html = `<li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`

    $('.shopping-list').append(html);
});

$('.shopping-list').on('click','.shopping-item-toggle', function(){
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');  
});

$('.shopping-list').on('click','.shopping-item-delete', function(){
    $(this).closest('li').remove();
});