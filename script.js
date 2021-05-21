document.getElementById("button")
    addEventListener("click", convertFahrToCelsius, false);
    

    function convertFahrToCelsius () {
        var degF = document.getElementById("fValue").value;
        var degC = (degF - 32 ) * (5/9);
              let answer = Number(degC.toPrecision(6))
         document.getElementById("cValue").innerHTML = answer;
        console.log(answer);
    }   