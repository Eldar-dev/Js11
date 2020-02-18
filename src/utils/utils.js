export function initBtn(){
    document.addEventListener('DOMContentLoaded', initPlayer);
     function initPlayer() {
    DZ.init({
        appId  : '1',
        channelUrl : 'http://nikimusics/channel.html',
        player: {
            container: 'musicplayer',
            width : 500,
            height : 500,
            format: 'square',
            playlist : true,
            onload : function(){
            }
        }
    });
    }
    }
