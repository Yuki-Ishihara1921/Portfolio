$(function() {
    $("#menu-toggle").click(function(e) {
        e.preventDefault()
        $("#sidebar").toggleClass("toggled")
        $("#menu-toggle > i.fa-bars, #menu-toggle > i.fa-times").toggleClass("fa-bars fa-times")
    })

    $("a[href^='#']").click(function() {
        const speed = 50
        const href = $(this).attr("href")
        const target = $(href == "#" || href == "" ? 'html' : href)
        const position = target.offset().top
        $('body, html').animate({ scrollTop: position }, speed, "swing")
        if($('div').hasClass('toggled')) {
            $("#menu-toggle > i.fa-bars, #menu-toggle > i.fa-times").toggleClass("fa-bars fa-times")
            $("div").removeClass("toggled")
        }
        return false
    })
})