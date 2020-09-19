import Axios from 'axios';
export const FETCH_HOUSES = 'FETCH_HOUSES';
export const CREATE_HOUSES = 'CREATE_HOUSES';

export const fetchHouses = () => {
  return async (dispatch) => {
    //logic to fetch houses from API
    try {
      const result = await Axios.get('http://92.73.198.153:5000/api/houses');
      const resultData = await result.json();
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
