let name;
let levelAHeroImgs=["https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_%28comics_character%29.png","https://www.sideshow.com/storage/product-images/904599/iron-man-mark-lxxxv__silo.png","https://vignette.wikia.nocookie.net/vsbattles/images/2/2f/Captain_Marvel_%28Earth-1600%29.png/revision/latest?cb=20190504141541"];
let levelBHeroImgs=["https://purepng.com/public/uploads/large/thor-fighting-with-his-hammer-1m5.png","https://i.ya-webdesign.com/images/wolverine-comic-png.png","http://pngimg.com/uploads/spider_man/spider_man_PNG44.png"];
let levelCHeroImgs=["https://freepngimg.com/thumb/antman/20093-3-ant-man-transparent-image.png","https://upload.wikimedia.org/wikipedia/en/thumb/5/52/JeanGreyPhoenix.png/250px-JeanGreyPhoenix.png","http://pngriver.com/wp-content/uploads/2018/03/Download-Hawkeye-PNG-Photo-284-1000x831.png"];
let points=0;
$(".main").hide();
$(".beginQuiz").click(function(){
    $(".main").show();
    $(".preScreen").hide();
    name=$("input").val();
    $(".name").html(`<h1>Welcome, ${name}, let's begin your exam. Please, be honest in your answers.</h1>`);
    
});
$(".answerA").click(function(){
    points=points+1;
});
$(".answerB").click(function(){
    points=points+2;
});
$(".answerC").click(function(){
    points=points+3;
});
$(".answerD").click(function(){
    points=points+4;
});

$(".one").click(function(){
   $(".one").hide(); 
});
$(".two").click(function(){
   $(".two").hide(); 
});
$(".three").click(function(){
   $(".three").hide();
   if(points>8){
    for (var tier1 of levelAHeroImgs){
            $(".name").html(`<h1>${name},You've earned ${points} points Choose one of the following elite heroes.</h1>`);
        $(".hero").append(`<img src=${tier1}>`);
    }
   }else if(points>6){
       for (var tier2 of levelBHeroImgs){
               $(".name").html(`<h1>${name},You've earned ${points} points Choose one of the following pretty cool heroes.</h1>`);
        $(".hero").append(`<img src=${tier2}>`);
    }
   }else{
     for (var tier3 of levelCHeroImgs){
             $(".name").html(`<h1>${name},you've earned ${points} points Choose one of the following so-called heroes.</h1>`);
        $(".hero").append(`<img src=${tier3}>`);
    }   
   }
});
$(".hero").click(function(){
    $(".name").hide();
$(".hero").html('<img  src=https://media2.giphy.com/media/NUsKoYiGm1RPHl1eWM/giphy.gif?cid=790b76115d1506e5306c465732b8927b&rid=giphy.gif>');
$(".hero").append(`<h1>Welcome to the league of superheroes!</h1>`);

});
