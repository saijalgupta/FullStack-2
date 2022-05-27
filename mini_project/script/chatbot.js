know={
       
    "HELLO":"hello sir<br> are you?<br> 1.information provider<br> 19.information reciever<br> press '1' or '19' .<hr>",
        "HI":"hello sir<br> are you?<br> 1.information provider<br> .information reciever<br> press '1' or '19' .<hr>",
    "1":"are you looking for<br>2.hospital management<br>3.blood bank management<br>4.blood donor management<br>press '2','3' or '4'",
        "2":"5.How hospitals can login/signup ?<br>6.How hospitals can make appointments for user?<br>7.How hospitals can edit their details ?<br>8.How to view hospital profile page?<br>9.Do we need to make an account to provide our details and for making appointments for users ?<br>press '5','6','7','8'or'9'<hr>",
        "3":"10.How to sign up to add details?<br>11.How to login to view profile page or edit/update details?<br>12.Do we need to make an account for provide details?<br>13.Do we need to update details of availablity of all the blood groups frequently?<br>press '10','11','12'or'13'<hr>",
        "4":"14.How to be a blood donor?<br>15.How to login/signup as a blood donor?<br>16.How to edit/update details?<br>17.How to view my profile page?<br>18.What are the details I can update frequently?<br>press '14',15',16',17'or'18'<hr>",
        "5":" Click on login/signup button on home page.Then choose hospital signup to signup or hospital login to login.<hr>",
        "6":" Click on login/signup button on home page, if you are new to website create account by choosing hospital signup. Once you sign up now click on log in button on home page then hospital login to add or update details and to make appointments.<hr>",
        "7":" Click on login button on home page then hospital login to redirect to profile page then click on 'Edit Account' to edit your details. After editing your details click on update.<hr>",
        "8":" Click on login button on home page then hospital login to redirect to profile page.<hr>",
        "9":"Yes! you need to signup once to add details and make appointments for users.<hr>",
        "10":"Click on login/signup button on home page.Then choose blood bank signup to signup and add details.<hr>",
        "11":"Click on login/signup button on home page.Then choose blood bank login to view/edit details.Yes! you need to make an account to add details.<hr>",
        "12":"Yes! you need to make an account to add details.<hr>",
        "13":" Yes! to make reliable data regarding availability of blood group you can update details frequently.<hr>",
        "14":" Click on login/signup button on home page.Then choose blood donor signup to signup and to add details regarding you(like blood group). You need to signup once then you will be a blood donor.<hr>",
        "15":"Click on login/signup button on home page.Then choose blood donor login to login and blood donor signup to signup as a blood donor.<hr>",
        "16":"Click on login/signup button on home page.Then choose blood donor login to login and after logging in you will be redirected to profile page. In profile page click on Edit details to edit details and after updating details click on update button.<hr><hr>",
        "17":" Click on login/signup button on home page.Then choose blood donor login to login and after logging in you will be redirected to profile page.<hr>",
        "18":"After adding details while signing up, in future you can update details about your blood  like if you have sugar or not and other problems which make your blood improper for donating.<hr><hr>",
        "19":"20.How to search hospitals for required location?<hr>21.How to view Covid-19 updates ?<hr>22.How to fetch contact details for a particular hospital ?<hr>23.How to search availablity of beds, ICU, ventilators, female doctor, oxygen cylinder and ambulance for a particular hospital ?<hr>24.How to make appointment with a particular hospital ?<hr>25.Do we need to signup to access all the details regarding hospital/blood banks/blood donors ?<hr>26.Do we need to make an account to make appointment ?<hr>27.How to know about blood banks(with availability of required blood group) in a particular location/district ?<hr>28.How to be a blood donor?<hr>29.How to see list of blood donors in a location/district ?<br>press question number.<hr>",
        "20":"From the home page Click on 'Search Your BloodBank' to redirect to 'District List', after that you have to click on the district where you want to search hospitals to fetch the list of hospitals then click on any desired hospital from hospital box to know its details. <hr>",
        "21":"Click on 'Covid-19 updates' on home page to view the covid-19 updates.<hr>",
        "22":"From the home page Click on 'Search Your BloodBank' to redirect to 'District List', after that you have to click on the district where your required hospital is situated then click on the particular hospital from the hospital box to fetch the contacts details regarding that hospital.<hr>",
        "23":" From the home page Click on'Search Your BloodBank' to redirect to 'District List', after that you have to click on the district where your required hospital is situated then click on the particular hospital from hospital box to know the availablity .<hr>",
        "24":"From the home page Click on 'Search Your BloodBank' to redirect to 'District List', after that you have to click on the district where your required hospital is situated then click on the particular hospital from hospital box to redirect to detail page. In detail page click on the appointment button to make appointment.<hr>",
        "25":"No! you dont need to login/signup to access the required details.<hr>",
        "26":" No! you dont need to make an account to make appointments.<hr> ",
        "27":"From the home page Click on 'Search Your BloodBank' to redirect to 'District List', after that you have to click on the district/location where you want to search blood banks then click on the particular blood bank from Blood Bank box to redirect to detail page to know the availability of the required blood group.<hr>",
        "28":"Click on login/signup button on home page.Then choose blood donor signup to signup and to add details regarding you(like blood group). You need to signup once then you will be a blood donor.<hr>",
        "29":"From the home page Click on 'Search Your BloodBank' to redirect to 'District List', after that you have to click on the district/location where you want to search blood donors then you can see the blood donors list in the blood donor box. Click on any name in the list if you want to fetch details regarding that person.<hr>",
    };
    function talk()
    {
        var user=document.getElementById("userBox").value.toUpperCase();
        document.getElementById("userBox").value="";
        document.getElementById("chatlog").innerHTML +=user+"<br>";
        if (user in know){
            document.getElementById("chat").innerHTML +=know[user] + "<br>";
        }
        else{
            document.getElementById("chat").innerHTML +="I dont understand....<br>";
                    }
    }
