    corsBypass = 'https://cors-anywhere.herokuapp.com/'
    done = false;
    pageUrls = [
      'https://charlotte.craigslist.org',
      'http://www.cookingforengineers.com'
		];
    tasks0 = [
      'here',
      'here',
      'here'
    ];
    tasks1 = [
      'dictionary',
      'blog',
      'spatula'
    ];
    const btnLaunchSite = document.querySelector("#btnLaunchSite");
    btnLaunchSite.addEventListener("click", function () {
      startTimer();
      arrayIndex = document.getElementById("websites").value;
      console.log(arrayIndex);
      allTasks = [
        tasks0,
        tasks1
      ];
      tasks = allTasks[arrayIndex];
      var parent = document.createElement('select');
      parent.setAttribute("id","tasks");
      parent.setAttribute("size","5");
      child0 = document.createElement('option')
      child0.value = "0";
      child0.innerHTML = "Find the link to the " + tasks[0] + " on the page.";
      child1 = document.createElement('option')
      child2 = document.createElement('option')
      child2.value = "1";
      child2.innerHTML = "Find the link to the " + tasks[1] + " on the page.";
      child3 = document.createElement('option')
      child4 = document.createElement('option')
      child4.value = "2";
      child4.innerHTML = "Find the link to the " + tasks[2] + " on the page.";
      parent.appendChild(child0);
      parent.appendChild(child1);
      parent.appendChild(child2);
      parent.appendChild(child3);
      parent.appendChild(child4);
      document.body.appendChild(parent);
      finalUrl = corsBypass + pageUrls[arrayIndex];
      sheet = 'assets/css/styles' + arrayIndex + '.css';
      console.log(sheet);
    document.getElementById("btnLaunchSite").remove();
    document.getElementById("websites").remove();
    document.getElementById("instructions").remove();
    document.getElementById("description").remove();
    document.getElementById('changeStyle').setAttribute('href',sheet);
    $.get(finalUrl, function(data) {
        data = data.replaceAll('class="', 'class="movable ').replaceAll('movable container', 'container');;
        data = data.replace('href="/dictionary"','href="#0" onclick="countTasks(arrayIndex,tasks1[0])" id="dictionary"');
        data = data.replace('href="http://www.orthogonalthought.com/blog"','href="#1" onclick="countTasks(arrayIndex,tasks1[1])" id="blog"');
        data = data.replaceAll('href="/article/346/GastroMax-Slotted-Turner-Spatula"','href="#2" onclick="countTasks(arrayIndex,tasks1[2])" id="spatula"');
        data = data.replaceAll('/article/346/GastroMax-Slotted-Turner-Spatula','#3 onclick="countTasks(arrayIndex,tasks1[2])" id="spatula"');
          $(".container-thqtcher").html('<div data="' + data);
      }).promise().done( function( obj ) {
        console.log("randomizing")
        try{
          $('.movable').each(function(i, element){
            var x = Math.floor((Math.random() * 500) + 1);;
            var y = Math.floor((Math.random() * 500) + 1);;
            $(this).css({left: x, top: y, position:'absolute'});
          });
        }catch(err) {
          console.log(err);
        };
      });
  });
  function countTasks(arrayIndex,eachTask){
        var clean = false;
        var count = 0;
        console.log(eachTask);
        document.getElementById(eachTask).remove();
        if(document.getElementById(eachTask) != null){
          document.getElementById(eachTask).remove();
        }
        for(var i =0;i<tasks.length;i++){
          if(tasks[i] == eachTask){
            tasks[i] = 0;
          }
          if(tasks[i] == 0){
            count++;
          }
        }
        console.log(count);
        if(count == tasks.length){
              endTimer();
              clean = true;
        }
        if(clean){
          cleanWebsite(arrayIndex);
        }
  }
  function cleanWebsite(arrayIndex){
    var corsBypass = 'https://cors-anywhere.herokuapp.com/'
    var pageUrls = [
      'https://charlotte.craigslist.org',
      'http://www.cookingforengineers.com'
		];
    var tasks0 = [
      'task1',
      'task2',
      'task3'
    ];
    var tasks1 = [
      'dictionary',
      'blog',
      'spatula'
    ];
    var allTasks = [
      tasks0,
      tasks1
    ];
    tasks = allTasks[arrayIndex];
    var finalUrl = corsBypass + pageUrls[arrayIndex];
    var sheet = 'assets/css/styles' + arrayIndex + '.css';
    $.get(finalUrl, function(cleanData) {
        cleanData = cleanData.replaceAll('class="', 'class="movable ').replaceAll('movable container', 'container');;
        cleanData = cleanData.replace('href="/dictionary"','href="#0" onclick="countTasks(arrayIndex,"dictionary1")" id="dictionary1"');
        cleanData = cleanData.replace('href="http://www.orthogonalthought.com/blog"','href="#1" onclick="countTasks(arrayIndex,"blog1")" id="blog1"');
        cleanData = cleanData.replaceAll('href="/article/346/GastroMax-Slotted-Turner-Spatula"','href="#" onclick="countTasks(arrayIndex,"spatula1")" id="spatula1"');
        cleanData = cleanData.replaceAll('/article/346/GastroMax-Slotted-Turner-Spatula','# onclick="countTasks(arrayIndex,"spatula1")" id="spatula1"');

          $(".container-thqtcher").html('<div cleanData="' + cleanData);
          done = true;
          if(done){
            alert("Because of the way I set up completing the tasks, a second usability test can not be completed for the cleaned version of this page. Although you can not complete a second usability test please spend time looking at the difference between the two versions of this site.");
          }
      })


  }

function startTimer() {
  startTime = new Date();
};
function endTimer() {
  endTime = new Date();
  var time = endTime - startTime; //in ms
  time /= 1000;
  var seconds = Math.round(time);
  alert("Congrats! You completed the usability test in " + seconds + " seconds")
}
