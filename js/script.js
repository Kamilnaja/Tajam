
  jQuery(document).ready(function () {
jQuery('.toggle-nav').click(function (e) {
  'use strict';
jQuery(this).toggleClass('active');
jQuery('.menu ul').toggleClass('active');
e.preventDefault();
  });
});


//potem wywołać funkcję
var tag = "cat";
function loadMore(){
  'use strict';
 $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
      tags: "+ tag + ",
      tagmode: "all",
      format: "json"
}, function(data){
  'use strict';
  $.each(data.items, function(i,item){
    var image = (item.media.m).replace("_m.jpg", "_d.jpg");
    var title = item.title;
   if(i < 10){
     $("<div>")
      .attr({
        style: "background-image: url("+image+")",
        class: "image",
        "data-title": "title"
      })
     .appendTo(".gallery").wrap("<a href='" + item.link + "' target=\"_blank\"></a>");
   }
 });
});
}

loadMore();
//po wciśnięciu przycisku ładuje się więcej fotek
var element = document.getElementById('load-more');
element.onclick = loadMore;
function loadClients() {
  'use strict'
 $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
        tags: "businessman",
        tagmode: "all",
        format: "json"
    }, function (data) {
  $.each(data.items, function (i, item) {
            var image = (item.media.m).replace("_m.jpg", "_d.jpg");
            if (i < 8) {
     $("<figure>")
                    .attr({
                        style: "background-image: url(" + image + ")",
                        class: "image",
                        "data-title": "title"
                    })
                    .appendTo(".clients").wrap("<a href='" + item.link + "' target=\"_blank\"></a>");
            }
        });
    });
}

