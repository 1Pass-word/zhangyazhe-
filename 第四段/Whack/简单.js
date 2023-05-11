     // 定时器速度
     var speed = 1000;
     // 老鼠定时器 
     function mouseout() {
         // 分数
         var fraction = $(".fraction").html();
         //判断分数改变速度
         if (fraction <= 10) {
             clearInterval(timer);
             speed = 2000;
             timer = setInterval(mouseout, speed);
         } else if (fraction >= 20 && fraction < 30) {
             clearInterval(timer);
             speed = 1500;
             timer = setInterval(mouseout, speed);
         } else if (fraction >= 30 && fraction < 40) {
             clearInterval(timer);
             speed = 1000;
             timer = setInterval(mouseout, speed);
         } else if (fraction >= 40) {
             clearInterval(timer);
             speed = 500;
             timer = setInterval(mouseout, speed);
         }
         //所有隐藏
         hole.children().stop().hide();
         // 老鼠的随机数
         var x = Math.floor(Math.random() * 9);
         var y = Math.floor(Math.random() * 9);
         var z = Math.floor(Math.random() * 9);
         //猫的随机数
         var k = Math.floor(Math.random() * 9);

         if (
             x === y ||
             x === z ||
             y === z ||
             x === k ||
             y === k ||
             z === k
         ) {
             mouseout();
         } else {
             // 老鼠显示
             hole.eq(x).children(".mouse").stop().fadeIn();
             hole.eq(y).children(".mouse").stop().fadeIn();
             hole.eq(z).children(".mouse").stop().fadeIn();
             // 猫显示
             hole.eq(k).children(".cat").stop().fadeIn();
         }
     }