import PatternIcon from './assets/pattern.png';
import NextIcon from './assets/next.png';
import OvalIcon from './assets/oval.png';

import "./Extras.css";

const Extras = () => {
  return (
    <>
      <img className="next-icon" src={NextIcon} alt="Next" />
      <div className="semi-circle-lines-icon">))</div>
      <div className="lines-icon">//</div>
      <div className="circles-icon d-flex">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />

        <div />
        <div />
        <div />
        <div />
        <div />
        <div />

        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <img className="oval-icon" src={OvalIcon} alt="Oval" />
      <div className="pattern-icon-box d-flex">
        <img className="pattern-icon" src={PatternIcon} alt="Pattern" />
        <img className="pattern-icon" src={PatternIcon} alt="Pattern" />
      </div>
    </>
  );
};
export default Extras;
