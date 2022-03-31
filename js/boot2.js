$(document).ready(function(){
    console.log("hello");
    $(".icon").click(function(){
        $(".list_nav").slideToggle(2000);
    })
    $(window).scroll(function(){
        var x = $(this).scrollTop();
        console.log(x);
        if(x>2020){
            $(".UPPP").fadeIn(1000)
        }else{
            $(".UPPP").fadeOut(1000)
        }
        
        if(x>15){
            $("header").addClass("sticky");
        }else{
            $("header").removeClass("sticky");
        }
        // work plugins of count
        if(x>1730){
            $('.timer').countTo();
        }
       
    })

    // run Up Button

    $(".UPPP").click(function(){
        $("body,html").animate({
            scrollTop:0
        })
    })

    const newLocal = ".port li";
    $(newLocal).click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
       var filter_elemments=$(this).attr("id");
    if(filter_elemments == "all"){
     $(".images>div").fadeIn(1000);
    }else{
        $(".images >div").fadeOut(1000,function(){
            $(".images").contents().filter("."+filter_elemments).fadeIn();
        });
      
    }
    })
    $(".col_one ul li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        let d = $(this).data("value");
      $(".col_one>div div").fadeOut(2000,function(){
        $(".col_one>div").contents().filter("."+d).fadeIn(1000);
      });
     

    })


    // run popup magnatic

    $('.popp').magnificPopup({
         // child items selector, by clicking on it popup will open
        type: 'iframe'
        // other options
      });
    

      $('.took').slick({
        nextArrow:false,
        prevArrow:false,
        dots: true
      });


// run code of smooth scroll
$(".list_nav li a").click(function(){
    $("body,html").animate({
        scrollTop:$($(this).attr("href")).offset().top
    },2000)
})

// run code off overly spinner

$(".spinner_content .spinner").fadeOut(2000,function(){
    
    $(this).parent().fadeOut(2000);
    $("body").css("overflow","auto");
})
console.log($(".about").pageOffset().top)
})


// activation of wow librairy 
new WOW().init();