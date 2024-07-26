var love = setInterval(function(){
    var r_num = Math.floor(Math.random() * 40) + 1;
      var r_size = Math.floor(Math.random() * 65) + 10;
      var r_left = Math.floor(Math.random() * 100) + 1;
      var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;
    $('.bg_heart').append("<div class='heart' style='width:"+r_size+"px;height:"+r_size+"px;left:"+r_left+"%;background:rgba(255,"+(r_bg-25)+","+r_bg+",1);-webkit-animation:love "+r_time+"s ease;-moz-animation:love "+r_time+"s ease;-ms-animation:love "+r_time+"s ease;animation:love "+r_time+"s ease'></div>");
    
    $('.bg_heart').append("<div class='heart' style='width:"+(r_size-10)+"px;height:"+(r_size-10)+"px;left:"+(r_left+r_num)+"%;background:rgba(255,"+(r_bg-25)+","+(r_bg+25)+",1);-webkit-animation:love "+(r_time+5)+"s ease;-moz-animation:love "+(r_time+5)+"s ease;-ms-animation:love "+(r_time+5)+"s ease;animation:love "+(r_time+5)+"s ease'></div>");
    
    
  },500);
  
  var i = 0;
const newLocal = "Hi Medicine! <<               Happiest wala Birthday my dear!🎂🎂🎈🎁✨🎉 <<<                                                                                          > Happy birthday Sneha!  < You deserve nothing more than all the success and happiness in your life.   <<                   I hope you have an amazing day filled with the things you love. < Wish you many many happy returns of the day! <<                           I will always pray for you that Tumhari sari wishes puri ho tum apni lyf me logo ke liye ek success ki example bno                                                                   << Once again Happy Birthday Sneha       >> Sneha!<<                                                      I Really Miss U Alot                    << Bs jaha bhi rhna khush rhna                                                              >I Love U <Medicine|    << i miss you!              <<<< Many Many returns of the day  <<from Sardard.!<<<<<<🎂🎈🎉✨🎁🎁🎁❤️❤️";
  var txt1 = newLocal;
  var speed = 70;
  typeWriter();
  function typeWriter() {
    if (i < txt1.length) {        
       if(txt1.charAt(i)=='<')
        document.getElementById("text1").innerHTML += '</br>'
      else if(txt1.charAt(i)=='>')
        document.getElementById("text1").innerHTML = ''
      else if(txt1.charAt(i)=='|')
        {
        
  
        }
      else
        document.getElementById("text1").innerHTML += txt1.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }