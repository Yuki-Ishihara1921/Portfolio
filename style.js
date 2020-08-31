$(function() {
    $("#menu-toggle").click(function(e) {
        e.preventDefault()
        $("#wrapper").toggleClass("toggled")
        $("#menu-toggle > i.fa-bars, #menu-toggle > i.fa-times").toggleClass("fa-bars fa-times")
    })

    $("a[href^='#']").click(function() {
        var speed = 500
        var href = $(this).attr("href")
        var target = $(href == "#" || href == "" ? 'html' : href)
        var position = target.offset().top
        $('body, html').animate({scrollTop:position}, speed, "swing")
        return false
    })
})