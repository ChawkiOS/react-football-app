import axios from 'axios';
import { ALL_LEAGUES } from '../constants';

const BASE_URL = 'https://www.thesportsdb.com/api/v1/json/1';

export function getAllLeagues() {
  return (dispatch) => {
    axios.get(`${BASE_URL}/all_leagues.php`).then(response => {
      dispatch({ type: ALL_LEAGUES, payload: response.data.leagues });
    });
  };
}
