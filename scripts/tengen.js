$(".menu-btn").click(function(){
  $("body").toggleClass("menu-nav-open");
});
$(".menu-close").click(function(){
  $("body").toggleClass("menu-nav-open");
});
$(".btn-booking").click(function(){
  $("body").toggleClass("booking-active");
});
$(".close-booking").click(function(){
  $("body").toggleClass("booking-active");
});
function HideContent(d) {
document.getElementById(d).style.display = "none";
}
function ShowContent(d) {
document.getElementById(d).style.display = "block";
}
function ReverseDisplay(d) {
if(document.getElementById(d).style.display == "none") { document.getElementById(d).style.display = "block"; }
else { document.getElementById(d).style.display = "none"; }
}
$('#gform').on('submit', function(e) {
  $('#gform *').fadeOut(2000);
  $('#gform').prepend('您的預約已發送, 我們的客服會盡快與你聯系');
  });