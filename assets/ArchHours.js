
<!--
var currentTime = new Date();
var day = currentTime.getDay();
var month = currentTime.getMonth() + 1;
var date = currentTime.getDate();
var year = currentTime.getFullYear();
var hour = currentTime.getHours();
var hours;
var Dday;

function termhours()
{
switch (day){
case 0:
hours="CLOSED";
Dday="Sun:";
break;
case 1:
hours="9:00 AM to Noon, 1:00 PM to 3:00 PM";
Dday="Mon:";
break;
case 2:
hours="9:00 AM to Noon, 1:00 PM to 3:00 PM";
Dday="Tue:";
break;
case 3:
hours="9:00 AM to Noon, 1:00 PM to 3:00 PM";
Dday="Wed:";
break;
case 4:
hours="9:00 AM to Noon, 1:00 PM to 3:00 PM";
Dday="Thu:";
break;
case 5:
hours="9:00 AM to Noon, 1:00 PM to 3:00 PM";
Dday="Fri:";
break;
case 6:
hours="CLOSED";
Dday="Sat:";
}
}

function mayhours()
{
switch (day){
case 0:
hours="CLOSED";
Dday="Sun:";
break;
case 1:
hours="CLOSED";
Dday="Mon:";
break;
case 2:
hours="10:00 AM to Noon, 1:00 PM to 2:00 PM";
Dday="Tue:";
break;
case 3:
hours="10:00 AM to Noon, 1:00 PM to 2:00 PM";
Dday="Wed:";
break;
case 4:
hours="CLOSED";
Dday="Thu:";
break;
case 5:
hours="10:00 AM to Noon, 1:00 PM to 2:00 PM";
Dday="Fri:";
break;
case 6:
hours="CLOSED";
Dday="Sat:";
}
}

function junehours()
{
switch (day){
case 0:
hours="CLOSED";
Dday="Sun:";
break;
case 1:
hours="By Appointment Only";
Dday="Mon:";
break;
case 2:
hours="By Appointment Only";
Dday="Tue:";
break;
case 3:
hours="By Appointment Only";
Dday="Wed:";
break;
case 4:
hours="By Appointment Only";
Dday="Thu:";
break;
case 5:
hours="By Appointment Only";
Dday="Fri:";
break;
case 6:
hours="CLOSED";
Dday="Sat:";
}
}

termhours();
if (year==2012){if (month==5 && date>6) {mayhours();}
if (month==5 && date==28) {hours="MEMORIAL DAY CLOSED";} 
if (month==6 || month==7 || month==8) {junehours();}
if (month==6 && date==18) {hours="9:00 AM to Noon, 1:00 PM to 3:00 PM";}
if (month==6 && date==19) {hours="9:00 AM to Noon, 1:00 PM to 3:00 PM";}
if (month==6 && date==20) {hours="9:00 AM to Noon, 1:00 PM to 3:00 PM";}
if (month==9 && date>3) {termhours();} 
if (month==9 && date==3) {hours="Labor Day CLOSED";} 
if (month==10 && date==19) {hours="Mid-Fall Break CLOSED";}  
if (month==10 && date==6 && hour>12 ) {hours="Homecoming CLOSED";} 
if (month==11 && date==22) {hours="Thanksgiving CLOSED";}  
if (month==11 && date==23) {hours="CLOSED";} 
if (month==12 && date>22) {hours="Christmas Break CLOSED";} 
}

if (year==2013){
if (month==1 && date<12) {junehours();} 
if (month==1 && date==21) {hours="MLK DAY CLOSED";}
if ((month==3 && date>18) && (month==3 && date<22))  {hours="By Appointment Only";} 
if (month==3 && date==23) {hours="CLOSED";}
if (month==3 && date==29) {hours="EASTER CLOSED";} 
if (month==3 && date==30) {hours="EASTER CLOSED";} 
if (month==3 && date==31) {hours="EASTER CLOSED";} 
if (month==5 && date>4) {mayhours();} 
if (month==5 && date==27) {hours="MEMORIAL DAY CLOSED";} 
if (month==6 || month==7 || month==8) {junehours();} 
}

if (year==2014){
if (month==1 && date<12) {junehours();} 
if (month==1 && date==20) {hours="MLK DAY CLOSED";}
if ((month==3 && date>18) && (month==3 && date<22))  {hours="By Appointment Only";} 
if (month==3 && date==23) {hours="CLOSED";}
if (month==4 && date==18) {hours="EASTER CLOSED";} 
if (month==4 && date==19) {hours="EASTER CLOSED";} 
if (month==4 && date==20) {hours="EASTER CLOSED";} 
if (month==5 && date>4) {mayhours();} 
if (month==5 && date==26) {hours="MEMORIAL DAY CLOSED";} 
if (month==6 || month==7 || month==8) {junehours();} 
}

var cleandate = month +"/"+day+"/"+year +"<br>";
var today = Dday+"  "+hours;

if (month==7 && date==4) {today="Happy 4th of July  CLOSED";} 
if (month==12 && date==25) {today="MERRY CHRISTMAS  CLOSED";}
if (month==1 && date==1) {today="HAPPY NEW YEAR  CLOSED";} 

var display=""+today+"";

document.write(display);

//-->


//There should be nothing below this point! If there is, then a virus or malware may have added it.. remove it and check ALL java files.
