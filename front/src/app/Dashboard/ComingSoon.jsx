import "../../../public/dist/css/comingsoon.css";

const ComingSoon = () => {
  return (
    <>
      <div className="page">
        <div className="countdown-col col">
          <div className="time middle">
            <span>
              <div id="days">12</div> Days
            </span>
            <span>
              <div id="hours">06</div> Hours
            </span>
            <span>
              <div id="minutes">35</div> Minutes
            </span>
            <span>
              <div id="seconds">54</div> Seconds
            </span>
          </div>
        </div>
        <div className="newsletter-col col">
          <div className="newslatter middle">
            <h2>We Will Coming Soon</h2>
            <h4>Subscribe to get notification when we start</h4>
            <form>
              <input type="text" placeholder="Enter Your Email" />
              <button type="button" className="newslatter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
