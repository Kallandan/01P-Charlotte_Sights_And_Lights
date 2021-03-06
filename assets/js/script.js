
var dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(dateTime);






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