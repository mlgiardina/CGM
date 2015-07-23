// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require materialize-sprockets
//= require react
//= require react_ujs
//= require components
//= require cloudinary
//= require_tree .


$(document).ready(function() {
      $('.modal-trigger').leanModal();
      $('.button-collapse').sideNav();
      $('select').material_select();
      $('.cloudinary-fileupload').cloudinary_fileupload({replaceFileInput: false});
      $('.cloudinary-fileupload').bind('fileuploadprogress', function(e, data) {
        $('.cloudinary-fileupload').bind('cloudinarydone', function(e, data) {
          $('.preview').html(
            $.cloudinary.image(data.result.public_id,
              { format: data.result.format, version: data.result.version,
                crop: 'fill', width: 200, height: 200 })
          );
        });

});
    if (document.getElementById("alert")) {
      alert = document.getElementById("alert");
      alert.addEventListener('click', function() {
        alert.style.display = 'none';
      }, false);
    } else if (document.getElementById("notice")) {
      notice = document.getElementById("notice");
      notice.addEventListener('click', function() {
        notice.style.display = 'none';
      }, false);
    };
});
