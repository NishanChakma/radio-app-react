import "./Footer.scss";
import { connect } from "react-redux";
import storeType from "../../Types/StoreType";
import AppPropType from "../../Types/AppPropType";

const Footer: React.FC<AppPropType> = ({ station }: any) => {
  return (
    <div className="footer">
      <p className="footer_text">CURRENTLY PLAYING</p>
      <p className="footer_logo">
        {station.name ? station.name : "No Radio is Playing!"}
      </p>
    </div>
  );
};

const mapStateToProps = (state: storeType) => {
  return {
    station: state.stations,
  };
};

export default connect(mapStateToProps)(Footer);
