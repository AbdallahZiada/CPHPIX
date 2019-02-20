$(function(){
    //code for the main slider
    $('#carouselExampleControls').carousel('pause');
    $(".hr0").css("transform","rotate(10deg)");
    $(".leftcaro0>p").addClass("leftcaroresp");
    $(".rightcaro0>p").addClass("rightcaroresp");
    $('#carouselExampleControls').on('slid.bs.carousel', function (event) {
        //make animation
      $(".hr"+event.to).css("transform","rotate(10deg)");
      $(".leftcaro"+event.to+">p").addClass("leftcaroresp");
      $(".rightcaro"+event.to+">p").addClass("rightcaroresp");
        //rest
      $(".hr"+event.from).css("transform","rotate(0deg)");
      $(".leftcaro"+event.from+">p").removeClass("leftcaroresp");
      $(".rightcaro"+event.from+">p").removeClass("rightcaroresp");
    });
    //end for the main slider
    //start the masterful section animation
    var height = 0;
    var heightthirdline=0;
    
    $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
        var mylimit = 1650;
    if (scrollTop > mylimit) 
    {
        height=scrollTop-mylimit;
        if(height<150)
        {
            height += 30    ;
            console.log("down");
        }
        if(height>150)
            {
               height=150; 
            }
        $('.scondeline,.firstline').css({
        'height': height + "px"
        });
        heightthirdline=height/2;
        $('.thirdline').css({
        'height': heightthirdline + "px"
        });
        console.log(height);
    }
    else if(scrollTop > mylimit)
    {
            height -= 30    ;
            console.log("up");
    }
});
});