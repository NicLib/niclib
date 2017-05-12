function NicDate(datePlus){
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

    function termhours(){
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

    function eightfive(){
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


    if (year==2017){
        //Academic 16-17
        if (month==1 && date<2) {hours="CLOSED";}
        if (month==1 && date<11) {eightfive();}
        if (month==1 && date>=11) {termhours();}
        if (month==1 && date==16) {hours="MLK DAY 5:00 PM to Midnight";}
        if ((month==3 && date>10) && (month==3 && date<19))  {eightfive();}
        if (month==3 && date==19) {hours="7:00 PM to Midnight";}
        if (month==4 && date==13) {hours="7:45 AM to 5:00 PM";}
        if (month==4 && date==14) {hours="GOOD FRIDAY CLOSED";}
        if (month==4 && date==15) {hours="EASTER CLOSED";}
        if (month==4 && date==16) {hours="EASTER CLOSED";}
        if (month==5 && date==5) {hours="7:45 AM to 5:00 PM";}
        if (month==5 && date>=6) {eightfive();}
        if (month==5 && date==29) {hours="MEMORIAL DAY CLOSED";}
        if (month>5 && month<9) {eightfive();}

        //Academic 17-18
        if (month==8 && date>=28) {termhours();}
        if (month==9 && date==4) {hours="CLOSED Labor Day Weekend";}
        if (month==10 && date==5) {hours="7:45 AM to 5:00 PM";}
        if (month==10 && date==6) {hours="Mid-Fall Break CLOSED";}
        if (month==10 && date==14) {hours="Homecoming 9:00 AM to 12:00 Noon";}
        if (month==10 && date==14 && hour>12 ) {hours="Homecoming CLOSED";}
        if (month==11 && date==21) {hours="7:45 AM to 5:00 PM";}
        if (month==11 && date==22) {hours="8:00 AM to 5:00 PM";}
        if (month==11 && date==23) {hours="Thanksgiving CLOSED";}
        if (month==11 && date==24) {hours="Thanksgiving Weekend CLOSED";}
        if (month==11 && date==25) {hours="Thanksgiving Weekend CLOSED";}
        if (month==11 && date==26) {hours="7:00 PM to Midnight";}
        if (month==12 && date==15) {hours="7:45 AM to 5:00 PM";}
        if (month==12 && date>15) {eightfive();}
        if (month==12 && date>22) {hours="Christmas Break CLOSED";}
    }

    if (year==2018){
        //Academic 17-18
        if (month==1 && date<1) {hours="CLOSED";}
        if (month==1 && date<10) {eightfive();}
        if (month==1 && date>=10) {termhours();}
        if (month==1 && date==15) {hours="MLK DAY 5:00 PM to Midnight";}
        if ((month==3 && date>=10) && (month==3 && date<18))  {eightfive();}
        if (month==3 && date==18) {hours="7:00 PM to Midnight";}
        if (month==3 && date==29) {hours="7:45 AM to 5:00 PM";}
        if (month==3 && date==30) {hours="GOOD FRIDAY CLOSED";}
        if (month==3 && date==31) {hours="EASTER CLOSED";}
        if (month==4 && date==1) {hours="EASTER CLOSED";}
        if (month==5 && date==4) {hours="7:45 AM to 5:00 PM";}
        if (month==5 && date>4) {eightfive();}
        if (month==5 && date==28) {hours="MEMORIAL DAY CLOSED";}
        if (month>=5 && month<9) {eightfive();}

        //Academic 18-19
        if (month==8 && date>=29) {termhours();}
        if (month==9 && date==5) {hours="CLOSED Labor Day Weekend";}
        if (month==10 && date==8) {hours="Homecoming 9:00 AM to 12:00 Noon";}
        if (month==10 && date==8 && hour>12 ) {hours="Homecoming CLOSED";}
        if (month==10 && date==13) {hours="7:45 AM to 5:00 PM";}
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
