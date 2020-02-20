export function ent(){
    document.getElementById("enter").addEventListener("click", function() {
     let login_ok = false;
  let user_name = "";
  let password = "";
  user_name = prompt("Логин","");
  user_name = user_name.toLowerCase();
  password = prompt("Пароль","");
  password = password.toLowerCase();
  if (user_name=="eldar" && password=="hello") {
   login_ok = true;
   document.getElementById("information").style.display="none";
   document.getElementById("player").style.display="none";
   document.getElementById("all_info").style.display="";
  }
  
  if (login_ok==false) {alert("Неверный логин или пароль!");
  }
  });
  }