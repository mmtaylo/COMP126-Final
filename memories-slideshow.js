function openTab (evt, tabName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    var mainImage = document.querySelector(".memories-main-image");
    if (mainImage) {
      mainImage.style.display = "none";
    }
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  