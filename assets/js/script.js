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
            var temp = data.main.temp
            var weather = data.weather[0].main
            $("#temp").append(temp)
            $("#weather").append(weather)
        })
}

getApi("Charlotte")

$("#mexican").on("click", function(){
    window.location.href = "https://www.yelp.com/search?find_desc=Top+10+Mexican+Restaurants&find_loc=Charlotte%2C+NC&ns=1"
})

$("#asian").on("click", function(){
    window.location.href = "https://www.yelp.com/search?find_desc=top+10+asian+restaurants&find_loc=Charlotte%2C+NC&ns=1"
})

$("#diners").on("click", function(){
    window.location.href = "https://www.yelp.com/search?find_desc=top+10+diners+&find_loc=Charlotte%2C+NC&ns=1"
})

$("#expensive").on("click", function(){
    window.location.href = "https://www.yelp.com/search?find_desc=top%2010%20high%20end%20restaurants&find_loc=Charlotte%2C%20NC"
})
/*$("#getfood").on("click", function(e){
    e.preventDefault()
})
*/

function myFunction() {
    var str = "Best Greenway Parks!";
    var result = str.link("https://www.yelp.com/search?find_desc=Best%20Greenway%20parks&find_loc=Charlotte%2C%20NC");
    document.getElementById("demo").innerHTML = result;
}

function myFunction2() {
    var str = "Best Parks and Recreation!";
    var result = str.link("https://www.yelp.com/search?find_desc=Best%20Parks%20and%20Recreation&find_loc=Charlotte%2C%20NC");
    document.getElementById("demo2").innerHTML = result;
}

function myFunction3() {
    var str = "Best Nature and Preserve Parks!";
    var result = str.link("https://www.yelp.com/search?find_desc=Best%20Nature%20and%20Preserve%20Parks&find_loc=Charlotte%2C%20NC");
    document.getElementById("demo3").innerHTML = result;
}



/*$("#clearsearch").on("click", function () {
    window.location.href="index.html"
});
*/
