init();

function init() {
 loadJSON(function(response) {
  // Parse JSON string into object
    var actual_JSON = $.parseJSON(response);
$('#Translates').bootstrapTable({
columns: actual_JSON['Columns'],
              data: actual_JSON['languages']
           });
 });
}

function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'https://universalmenu.github.io/json/test.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }
