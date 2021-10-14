'use strict';

$(function(){
  
    new fullpage('#fullpage', {
        //options here
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
        menu: '#gnb',
        autoScrolling:true,
        scrollHorizontally: true,
        navigation: true,
    });
    
    //methods
    fullpage_api.setAllowScrolling(true);

})


