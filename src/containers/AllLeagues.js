import React, { Component } from 'react';
import { getAllLeagues } from '../actions/index';
import { connect } from 'react-redux';

export class AllLeagues extends Component {
  componentWillMount() {
    this.props.getAllLeagues();
  }

  render() {
    return (
      <ul className="nav bd-sidenav">
        {this.props.leagues.map(league => (
          <li>
            <a key={league.idLeague} href="#">
              {league.strLeague}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = store => {
  return {
    leagues: store.allLeaguesReducer.leagues
  };
};

const mapDispatchToProps = {
  getAllLeagues
};

export default connect(mapStateToProps, mapDispatchToProps)(AllLeagues);
