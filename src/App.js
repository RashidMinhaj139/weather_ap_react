import axios from "axios";
import { useState } from "react";

export default function App() {
  const [cityname, setcityname] = useState("");
  const [showdata, setshowdata] = useState(null);

  const getweather = async (event) => {
    event.preventDefault();
    try {
      const res =
        await axios.get(`http://api.weatherapi.com/v1/current.json?key=ebbe835637564743a01113519233009&q=${cityname}&aqi=no
    `);
      setshowdata(res.data);
      console.log("data===>", res.data);
    } catch (error) {
      console.log(error);
    }

    console.log("getting waether of ", cityname);
  };

  return (
    <div>
      <form onSubmit={getweather}>
        <input
          className="city"
          placeholder="enter city name"
          onChange={(e) => setcityname(e.target.value)}
        />
        <br />
        <input type="submit" value="get weather" />
      </form>

      {/* to render */}
      <div>
        <h1> City: {showdata?.current?.temp_c}</h1>
        <h1> temp: {showdata?.location?.name}</h1>
      </div>
    </div>
  );
}
