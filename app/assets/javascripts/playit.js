function PlayIt(Option){
	var s = document.getElementById('cancion').value;
	alert(Option);
	var str_array = Option.split(',');
	alert(str_array[0]);
document.getElementById("music1").innerHTML='<object id="mediaPlayer" width="470" height="400" '
+'classid="CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95" '
+'codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701" '
+'standby="Loading Microsoft Windows Media Player components..." type="application/x-oleobject">'
+'<param name="fileName" value="'+str_array[0]+'">'
+'<param name="animationatStart" value="true">'
+'<param name="transparentatStart" value="true">'
+'<param name="autoStart" value="1">'
+'<param name="showControls" value="true">'
+'<param name="loop" value="true">'
+'<param name="ShowStatusBar" value="true">'
+'<param name="ShowPositionControls" value="true">'
+'<param name="enableContextMenu" value="1" />'
+'<param name="fullScreen" value="0" />'
+'<embed type="application/x-mplayer2" '
+'pluginspage="http://microsoft.com/windows/mediaplayer/en/download/" '
+'bgcolor="darkblue" showcontrols="true" showpositioncontrols="true" showstatusbar="true" showgotobar="true" width="470" height="400" '
+'src="'+str_array[0]+'" autostart="true" designtimesp="5311" loop="true">'
+'</embed>'
+'</object>'
}
/*
function showDiv(which) {
	//var currentImage = 1;
  // for(i = 0; i < 13; i++) {
      //document.getElementById("image"+i).style.display="none";
	  document.getElementById("music1").innerHTML='<object id="mediaPlayer" width="470" height="400" '
+'classid="CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95" '
+'codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701" '
+'standby="Loading Microsoft Windows Media Player components..." type="application/x-oleobject">'
+'<param name="fileName" value="'+document.getElementById('cancion'+i).value+'">'
+'<param name="animationatStart" value="true">'
+'<param name="transparentatStart" value="true">'
+'<param name="autoStart" value="1">'
+'<param name="showControls" value="true">'
+'<param name="loop" value="true">'
+'<param name="ShowStatusBar" value="true">'
+'<param name="ShowPositionControls" value="true">'
+'<param name="enableContextMenu" value="1" />'
+'<param name="fullScreen" value="0" />'
+'<embed type="application/x-mplayer2" '
+'pluginspage="http://microsoft.com/windows/mediaplayer/en/download/" '
+'bgcolor="darkblue" showcontrols="true" showpositioncontrols="true" showstatusbar="true" showgotobar="true" width="470" height="400" '
+'src="'+document.getElementById('cancion'+i).value+'" autostart="true" designtimesp="5311" loop="true">'
+'</embed>'
+'</object>'
  // }
   //in the next 2 lines, you make sure which isn't lower than 1, and isn't greater than the number of images
  // if(which < 1) which = 1;
  // if(which > 13) which = 13;
  // document.getElementById("image" + which).style.display = "block";
  // currentImage = which;
} 
*/

       function showDiv(direction) {
       var currentTrack = 1;
             if(direction == "prev") {
                 // previous pressed
                 if(currentTrack > 1) {
                     currentTrack--;
                 }
             } else {
                 // next pressed
                 if(currentTrack < 13) {
                     currentTrack++;
                 }
             }

           //  document.getElementById("image" + currentTrack).style.display = "block";

             document.getElementById("music1").innerHTML='<object id="mediaPlayer" width="470" height="400" '
                    +'classid="CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95" '
                    +'codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701" '
                    +'standby="Loading Microsoft Windows Media Player components..." type="application/x-oleobject">'
                    +'<param name="fileName" value="'+document.getElementById('cancion').options[currentTrack].value+'">'
                    +'<param name="animationatStart" value="true">'
                    +'<param name="transparentatStart" value="true">'
                    +'<param name="autoStart" value="1">'
                    +'<param name="showControls" value="true">'
                    +'<param name="loop" value="true">'
                    +'<param name="ShowStatusBar" value="true">'
                    +'<param name="ShowPositionControls" value="true">'
                    +'<param name="enableContextMenu" value="1" />'
                    +'<param name="fullScreen" value="0" />'
                    +'<embed type="application/x-mplayer2" '
                    +'pluginspage="http://microsoft.com/windows/mediaplayer/en/download/" '
                    +'bgcolor="darkblue" showcontrols="true" showpositioncontrols="true" showstatusbar="true" showgotobar="true" width="470" height="400" '
                    +'src="'+document.getElementById('cancion').options[currentTrack].value+'" autostart="true" designtimesp="5311" loop="true">'
                    +'</embed>'
                    +'</object>'
       }