function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    var content = JSON.parse(xhr.responseText)
                success(content);
                return content;
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

var taskPath = '../Data/tasks.json';
var answerablePath = '../Data/answerables.json';


loadJSON(taskPath, 
        function (data) { 
          chargeTasks(data);
        },
        function (xhr) { console.error(xhr); }
);

loadJSON(answerablePath, 
        function (data) { 
          chargeAnswerables(data);
        },
        function (xhr) { console.error(xhr); }
);

function chargeTasks(data){
  var tasks = data['tasks'];
  var content ="";
  for (var i = tasks.length - 1; i >= 0; i--) {
    content = content + 
      "<li class=\"collection-item avatar\">"+
        "<i class=\"material-icons circle green\">assignment</i>"+
        "<span class=\"title\">"+tasks[i]['title']+"</span>"+
        "<p>Fecha Limite "+tasks[i]['deadLine']+"<br>"+
        "Postdata "+tasks[i]['description']+"</p>"+
      "</li>";
  } 
  document.getElementById("taskList").innerHTML += content;
}

function chargeAnswerables(data){
  var answerables = data['answerables'];
  var content ="";
  for (var i = answerables.length - 1; i >= 0; i--) {
    content = content + 
    "<li class=\"collection-item avatar\">"+
        "<img src=\"" + answerables[i]['photoPath'] + "\" class=\"circle\">"+
        "<span class=\"title\">"+answerables[i]['fullName']+"</span>"+
        "<p>Especialty "+answerables[i]['especialty'] +"</p>"+
      "</li>";
  } 
  document.getElementById("answerableList").innerHTML += content;
}