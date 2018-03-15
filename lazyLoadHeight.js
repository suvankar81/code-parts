    var lazyLoadScroll = function(e){
        var mainHeight=document.getElementsByTagName("main")[0].offsetHeight,
        windowHeight= window.innerHeight,
        scrollPosition=document.getElementsByTagName("main")[0].scrollTop;
        console.log(mainHeight+','+windowHeight+','+scrollPosition);
    }
    document.getElementsByTagName("main")[0].addEventListener("scroll", lazyLoadScroll);
