function checkCreds() /*code for the checkCreds function of page 1 */
{
   alert("check creds")

var eventName = document.getElementById("eventName").value;
var theme = document.getElementById("theme").value;
var peopleCount = document.getElementById("numPart").value;
var eventInfo = eventName + " " + theme;
alert(eventName + " " + theme + " " + peopleCount);

if(eventInfo.length > 10 || eventInfo.length <4)
    {
        document.getElementById("loginStatus").innerHTML = "Invalid length on event+theme"; 
    }
if (peopleCount >10 || peopleCount<2)
    {
        document.getElementById("loginStatus").innerHTML = "Invalid number of participants"; 
    }

else if(eventInfo.length <= 20 || eventInfo.length <=4)
    {
    document.getElementById("loginStatus").innerHTML = "event info " + eventInfo + " " + peopleCount;
    alert("Registration accepted!!! Please press the enter to proceed to next page...");
    location.replace("TABLES.html");
    }
}