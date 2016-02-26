$(function(){
    $("#carousel-photos :first").addClass('current');
});

(function(){
    var carouselNext = function(){
        var $current = $("#carousel-photos a.current");
        var $next = $("#carousel-photos a.current").next();
        if ($next.length===0) {
            $next = $("#carousel-photos a:first");
        }
        $current.fadeOut(1000, function(){
            $(this).removeClass('current');
        });

        $next.fadeIn(800, function(){
            $(this).addClass('current');
        });
    };

    var carouselPrev = function(){
        var $current = $("#carousel-photos a.current");
        var $prev = $("#carousel-photos a.current").prev();
        if ($prev.length===0) {
            $prev = $("#carousel-photos a:last");
        }
        $current.fadeOut(1000, function(){
            $(this).removeClass('current');
        });

        $prev.fadeIn(800, function(){
            $(this).addClass('current');
        });
    }

    var carouse = function(){
        carouselNext();
        setTimeout(carouse, 6000);
    }

    $(function(){
        $("#next").click(carouselNext);
        $("#prev").click(carouselPrev);
        setTimeout(carouse, 6000);
    });
})();
