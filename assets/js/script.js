






function displayTime() {
    var date = moment().format('MMMM Do, YYYY');
    $("#date").text(date);
    var rightNow = moment().format("h:mm:ss a");
    $("#now").text(rightNow);

}

setInterval(displayTime, 1000);





function getApi(inputVal) {
    var API_Key = "54e1375c02bb77b1a951b0a2a1264c0d"
    var requestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${API_Key}&units=imperial`;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        }).then(function(data) {
            console.log(data);
        })
}

getApi("Paris")


alertButton.on("click", function () {
    
})

function myFunction() {
    var str = "Best Greenway Parks!";
    var result = str.link("https://www.yelp.com/search?find_desc=best%20greenway%20parks&find_loc=Charlotte%2C%20NC");
    document.getElementById("demo").innerHTML = result;
  }

  
  function myFunction2() {
    var str = "Best Parks and Recreation!";
    var result = str.link("https://www.yelp.com/search?find_desc=best%20parks%20and%20recreation&find_loc=Charlotte%2C%20NC");
    document.getElementById("demo2").innerHTML = result;
  }

  
  function myFunction3() {
    var str = "Best Nature and Preserve Parks!";
    var result = str.link("https://www.yelp.com/search?find_desc=best%20nature%20and%20preserve%20parks&find_loc=Charlotte%2C%20NC");
    document.getElementById("demo3").innerHTML = result;
  }