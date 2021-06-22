import "./Home.scss";
import React, { useEffect, useState, useCallback } from "react";
import AudioPlayer from "react-h5-audio-player";
import { connect } from "react-redux";
import { getStations, currentStation } from "../../Action";
import storeType, { station } from "../../Types/StoreType";
import AppPropType from "../../Types/AppPropType";

import minusButton from "../../Assests/png/minus.png";
import plusButton from "../../Assests/png/plus.png";
import defaultImg from "../../Assests/png/default.png";

const Home: React.FC<AppPropType> = ({
  station,
  getStations,
  currentStation,
}) => {
  const [toggle, setToggle] = useState(false);
  const [onPlay, setOnPlay] = useState(false);
  const [stationKey, setStationKey] = useState(0);
  const [stationName, setStationName] = useState("");

  //get all stations
  useEffect(() => {
    getStations();
  }, [getStations]);

  //set station name for footer
  useEffect(() => {
    toggle ? currentStation(stationName) : currentStation("");
  }, [toggle, stationName, currentStation]);

  //select station name and toggle view
  const onPressFunc = useCallback(
    (key: number, name: string) => {
      setStationKey(key);
      setStationName(name);
      setOnPlay(false);
      stationKey === key ? setToggle(!toggle) : setToggle(true);
    },
    [setStationKey, setStationName, setOnPlay, stationKey, toggle, setToggle]
  );

  //if no image found in api
  const setDefaultSrc = useCallback((event: any) => {
    event.target.src = defaultImg;
  }, []);

  const data: any = station;

  while (data.loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="home">
      {data.stations &&
        data.stations.map((res: station, key: number) => {
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
                    {onPlay ? (
                      <img
                        src={res.favicon}
                        alt="plusButton"
                        className="default_logo"
                        onError={setDefaultSrc}
                      />
                    ) : (
                      <h2>loading...</h2>
                    )}
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
                    customControlsSection={[]}
                    onPlay={(e) => setOnPlay(true)}
                  />
                </>
              )}
              <div
                className="channel_group"
                onClick={() => onPressFunc(key, res.name)}
              >
                <p>{res.name}</p>
                <p>{res.bitrate},0</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state: storeType) => {
  return {
    station: state.stations,
  };
};

export default connect(mapStateToProps, {
  getStations,
  currentStation,
})(Home);
