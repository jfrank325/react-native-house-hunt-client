import Axios from 'axios';
export const FETCH_HOUSES = 'FETCH_HOUSES';
export const CREATE_HOUSES = 'CREATE_HOUSES';

export const fetchHouses = () => {
  return async (dispatch) => {
    //logic to fetch houses from API
    try {
      const result = await Axios.get('http://localhost:5000/api/houses' || 'http://92.73.198.153:5000/api/houses');
      console.log({ result });
      const resultData = await result.data;
      console.log(resultData, 'resultData');
      dispatch({
        type: FETCH_HOUSES,
        payload: resultData,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const createHome = ({ title, image, homeType, price, yearBuilt, address, description }) => {
  return async (dispatch) => {
    //logic to fetch houses from API
    try {
      const newHouse = await Axios.post('http://localhost:5000/api/houses' || 'http://92.73.198.153:5000/api/houses', {
        title,
        image,
        homeType,
        price,
        yearBuilt,
        address,
        description,
      });
      console.log(newHouse.data.data, 'newHouse');
      dispatch({
        type: CREATE_HOUSES,
        payload: newHouse.data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

// 92.73.198.153
