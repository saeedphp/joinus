var progressbars = "";
var i;
for (i = 1; i <= 20; i++) {
  progressbars += "<div class='bar'></div>";
}

$(".bars").html(progressbars);


window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 0) {
      lightbox_close();
    }
  }
  
  function lightbox_open() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    window.scrollTo(0, 0);
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
    lightBoxVideo.scrollIntoView();
  }
  
  function lightbox_close() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
  }


  