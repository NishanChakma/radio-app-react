import React, { useState, useEffect } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";

import minusButton from "../../Assests/png/minus.png";
import plusButton from "../../Assests/png/plus.png";
import defaultImg from "../../Assests/png/default.png";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [station, setStation] = useState([]);
  const [stationKey, setStationKey] = useState(null);

  //select station and toggle view
  const onPressFunc = (key) => {
    setStationKey(key);
    stationKey === key ? setToggle(false) : setToggle(true);
  };

  //loading station initially
  useEffect(() => {
    const getStation = async () => {
      try {
        //loading true while api is fetching data
        setLoading(true);

        //location tracking
        const trackLocation = await fetch(
          "https://extreme-ip-lookup.com/json/"
        );
        const countryCode = await trackLocation.json();

        //fetch radio station
        const api = new RadioBrowserApi("My Radio App");
        const stations = await api.searchStations({
          countryCode: countryCode.countryCode,
          limit: 20,
        });
        setStation(stations);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getStation();
  }, []);

  //if no image found in api
  const setDefaultSrc = (event) => {
    event.target.src = defaultImg;
  };

  while (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="home">
      {station &&
        station.map((res, key) => {
          return (
            <div key={key}>
              {toggle && stationKey === key && (
                <>
                  <span className="span">
                    <img
                      src={minusButton}
                      alt="minusButton"
                      className="plus_minus"
                    />
                    <img
                      src={res.favicon}
                      alt="plusButton"
                      className="default_logo"
                      onError={setDefaultSrc}
                    />
                    <img
                      src={plusButton}
                      alt="defaultImg"
                      className="plus_minus"
                    />
                  </span>
                  <AudioPlayer
                    autoPlay
                    src={res.urlResolved}
                    showJumpControls={false}
                    layout="stacked"
                    customProgressBarSection={[]}
                    customControlsSection={[""]}
                  />
                </>
              )}
              <div className="channel_group" onClick={() => onPressFunc(key)}>
                <p>{res.name}</p>
                <p>{res.bitrate}.0</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
