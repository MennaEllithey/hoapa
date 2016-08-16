$( document ).ready(function() {
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
    });

if( $("#dialog-work-profile-activated").length){
$(window).load(function(){
                    $("#dialog-work-profile-activated").modal("show");
                })
}