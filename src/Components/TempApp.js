import { useEffect, useState } from "react";

const TempApp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('Delhi');

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7392d79f777e40cb2eb190bb04dce9af&units=metric`
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    })

    return (
        <>
            <h1 className="text">Weather Application</h1>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        placeholder="Enter City Name"
                        value={search}
                        className="inputFeild"
                        onChange={(event) => {
                            setSearch(event.target.value);
                        }} />
                </div>
                <div className="details">
                    {!city ? (
                        <h2>Data Not Found</h2>
                    )
                        :
                        (<div className="info">
                            <h2 className="location">{search}</h2>
                            <h1 className="temp"> {city.temp} °C</h1>
                            <h3 className="tempmin_max">Min : {city.temp_min} °C | Max : {city.temp_max} °C</h3>
                            <h3> Humidity : {city.humidity} %</h3>
                        </div>
                        )
                    }

                </div>
            </div>
        </>
    );
}

export default TempApp;