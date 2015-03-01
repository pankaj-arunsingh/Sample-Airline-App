(function(){

var app = angular.module('airline', [ ]);


  app.controller('formsControl', ['$scope', function($scope) {
    $scope.formInfo = {};

var userData=[{name:'Vijay Dhanabalan',empId:'552250',email:'vijay.dhanabalan@tcs.com'},{name:'Amarjyoti Deka',empId:'399045',email:'amarjyoti.deka@tcs.com'},{name:'Pankaj Singh',empId:'759774',email:'Pankaj.singh7@tcs.com'},{name:'Nirmala Ayyavu',empId:'538884',email:'nirmala.ayyavu@tcs.com'},{name:'Naresh Gupta',empId:'577325',email:'nareshchand.g@tcs.com'}];
    $scope.saveData = function() {
var flag=0;
  for(var j=0;j<userData.length;j++)
{
if((userData[j].name==$scope.formInfo.Name)&&(userData[j].empId==$scope.formInfo.Password)){
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

    };
$scope.signUp=function(){
$('#loginbox').hide(); 
$('#signupbox').show();


};
$scope.signIn=function(){
$('#signupbox').hide(); 
$('#loginbox').show();
};
  }]);

app.controller("PanelController", function(){

this.tab = 1;
this.selectTab= function(setTab){
this.tab = setTab;
};
this.isSelected = function(checkTab) {
return this.tab===checkTab;
};
});

app.controller('flightListController',function(){

this.flights=flightsList;
});

var flightsList=[
{name:'Jet Airways',price:2000,departure:'oo:50',arrival:'03:00',duration:'2h 10m',stop:'Banglore',image:'images/flight1.jpg',rating:'Average 4.5/5'},
{name:'Dfuck',price:300,departure:'01:50',arrival:'04:00',duration:'3h 10m',stop:'Non Stop',image:'images/flight2.jpg',rating:'Average 4.1/5'},
{name:'Indian Airlines',price:1100,departure:'05:10',arrival:'08:00',duration:'3h 50m',stop:'Lucknow',image:'images/flight3.jpg',rating:'Average 4.0/5'},
{name:'Air Asia',price:450,departure:'08:20',arrival:'11:00',duration:'3h 40m',stop:'Varanasi',image:'images/flight4.jpg',rating:'Average 3.9/5'},
{name:'INDIGO',price:600,departure:'11:50',arrival:'15:00',duration:'3h 10m',stop:'Banglore',image:'images/flight5.jpg',rating:'Average 4.3/5'},
{name:'Spice Jet',price:1000,departure:'13:10',arrival:'05:00',duration:'4h 40m',stop:'Mumbai',image:'images/flight6.jpg',rating:'Average 3.8/5'},
];

  
})();