








function getApi() {
    var requestUrl = "api.openweathermap.org/data/2.5/weather?q={charlotte}&appid={API key}";

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
}