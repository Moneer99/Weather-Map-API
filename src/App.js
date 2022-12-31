import React, { useState } from "react";
import "./App.css";

function App() {
  function App() {
    const [location, setLocation] = useState('');
    const [weather, setWeather] = useState([]);

  return(
    <Container>
    <Main> {typeof weather.main != 'undefined' ? (
      <WeatherDisplay>
        <WeatherLocation>
          {weather.name} {weather.sys.country}
        </WeatherLocation>
        <WeatherDescription>
          <span style={{ textTransform: 'capitalize', fontSize: '24px' }}>
            {weather.weather[0].main}
          </span>
        </WeatherDescription>
        <Temp>{weather.main.temp.toFixed(0)}°F</Temp>
        <TempRange>
          <TempRangeTxt>
            H: {weather.main.temp_max.toFixed(0)}°
          </TempRangeTxt>
          <TempRangeTxt>
            L: {weather.main.temp_min.toFixed(0)}°
          </TempRangeTxt>
        </TempRange>
      </WeatherDisplay>
    ) : (
      ''
    )}
    <br />
  </Main>
  </Container>

  );
}

export default App;
