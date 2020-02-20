export function plyse(){
    let form = document.getElementById("all_info").getElementsByTagName("form");
   
      form[0].innerHTML+='<br>'+
      '<input type="button" class="buttons" id="dop" style="background-color: aqua; font-size: 30px; margin-top: 50px; margin-left: 650px; padding: 20px; border-radius: 50px;" value="Выберите файл">';
      
      document.getElementById("dop").addEventListener("click", function() {
        document.getElementById("information").style.display="none";
        document.getElementById("player").style.display="none";
        document.getElementById("all_info").style.display="none";
      });
   
    }
   