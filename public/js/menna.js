$( document ).ready(function() {

    // Code for making tabs active based on the url
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        window.location.hash =  $(e.target).attr("href") +'x';
        if($(".search-box").length){
            $(".hoapa-open-ads-table tbody tr").show();
            $(".search-box").val("");
            $(".search-box").focus();
        }
    });

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
    // real-time search function
    if($(".search-box").length){
        $(".search-box").keyup(function(){
            search = $(this).val().toLowerCase();
            $(".hoapa-open-ads-table tbody tr").show().filter(function() {
                var text = $(this).text().toLowerCase();
                return !~text.indexOf(search);
            }).hide();
        });
    }
});
