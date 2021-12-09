const tab = document.querySelectorAll('js-aboutTours-header');
const tabs = [];

tabs = for()

tabs.addEventListener('click', toggle(){
  console.log(1);
  let id = this.attr('data-tab'),
    content = this('.js-aboutTours-body[data-tab="'+ id +'"]');
  this('.js-aboutTours-header.active').removeClass('active');
  this.addClass('active');

  this('.js-aboutTours-body.active').removeClass('active');
  content.addClass('active');
});
