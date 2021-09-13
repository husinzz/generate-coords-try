import React, { useEffect, useState } from "react";
import "./index.css"

function App() {
  const [center, setCenter] = useState({
		coords: {
			longitude: "",
			latitude: "",
		},
	})

  const [lat, setLat] = useState("")
  const [lng, setLng] = useState("")
  const [locations, setLoc] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    if (!isNaN(lat) & !isNaN(lng)) {
      setCenter({
        coords: {
          longitude: lng,
          latitude: lat,
        },
      })
    } else {
      alert("Enter Numbers")
    } 
    
  }

  return (
    <>
    <Navigation />
    <div className="container mx-auto my-3">
      <h1 className="text-center">This app generates random geo coordinates around you</h1>
      <form className="flex justify-center m-3" onSubmit={handleSubmit}>
        <input className="text-center border-2 border-black mx-2" type="text" placeholder="Enter Latitude" onChange={(event) => setLat(event.target.value)} />
        <input className="text-center border-2 border-black mx-2" type="text" placeholder="Enter Longitude" onChange={(event) => setLng(event.target.value)} />
        <button className="text-center bg-gray-300 p-2 rounded-lg" type="submit">Submit</button>
      </form>
      <button className="text-center mx-auto block p-2 rounded-lg bg-gray-600 text-white" onClick={() => {
        navigator.geolocation.getCurrentPosition((position) => {
          setCenter(position);
        });

        setLoc(generateRandomPoints(center, 100000, 500))
        console.log(locations)
      }}>
        Or Press me for current location
      </button>
      <p className="text-center">{!center.coords.latitude ? "" : `${center.coords.latitude}, ${center.coords.longitude}`}</p>
    </div>

    <div className="">

      <div className="container mx-auto bg-gray-400 border-2 border-black">
        {locations.map((current) => <div>{`{location: ${current.location}, lat : ${current.lat}, lng : ${current.lng}},`}</div>)}
      </div>
    </div>
    </>
  );
}

function Navigation() {
	return (
		<nav className="flex justify-between items-center bg-gray-800">
			<h1 className="text-4xl text-white p-3">Coords Generator</h1>
			<a
				className="text-2xl text-white p-3"
				href="https://urdreamboi.github.io"
			>
				backhome
			</a>
		</nav>
	);
}

function generateRandomPoint(center, radius, increment) {
  var x0 = center.coords.longitude;
  var y0 = center.coords.latitude;
  // Convert Radius from meters to degrees.
  var rd = radius/111300;

  var u = Math.random();
  var v = Math.random();

  var w = rd * Math.sqrt(u);
  var t = 2 * Math.PI * v;
  var x = w * Math.cos(t);
  var y = w * Math.sin(t);

  var xp = x/Math.cos(y0);


  // Resulting point.
  return {'location' : `Location ${increment}`,'lat': y+y0, 'lng': xp+x0};
}

function generateRandomPoints(center, radius, count) {
  var points = [];
  for (var i=0; i<count; i++) {
    points.push(generateRandomPoint(center, radius, i));
  }
  return points;
}

export default App;
