import React, { Component } from 'react';
import { getAllLeagues } from '../actions/index';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';

export class AllLeagues extends Component {
  componentWillMount() {
    this.props.getAllLeagues();
  }

  render() {
    return (
      <ListGroup>
          {this.props.leagues.map(league => (
              <ListGroupItem key={league.idLeague}>{league.strLeague}</ListGroupItem>
          ))}
      </ListGroup>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    leagues: store.allLeaguesReducer.leagues
  };
};
const mapDispatchToProps = {
  getAllLeagues
};

export default connect(mapStateToProps, mapDispatchToProps)(AllLeagues);
