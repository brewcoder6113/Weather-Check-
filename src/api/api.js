const apiKey = 'c8b8af7dff117ba49e2bcd77fbf2f122';

const getweather = async (city) =>{
        return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then((res) => res.json())
        .then((json) => {
            return json;
        })
}

export default getweather;