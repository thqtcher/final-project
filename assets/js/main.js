
		// example 1
    var corsBypass = 'https://cors-anywhere.herokuapp.com/'
    var pageUrls = [
      //'https://thqtcher.github.io/dig245-a4/',
      //'google.com',
      'http://www.sarochinee.com'
      //'twitch.tv/itux'
		];
    var arrayIndex = Math.floor(Math.random() * pageUrls.length);
    var finalUrl = corsBypass + pageUrls[arrayIndex];
    //fetch(finalUrl).then((response) => response.text()).then((text) => console.log(text));
    const btnLaunchSite = document.querySelector("#btnLaunchSite");
    btnLaunchSite.addEventListener("click", function () {
    document.getElementById("btnLaunchSite").remove();
    $.get(finalUrl, function(data) {
        data = data.replaceAll('class="', 'class="movable ').replaceAll('movable container', 'container');;
         $(".container-thqtcher").html('<div data="' + data);
      }).promise().done( function( obj ) {
        console.log("randomizing")
        try{
          $('.movable').each(function(i, element){
            console.log("element " + i + ", " + element);
            var x = Math.floor((Math.random() * 500) + 1);;
            var y = Math.floor((Math.random() * 500) + 1);;
            $(this).css({right: x, top: y, position:'absolute'});
          });
          // Array.from($('.movable')).forEach((item, i) => {
          //   console.log(item);
          //   //item.style.position = 'relative';
          //   //item.parent.css({position: 'relative'});
          //   var x = Math.floor((Math.random() * 500) + 1);;
          //   var y = Math.floor((Math.random() * 500) + 1);;
          //   item.style.right = x;
          //   item.style.left = y;
          //   item.style.position = 'absolute';
          //   //item.css({right: x, top: y, position:'absolute'});
          // });
        }catch(err) {
          console.log(err);
        };
          //console.log(one);
      });
    //var tasks = document.getElementsByClassName('tasks');

    //$('div').attr({'class': 'movable'});
    //$(".container-thqtcher").attr({'class': ''});
  //const divs = document.getElementsByTagName('div');
// loop all collection elements
// console.log(document.getElementsByTagName('div').length);
//   for (var i = 0; i < divs.length; i++) {
//     console.log("here");
//     var x = Math.floor((Math.random() * 500) + 1);
//     var y = Math.floor((Math.random() * 500) + 1);
//     var css = {left: x, top: y, position: 'absolute'};
//     Object.assign(divs[i].style, css);
//     console.log("here");
// }
    // tasks.forEach((task, i) => {
    //   task.setAttribute('id', 'movable');
    //   console.log(task);
    // });
    // console.log(tasks);

  });
    //document.getElementsByClassName('tasks').style.right = x;
    //document.getElementsByClassName('tasks').style.top = y;
    //document.getElementsByClassName('tasks').position = absolute;
    /*try{
      elements.className = "movable";
      $('.tasks').css({right: x, top: y, position:'absolute'});
    }catch(err) {
      console.log("here");
    };
        //var url = $(".u2").val();
    // load remote resource

    //document.getElementsByClassName("container");
    /*fetch(finalUrl)
    .then(res => {
        return res.text();
    })
    .then(data => {
        $('#container').html(data);
    });*/
