# List Turkey cities and districts with ease

You can list cities and after setting `city`, you will get `districts` of corresponding city.

### Installing

```
npm i use-turkey-cities
```

or

```
yarn add use-turkey-cities
```

### Usage
```tsx
import React from "react";
import useTurkeyCities from "use-turkey-cities";

const App: React.FC = () => {
  const { cities, city, setCity, districts, district, setDistrict } = useTurkeyCities();

  return (
    <div className="App">
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(city, districts);
        }}
      >
        <select
          onChange={e => {
            setCity(e.target.value);
          }}
          value={city}
        >
          {cities.map(city => (
            <option key={`city-${city}`} value={city}>
              {city}
            </option>
          ))}
        </select>
        <br />
        <select
          onChange={e => {
            setDistrict(e.target.value);
          }}
          value={district}
        >
          {districts.map(district => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;

```
