$(function(){
$("#signupLink").click(function(){
$('#loginbox').hide(); 
$('#signupbox').show();
});
$("#signinlink").click(function(){
$('#signupbox').hide(); 
$('#loginbox').show();

});
var userData=[{name:'Vijay Dhanabalan',empId:'552250',email:'vijay.dhanabalan@tcs.com'},{name:'Amarjyoti Deka',empId:'399045',email:'amarjyoti.deka@tcs.com'},{name:'Pankaj Singh',empId:'759774',email:'Pankaj.singh7@tcs.com'},{name:'Nirmala Ayyavu',empId:'538884',email:'nirmala.ayyavu@tcs.com'},{name:'Naresh Gupta',empId:'577325',email:'nareshchand.g@tcs.com'}];

$("#loginBtn").click(function(){
var userName=document.getElementById("userName").value;
 var  password=document.getElementById("password").value;
var flag=0;

for(var j=0;j<userData.length;j++)
{
if((userData[j].name==userName)&&(userData[j].empId==password)){
flag=1;
break;
}
}
if(flag==1){
alert("valid");
return true;

}
else{
$(".alert").show();
alert("Invalid");
location.reload();
 return false;

}



});

});