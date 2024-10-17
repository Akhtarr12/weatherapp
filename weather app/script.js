<script>
        const apikey = "e5c7afffa4454f619a7202951241610";
        const apiUrl = "https://api.weatherapi.com/v1/current.json?key=";

        const searchbox = document.querySelector(".search input");
        const searchbtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkweather(city) {
            const response = await fetch(`${apiUrl}${apikey}&q=${city}`);

            if (response.status == 404) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            } else {
                const data = await response.json();

                document.querySelector(".city").innerHTML = data.location.name;
                document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
                document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
                document.querySelector(".wind").innerHTML = data.current.wind_kph + " Km/h";

                const weatherCondition = data.current.condition.text;
                if (weatherCondition.includes("Cloud")) {
                    weatherIcon.src = "images/clouds.png";
                } else if (weatherCondition.includes("Clear")) {
                    weatherIcon.src = "images/clear.png";
                } else if (weatherCondition.includes("Mist")) {
                    weatherIcon.src = "images/mist.png";
                } else if (weatherCondition.includes("Rain")) {
                    weatherIcon.src = "images/rain.png";
                } else if (weatherCondition.includes("Drizzle")) {
                    weatherIcon.src = "images/drizzle.png";
                }

                document.querySelector(".weather").style.display = "block";
                document.querySelector(".error").style.display = "none";
            }
        }

        searchbtn.addEventListener("click", () => {
            const city = searchbox.value.trim();
            if (city) {
                checkweather(city);
            } else {
                alert("Please enter a city name.");
            }
        });
    </script>
