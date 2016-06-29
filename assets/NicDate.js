function NicDate(datePlus)
{

var currentTime = new Date();
if (datePlus>0){
currentTime.setDate(currentTime.getDate() + datePlus);
}
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
hours="1:30 PM to Midnight";
Dday="Sun";
break;
case 1:
hours="7:45 AM to Midnight";
Dday="Mon";
break;
case 2:
hours="7:45 AM to Midnight";
Dday="Tue";
break;
case 3:
hours="7:45 AM to Midnight";
Dday="Wed";
break;
case 4:
hours="7:45 AM to Midnight";
Dday="Thu";
break;
case 5:
hours="7:45 AM to 5:00 PM";
Dday="Fri";
break;
case 6:
hours="11:00 AM to 5:00 PM";
Dday="Sat";
}
}

function eightfive()
{
switch (day){
case 0:
hours="CLOSED";
Dday="Sun";
break;
case 1:
hours="8:00 AM to 5:00 PM";
Dday="Mon";
break;
case 2:
hours="8:00 AM to 5:00 PM";
Dday="Tue";
break;
case 3:
hours="8:00 AM to 5:00 PM";
Dday="Wed";
break;
case 4:
hours="8:00 AM to 5:00 PM";
Dday="Thu";
break;
case 5:
hours="8:00 AM to 5:00 PM";
Dday="Fri";
break;
case 6:
hours="CLOSED";
Dday="Sat";
}
}

termhours();




if (year==2014){
if (month==1 && date<15) {eightfive();} 
if (month==1 && date>16) {termhours();} 
if (month==1 && date==20) {hours="MLK DAY 5:00 PM to Midnight";}
if ((month==3 && date>14) && (month==3 && date<23))  {eightfive();} 
if (month==3 && date==23) {hours="7:00 PM to Midnight";}
if (month==4 && date==17) {hours="7:45 AM to 8:00 PM";} 
if (month==4 && date==18) {hours="EASTER CLOSED";} 
if (month==4 && date==19) {hours="EASTER CLOSED";} 
if (month==4 && date==20) {hours="EASTER CLOSED";} 
if (month==5 && date==8) {hours="7:45 AM to 5:00 PM";} 
if (month==5 && date==9) {hours="8:00 AM to 5:00 PM";} 
if (month==5 && date>9) {eightfive();}
if (month==5 && date==26) {hours="MEMORIAL DAY CLOSED";} 
if (month>5 && month<9) {eightfive();}
 
if (month==8 && date>25) {termhours();} 
if (month==9 && date==1) {hours="CLOSED Labor Day Weekend";} 
if (month==10 && date==9) {hours="7:45 AM to 5:00 PM";} 
if (month==10 && date==10) {hours="Mid-Fall Break CLOSED";} 
if (month==10 && date==18) {hours="Homecoming 9:00 AM to 12:00 Noon";} 
if (month==10 && date==18 && hour>12 ) {hours="Homecoming CLOSED";} 
if (month==11 && date==25) {hours="7:45 AM to 5:00 PM";} 
if (month==11 && date==26) {hours="8:00 AM to 5:00 PM";} 
if (month==11 && date==27) {hours="Thanksgiving CLOSED";} 
if (month==11 && date==28) {hours="Thanksgiving Weekend CLOSED";} 
if (month==11 && date==29) {hours="Thanksgiving Weekend CLOSED";} 
if (month==11 && date==30) {hours="7:00 PM to Midnight";} 
if (month==12 && date>11) {eightfive();} 
if (month==12 && date>24) {hours="Christmas Break CLOSED";} 
}

