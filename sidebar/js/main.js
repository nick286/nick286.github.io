
$(document).ready(function(){
    $(".sidebarBtn").on("click", function(){
        $(".sidebar").toggleClass("active");
        $(".sidebarBtn").toggleClass("toggle");
    })
})