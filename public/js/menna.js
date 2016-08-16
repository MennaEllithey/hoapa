$( document ).ready(function() {

    // Code for making tabs active based on the url
    $(".nav-tabs a").click(function(){window.location.hash =  $(this).attr("href") +'x';});

    $(window).scroll(function () {
        if (window.innerWidth > 767) {
            if ($(window).scrollTop() > 600) {
                $("#showOnScroll").addClass('quotes-block');
            } else {
                $("#showOnScroll").removeClass('quotes-block');
            }
        }
    });
    if (location.hash) {
        currentTab = window.location.hash;
        currentTab = currentTab.replace("x","")
        $(".nav-tabs a[href='" + currentTab+"']").click();
    }

    // Activate popup right after jquery has loaded we can't wait for the window to load everything
    if( $("#dialog-work-profile-activated").length){
        $("#dialog-work-profile-activated").modal("show");
    }
});