if (year==2015){
if (month==1 && date<5) {hours="CLOSED";} 
if (month==1 && date<14) {eightfive();} 
if (month==1 && date>15) {termhours();} 
if (month==1 && date==19) {hours="MLK DAY 5:00 PM to Midnight";}
if ((month==3 && date>14) && (month==3 && date<21))  {eightfive();} 
if (month==3 && date==22) {hours="7:00 PM to Midnight";}
if (month==4 && date==2) {hours="7:45 AM to 8:00 PM";} 
if (month==4 && date==3) {hours="EASTER CLOSED";} 
if (month==4 && date==4) {hours="EASTER CLOSED";} 
if (month==4 && date==5) {hours="EASTER CLOSED";} 
if (month==5 && date==7) {hours="7:45 AM to 5:00 PM";} 
if (month==5 && date==8) {hours="8:00 AM to 5:00 PM";} 
if (month==5 && date>9) {eightfive();}
if (month==5 && date==25) {hours="MEMORIAL DAY CLOSED";} 
if (month>5 && month<9) {eightfive();}

if (month==8 && date>30) {termhours();} 
if (month==9 && date==7) {hours="CLOSED Labor Day Weekend";} 
if (month==10 && date==3) {hours="Homecoming 9:00 AM to 12:00 Noon";} 
if (month==10 && date==3 && hour>12 ) {hours="Homecoming CLOSED";} 
if (month==10 && date==15) {hours="7:45 AM to 5:00 PM";} 
if (month==10 && date==16) {hours="Mid-Fall Break CLOSED";} 
if (month==11 && date==24) {hours="7:45 AM to 5:00 PM";} 
if (month==11 && date==25) {hours="8:00 AM to 5:00 PM";} 
if (month==11 && date==26) {hours="Thanksgiving CLOSED";} 
if (month==11 && date==27) {hours="Thanksgiving Weekend CLOSED";} 
if (month==11 && date==28) {hours="Thanksgiving Weekend CLOSED";} 
if (month==11 && date==29) {hours="7:00 PM to Midnight";} 
if (month==12 && date==17) {hours="7:45 AM to 5:00 PM";} 
if (month==12 && date>17) {eightfive();} 
if (month==12 && date>23) {hours="Christmas Break CLOSED";} 
}

if (year==2016){
if (month==1 && date<4) {hours="CLOSED";} 
if (month==1 && date<13) {eightfive();} 
if (month==1 && date>12) {termhours();} 
if (month==1 && date==18) {hours="MLK DAY 5:00 PM to Midnight";}
if ((month==3 && date>11) && (month==3 && date<20))  {eightfive();} 
if (month==3 && date==20) {hours="7:00 PM to Midnight";}
if (month==3 && date==24) {hours="7:45 AM to 8:00 PM";} 
if (month==3 && date==25) {hours="EASTER CLOSED";} 
if (month==3 && date==26) {hours="EASTER CLOSED";} 
if (month==3 && date==27) {hours="EASTER CLOSED";} 
if (month==5 && date==5) {hours="7:45 AM to 5:00 PM";} 
if (month==5 && date==6) {hours="8:00 AM to 5:00 PM";} 
if (month==5 && date>6) {eightfive();}
if (month==5 && date==30) {hours="MEMORIAL DAY CLOSED";} 
if (month>5 && month<9) {eightfive();}

if (month==8 && date>=29) {termhours();} 
if (month==9 && date==5) {hours="CLOSED Labor Day Weekend";} 
if (month==10 && date==8) {hours="Homecoming 9:00 AM to 12:00 Noon";} 
if (month==10 && date==8 && hour>12 ) {hours="Homecoming CLOSED";} 
if (month==10 && date==15) {hours="7:45 AM to 5:00 PM";} 
if (month==10 && date==14) {hours="Mid-Fall Break CLOSED";} 
if (month==11 && date==22) {hours="7:45 AM to 5:00 PM";} 
if (month==11 && date==23) {hours="8:00 AM to 5:00 PM";} 
if (month==11 && date==24) {hours="Thanksgiving CLOSED";} 
if (month==11 && date==25) {hours="Thanksgiving Weekend CLOSED";} 
if (month==11 && date==26) {hours="Thanksgiving Weekend CLOSED";} 
if (month==11 && date==27) {hours="7:00 PM to Midnight";} 
if (month==12 && date==17) {hours="7:45 AM to 5:00 PM";} 
if (month==12 && date>17) {eightfive();} 
if (month==12 && date>22) {hours="Christmas Break CLOSED";} 
}

var cleandate = month +"/"+day+"/"+year +"<br>";
var today = Dday+"  "+hours;

if (month==7 && date==4) {today="Happy 4th of July  CLOSED";} 
if (month==12 && date==25) {today="MERRY CHRISTMAS  CLOSED";}
if (month==1 && date==1) {today="HAPPY NEW YEAR  CLOSED";} 

var display=today;

return display;

}

