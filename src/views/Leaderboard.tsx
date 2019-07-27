import React, { Component } from "react";
import { Heading, Quote } from "../components/Heading";
import img from "../top10clickers.png";
import Table from "../components/Table";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actions";
import { TableFooter, Footer } from "../components/Footer";
import "./Leaderboard.scss";

interface LeaderboardState {
  team: string;
  session: string;
  [index: string]: string;
}

class Leaderboard extends Component<any, LeaderboardState> {
  constructor(props: any) {
    super(props);

    this.state = {
      team: "",
      session: Math.random().toString(36)
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { team, session } = this.state;
    const { addSession, addTeam, history } = this.props;
    addSession({ team, session });
    addTeam(team);
    history.push("/" + team);
  };

  componentDidMount() {
    this.props.fetchTeams();
  }

  render() {
    return (
      <div className="LeaderBoard">
        <Heading />
        <Quote />
        <div className="MainContainer">
          <form className="FormWrapper" onSubmit={this.handleSubmit}>
            <span className="LabelInputWrapper">
              <label className="NameLabel">Enter your team name:</label>
              <input
                type="text"
                placeholder="Your mom"
                name="team"
                onChange={this.handleChange}
              />
            </span>
            <button className="PlayButton" type="submit">
              Click!
            </button>
          </form>
          <img className="Top10ClickersImg" src={img} alt="Logo" />
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
)(Leaderboard);
