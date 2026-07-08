import { useState, useContext } from "react"; // 1. Added useContext here
import React from "react";
import { watchlist } from "../Data/data";
import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";
import { Tooltip , Grow} from "@mui/material";
import GeneralContext from "./GeneralContext"; // 2. Imported GeneralContext (Verify your path matches!)
import { DonutChart } from "./DonutChart";

const labels = watchlist.map((watchlist) => watchlist.name);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: '# of Votes',
       data: [12, 19, 3, 5, 2, 3],
       backgroundColor: [
         'rgba(255, 99, 132, 0.3)',
         'rgba(54, 162, 235, 0.3)',
         'rgba(255, 206, 86, 0.3)',
         'rgba(75, 192, 192, 0.3)',
         'rgba(153, 102, 255, 0.3)',
         'rgba(255, 159, 64, 0.3)',
       ]
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return (
            <WatchListItem key={index} stock={stock} />
          );
        })}
      </ul>

      <DonutChart data = {data} />
    </div>
  );
};

const WatchListItem = ({ stock }) => {
  const [showWatchListAction, setShowWatchListAction] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListAction(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchListAction(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span className="percent">
            {stock.percent}
          </span>
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListAction && <WatchListAction uid={stock.name} />}
    </li>
  );
};

const WatchListAction = ({ uid }) => {
  // 3. Connect to openBuyWindow from your global context
  const { openBuyWindow } = useContext(GeneralContext);

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          {/* 4. Added onClick listener to trigger the context function */}
          <button className="buy" onClick={() => openBuyWindow(uid)}>
            Buy
          </button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell" >Sell</button>
        </Tooltip>
        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
          <button className="action" >
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More (M)" placement="top" arrow TransitionComponent={Grow}>
          <button className="action" >
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};  

export default WatchList;