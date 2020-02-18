export function playBtn(){
    document.getElementById("playBtn").addEventListener("click", ()=>{
        let artistPlayer = document.getElementById("artistPlayer");
        let trackPlayer = document.getElementById("trackPlayer");
        let request = new XMLHttpRequest();
        let url = "https://cors-anywhere.herokuapp.com/http://api.deezer.com/search?q=artist:'";
        if(trackPlayer.value != "" && artistPlayer.value != "") {
            url += artistPlayer.value + "'" + "track:'" + trackPlayer.value + "'";
          }
          else if (artistPlayer.value != "") {
              url += artistPlayer.value + "'";
          }
          else if (trackPlayer.value != "") {
              url += "'" + "track:'" + trackPlayer.value + "'";
          }
        
        console.log(url);
        request.open('GET', url); 
        request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {  
            let array = JSON.parse(request.responseText);
            if(typeof array.data[0] != "undefined"){
                DZ.player.playTracks([array.data[0].id]);
            }
            else{
                alert("По вашему запросу ничего не найдено");
            }
        }
    });
    request.send();  
       
    })
    }
