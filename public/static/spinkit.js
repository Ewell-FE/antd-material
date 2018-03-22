var spinkit = {};
spinkit.adImpressions = 0;

$(function() {
  $(".pagination a").click(function(e){
    e.preventDefault();
    // Remove the selected class from the currently selected indicator
    $(this).parent().parent().find(".selected").removeClass("selected");
    // Make the clicked indicator the selected one
    $(this).addClass("selected");
    
    spinkit.updateSlideshowForSelectedPage();
  });
  
  $("#next").click(function(e) {
    spinkit.goToNext();
  });
  
  $("#prev").click(function(e) {
    spinkit.goToPrev();
  });

  // Keyboard shortcuts
  $("body").keyup(function(e) {
    if (e.keyCode == 39) {
      // Key right
      spinkit.goToNext();
    } else if (e.keyCode == 37) {
      // Key left
      spinkit.goToPrev();
    } else if (e.keyCode == 83) {
      // S key
      spinkit.showSourceForActiveSpinner();
    } else if (e.keyCode == 27) {
      spinkit.dismissSourceFrame();
    }
  }).keydown(function(e) {
    if (e.keyCode == 13) {
      // Enter key
      // The enter key needs to be set to keydown, to not trigger when you
      // hit enter in the URL field to enter the site
      spinkit.showSourceForActiveSpinner();
    }
  });

  $(".js-sk-source-link").click(function(e) {
    e.preventDefault();
    spinkit.showSourceForActiveSpinner();
  });

  // Prevent the source frame from dismissing when interacting with the textarea
  $("#source-frame textarea").click(function(e) {
    e.stopPropagation();
  });

  // Dismiss the sourceframe when clicking the black overlay
  $("#source-frame ul").click(function(e) {
    spinkit.dismissSourceFrame();
  });
});

spinkit.goToNext = function() {
  // Exit if there are no more spinners
  if ($(".pagination .selected").parent().index()+1 >= $(".pagination li").length)
    return;

  // Exit if there source-frame is visible
  if ($("#source-frame").hasClass("visible"))
    return;

  $(".pagination .selected")
    .removeClass("selected")
    .parent().next().find("a").addClass("selected");
  
  spinkit.updateSlideshowForSelectedPage();
}
  
spinkit.goToPrev = function() {
  // Exit if the currently selected spinner is the first one
  if ($(".pagination .selected").parent().index() <= 0)
    return;

  // Exit if there source-frame is visible
  if ($("#source-frame").hasClass("visible"))
    return;

  $(".pagination .selected")
    .removeClass("selected")
    .parent().prev().find("a").addClass("selected");
  
  spinkit.updateSlideshowForSelectedPage();
}

spinkit.showSourceForActiveSpinner = function() {
  // Exit if the source-frame is already visible
  if ($("#source-frame").hasClass("visible")) return;

  // Show the corresponding li in the source list
  var index = $(".pagination .selected").parent().index();
  // Exit if it's the last page (the "more projects" page)
  if (index == $(".pagination li").length - 1) return;
  $("#source-frame li:eq("+ parseInt(index, 10) +")").addClass("visible");

  $("#source-frame").addClass("visible");
}

spinkit.updateSlideshowForSelectedPage = function() {
  var index = $(".pagination .selected").parent().index(),
      classIndex = parseInt(index+1, 10);
  $("body").attr("class", "active" + classIndex);
  
  $("#spinners .selected").removeClass("selected");
  $("#spinners li:nth-child(" + classIndex + ")").addClass("selected");

  spinkit.addAdImpression();
}

spinkit.dismissSourceFrame = function() {
  if (!$("#source-frame .visible")[0]) return;
  $("#source-frame .visible").removeClass("visible");
  $("#source-frame").removeClass("visible");
  spinkit.refreshAd();
}

spinkit.addAdImpression = function() {
  // Refresh ad
  spinkit.adImpressions++;
  if (spinkit.adImpressions < 3) return;
  // Show new ad if you've seen three or more ads
  spinkit.refreshAd();
}

spinkit.refreshAd = function() {
  if (!$("#carbonads")[0]) return;
  if (typeof _carbonads !== 'undefined') _carbonads.refresh();
  spinkit.adImpressions = 0;
}
