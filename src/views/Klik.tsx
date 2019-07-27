import React, { Component } from "react";
import { Heading } from "../components/Heading";
import ClickingForTeam from "../components/ClickingForTeam";
import Table from "../components/Table";
import { TableFooter, Footer } from "../components/Footer";
import * as actionCreators from "../actions/actions";
import { connect } from "react-redux";
import Clicks from "../components/Clicks";

class Klik extends Component<any, {}> {
  handleClick = () => {
    const { sessions, recordClick, fetchTeams } = this.props;

    const session = sessions[sessions.length - 1];
    const currentTeam = session.team;
    const currentSession = session.session;
    recordClick(currentTeam, currentSession);
    fetchTeams();
  };

  render() {
    return (
      <div className="Klik">
        <Heading />
        <ClickingForTeam />
        <div className="MainContainer">
          <div className="FlexWrapper">
            <button
              className="ClickButton"
              type="submit"
              onClick={this.handleClick}
            >
              Click!
            </button>
            <Clicks />
          </div>
          <Table />
          <TableFooter />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(
  mapStateToProps,
  actionCreators
)(Klik);
