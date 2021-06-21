import React, { useEffect } from "react";
// import AudioPlayer from "react-h5-audio-player";
import { connect } from "react-redux";
import { getStations } from "../../Action";
import storeType from "../../Types/StoreType";
import AppPropType from "../../App/AppPropType";

// import minusButton from "../../Assests/png/minus.png";
// import plusButton from "../../Assests/png/plus.png";
// import defaultImg from "../../Assests/png/default.png";

const Home: React.FC<AppPropType> = ({ station, getStations }) => {
  useEffect(() => {
    getStations();
  }, [getStations]);
  const data: any = station;
  console.log("homeeeeeeeeeeeeeeeeee", data.loading, data.stations);

  // console.log("44444444444444", stations);
  // const [loading, setLoading] = useState(false);
  // const [toggle, setToggle] = useState(false);
  // const [station, setStation] = useState([]);
  // const [stationKey, setStationKey] = useState(null);

  //select station and toggle view
  // const onPressFunc = (key: any) => {
  //   setStationKey(key);
  //   stationKey === key ? setToggle(!toggle) : setToggle(true);
  // };

  //if no image found in api
  // const setDefaultSrc = (event: any) => {
  //   event.target.src = defaultImg;
  // };

  // while (loading) {
  //   return (
  //     <div className="loading">
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }

  return (
    <div className="home">
      <h1>jhjjjjj</h1>
      {/* {station &&
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
                <p>{res.bitrate},0</p>
              </div>
            </div>
          );
        })} */}
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
})(Home);
