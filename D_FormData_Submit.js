//Brawser compatiblity issue in android 4, append with filename issue in I.E. and Edge
function D_FormData_Submit(d){
    var form = document.forms.namedItem("fileinfo");

  var oOutput = document.querySelector("div"),
      oData = new FormData(form);

 // oData.append("CustomField", "This is some extra data");

  var oReq = new XMLHttpRequest();
  oReq.open("POST", "0.php", true);
  oReq.onload = function(oEvent) {
    if (oReq.status == 200) {
      oOutput.document.getElementById("response").innerHTML = "Uploaded!";
    } else {
      oOutput.innerHTML = "Error " + oReq.status + " occurred when trying to upload your file.<br \/>";
    }
  };
  oReq.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          
           // Typical action to be performed when the document is ready:
           document.getElementById("response").innerHTML = oReq.response;    
        }
        else {
            document.getElementById("response").innerHTML =  "Error " + oReq.status + " occurred when trying to upload your file.<br \/>";
            }
      };

  oReq.send(oData);
}
