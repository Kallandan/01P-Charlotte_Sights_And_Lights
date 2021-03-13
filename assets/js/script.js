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
        }).then(function (data) {
            console.log(data);
            var temp = data.main.temp
            var weather = data.weather[0].main
            $("#temp").append(temp)
            $("#weather").append(weather)
        })
}
getApi("Charlotte")



$(".something").on("click", function() {
    var searchVal = event.target.textContent; 
    console.log(searchVal);

    
    fetch(`https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation?cityName=${searchVal}&countryName=US`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "7bccf7e635msh675679cd78f6b84p13e724jsn4b7861efa475",
            "x-rapidapi-host": "best-booking-com-hotel.p.rapidapi.com"
        }
    })
    .then(response => {
       return response.json();
    }).then(data => {
        console.log(data);
        // $("#hotel-form").attr("action", data.link)
        window.location.href = data.link;
    })
    .catch(err => {
        console.error(err);
    });

});



$("#mexican").on("click", function () {
    window.location.href = "https://www.yelp.com/search?find_desc=Top+10+Mexican+Restaurants&find_loc=Charlotte%2C+NC&ns=1";
    var website = "https://www.yelp.com/search?find_desc=Top+10+Mexican+Restaurants&find_loc=Charlotte%2C+NC&ns=1";
    window.localStorage.setItem('savedWebsite', JSON.stringify(website));
})

$("#asian").on("click", function () {
    window.location.href = "https://www.yelp.com/search?find_desc=top+10+asian+restaurants&find_loc=Charlotte%2C+NC&ns=1";
    var website = "https://www.yelp.com/search?find_desc=top+10+asian+restaurants&find_loc=Charlotte%2C+NC&ns=1";
    window.localStorage.setItem('savedWebsite', JSON.stringify(website));
})

$("#diners").on("click", function () {
    window.location.href = "https://www.yelp.com/search?find_desc=top+10+diners+&find_loc=Charlotte%2C+NC&ns=1";
    var website = "https://www.yelp.com/search?find_desc=top+10+diners+&find_loc=Charlotte%2C+NC&ns=1";
    window.localStorage.setItem('savedWebsite', JSON.stringify(website));
})

$("#expensive").on("click", function () {
    window.location.href = "https://www.yelp.com/search?find_desc=top%2010%20high%20end%20restaurants&find_loc=Charlotte%2C%20NC";
    var website = "https://www.yelp.com/search?find_desc=top%2010%20high%20end%20restaurants&find_loc=Charlotte%2C%20NC";
    window.localStorage.setItem('savedWebsite', JSON.stringify(website));
})

/*$("#getfood").on("click", function(e){
    e.preventDefault()
})
*/

$("#greenway").on("click", function(){
    window.location.href = "https://www.yelp.com/search?find_desc=Best%20Greenway%20parks&find_loc=Charlotte%2C%20NC";
    var website = "https://www.yelp.com/search?find_desc=Best%20Greenway%20parks&find_loc=Charlotte%2C%20NC";
    window.localStorage.setItem('savedWebsite', JSON.stringify(website));
})

$("#recreation").on("click", function(){
    window.location.href = "https://www.yelp.com/search?find_desc=Best%20Parks%20and%20Recreation&find_loc=Charlotte%2C%20NC";
    var website = "https://www.yelp.com/search?find_desc=Best%20Parks%20and%20Recreation&find_loc=Charlotte%2C%20NC";
    window.localStorage.setItem('savedWebsite', JSON.stringify(website));
})
$("#nature").on("click", function(){
    window.location.href = "https://www.yelp.com/search?find_desc=best%20nature%20and%20preserve%20parks&find_loc=Charlotte%2C%20NC";
    var website = "https://www.yelp.com/search?find_desc=best%20nature%20and%20preserve%20parks&find_loc=Charlotte%2C%20NC";
    window.localStorage.setItem('savedWebsite', JSON.stringify(website));
})
$("#music").on("click", function(){
    window.location.href = "https://www.yelp.com/search?find_desc=best+music+venues&find_loc=Charlotte%2C+NC&ns=1";
    var website = "https://www.yelp.com/search?find_desc=best+music+venues&find_loc=Charlotte%2C+NC&ns=1";
    window.localStorage.setItem('savedWebsite', JSON.stringify(website));
})
$("#arts").on("click", function(){
    window.location.href = "https://www.yelp.com/search?find_desc=Best%20Performing%20Arts%20Venues&find_loc=Charlotte%2C%20NC";
    var website = "https://www.yelp.com/search?find_desc=Best%20Performing%20Arts%20Venues&find_loc=Charlotte%2C%20NC";
    window.localStorage.setItem('savedWebsite', JSON.stringify(website));
})

$("#shops").on("click", function(){
    window.location.href = "https://www.yelp.com/search?find_desc=best%20shopping&find_loc=Charlotte%2C%20NC";
    var website = "https://www.yelp.com/search?find_desc=best%20shopping&find_loc=Charlotte%2C%20NC";
    window.localStorage.setItem('savedWebsite', JSON.stringify(website));
})

$("#sports").on("click", function(){
    window.location.href = "https://www.yelp.com/search?find_desc=Sporting%20Events&find_loc=Charlotte%2C%20NC";
    var website = "https://www.yelp.com/search?find_desc=Sporting%20Events&find_loc=Charlotte%2C%20NC";
    window.localStorage.setItem('savedWebsite', JSON.stringify(website));
})

$("#drinks").on("click", function(){
    window.location.href = "https://www.yelp.com/search?find_desc=Best%20Bars&find_loc=Charlotte%2C%20NC";
    var website = "https://www.yelp.com/search?find_desc=Best%20Bars&find_loc=Charlotte%2C%20NC";
    window.localStorage.setItem('savedWebsite', JSON.stringify(website));
})

$("#beers").on("click", function(){
    window.location.href = "https://www.yelp.com/search?find_desc=best%20local%20breweries&find_loc=Charlotte%2C%20NC";
    var website = "https://www.yelp.com/search?find_desc=best%20local%20breweries&find_loc=Charlotte%2C%20NC";
    window.localStorage.setItem('savedWebsite', JSON.stringify(website));
})


 

  

/*$("#clearsearch").on("click", function () {
    window.location.href="index.html"
});
*/
