
function getInfo() {
    alert($('#example').html());
    alert($('p').text());
}

function changeDiv() {
    $('#example').html('new div content')
}

function changeOne(){
    $('#para1').text('some new tekst')
}

function changeClass() {
    $(".classA").html("<a href='https://google.com'> Now it' link!</a>")
}








// $(function() {
//     $("#showButton").click(function() {
//         $("p").show("slow")
//     });
//     $("#hideButton").click(function() {
//         $("p").hide("slow", "linear")
//     });
//     $("#toggleButton").click(function() {
//         $("p").toggle("fast", afterCompletion)
//     });
// });

// function afterCompletion() {
//     console.log("animation finished");
// }




































function action1(){
   // $("div p").replaceWith(replacementFn)
    //$('button').html('new')
    $("p").html("<a href='https://google.com'> Now it' link!</a>")
}


function replacementFn() {
    return "<a href='http://www.youtube.com'>" + $(this).text() + '</a>';
}

function action2() {
    $("a").hover(hoverToggleUp, hoverToggleDown);
   
}

function hoverToggleUp(){
    $(this).css("font-size", "20px")
}
function hoverToggleDown(){
    $(this).css("font-size", "5px")
}

function action3 () {
    $('p').fadeOut();
    $('a').fadeOut();
    $("button").slideUp();

} 

function insertAfter() {
    $("button").height(440);
}

