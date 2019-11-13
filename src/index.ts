import { useEffect, useState } from "react";
import CitiesJson, { cities } from "./cities";

const useTurkeyCities = () => {
  const [city, setCity] = useState("");
  const [districts, setDistricts] = useState([""]);
  const [district, setDistrict] = useState("");

  useEffect(() => {
    if (city) {
      const _city = CitiesJson[city];

      if (_city) {
        setDistricts(_city.districts);
      }
    }
  }, [city]);

  return {
    cities,
    city,
    setCity,
    districts,
    district,
    setDistrict
  };
};

export default useTurkeyCities;
