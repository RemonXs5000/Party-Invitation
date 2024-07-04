
/* start of Home Section EventLisenters */
$(".menu").on("click",function(){
    $(".sidebar").animate({
        width : "20%" , 
    },500)
    $(".menu").hide()
})

$(".close").on("click",function(){
    $(".sidebar").animate({
        width : 0 , 
    },500)
    $(".menu").show(500)
})


/* start of Home Section EventLisenters */
$(".singerCard").on("click" , function(event){
    const Singer = $(event.currentTarget);
    Singer.children(".SingerDisc").slideToggle(1000);
})

/* start of Counter Section functions */

// getting millisecond until 27/7
let CountDownDate = new Date("July 27,2024 23:59:59").getTime();  

let counter =setInterval(()=>{
    // Getting the Difference Time between now and date 27/7/2024
    let DateNow = new Date().getTime();  
    let DateDiff = CountDownDate - DateNow ; 
    let days = Math.floor(DateDiff/(1000*60*60*24))
    let hours = Math.floor((DateDiff % (1000*60*60*24)) / (1000*60*60))
    let min = Math.floor((DateDiff % (1000*60*60)) / (1000*60))
    let sec = Math.floor((DateDiff % (1000*60)) / (1000))
    $('.days').text(days + " D");
    $('.hours').text(hours + " H")
    $('.min').text(min + " M")
    $('.sec').text(sec + " S")
    
},1000)



/* start of Counter Section functions/EventLisenters */

$("#userMsg").on("input" , function(){
    let msgLength =  $("#userMsg").val().length ; 
    if(msgLength >= 101) {
        $(".msgbtn").addClass("disabled") ; 
    }
    else{
        $(".msgbtn").removeClass("disabled");
        $(".CharecterCounter").text(100-msgLength); 
    } 
})