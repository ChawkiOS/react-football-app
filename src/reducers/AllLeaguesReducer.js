import { ALL_LEAGUES } from '../constants';

const initialState = {
	leagues: []
};

export default (state = initialState, action) => {
	switch (action.type) {
    case ALL_LEAGUES:
      return {
        ...state,
        leagues: getSoccerLeaguesOnly(action.payload)
      };
    default:
      return state;
  };
}

/**
 * Get the list of all football leagues
 * @param leagues list of all sport leagues
 * @return Only footbal leagues
 */
function getSoccerLeaguesOnly(leagues) {
	return leagues.filter(league => {
		return league.strSport === 'Soccer';
	});
}
