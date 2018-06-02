
$("#timer").hide();
$(".alert").hide();
   

$(".bot").on("click",function(){

    //Si valor ingresado es entero
    if($(".formi").val() % 1 === 0 && $(".formi").val() != 0 ) {

    $(".alert").hide();
    $("#timer").show();
    $(".bot").prop("disabled",true);

    var min = $(".formi").val();
    var sec = 0;
    var tiempix = setInterval(function(){

       
       document.getElementById("timer").innerHTML = min +" : " + sec ;
       if(sec == 0)
       {
        if(min == 0) {
            document.getElementById("timer").innerHTML = "¡Pomodoro Terminado!";
            clearInterval(tiempix);
            var minD = 5;
            var secD = 0;
            var descanso = setInterval(function(){
                $("#timerDesc").show();
                document.getElementById("timerDesc").innerHTML ="Descanso " + minD +" : " + secD ;
                if(secD == 0){
                    if(minD == 0) {
                        clearInterval(descanso);
                        $(".bot").prop("disabled",false);
                        $("#timerDesc").hide();
                        $("#timer").hide();
                    }

                minD--;
                secD = 60;
                }
                secD--;
                        
            },1000);

        }
         min--;
         sec = 60;
       }
       sec --;
      },1000);

    }
    //Si no es entero,olvidate
    else {
        $(".alert").show();
    }

});

