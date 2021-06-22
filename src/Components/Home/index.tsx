import React, { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import { connect } from "react-redux";
import { getStations, currentStation } from "../../Action";
import storeType, { station } from "../../Types/StoreType";
import AppPropType from "../../App/AppPropType";

import minusButton from "../../Assests/png/minus.png";
import plusButton from "../../Assests/png/plus.png";
import defaultImg from "../../Assests/png/default.png";

const Home: React.FC<AppPropType> = ({
  station,
  getStations,
  currentStation,
}) => {
  useEffect(() => {
    getStations();
  }, [getStations]);

  const [toggle, setToggle] = useState(false);
  const [stationKey, setStationKey] = useState(0);

  //select station name and toggle view
  const onPressFunc = (key: number, name: string) => {
    currentStation(name);
    setStationKey(key);
    stationKey === key ? setToggle(!toggle) : setToggle(true);
  };

  //if no image found in api
  const setDefaultSrc = (event: any) => {
    event.target.src = defaultImg;
  };

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
                    customControlsSection={[]}
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
