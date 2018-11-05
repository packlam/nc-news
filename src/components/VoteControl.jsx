import React from 'react';
import './VoteControl.css';
import * as api from '../api';

class VoteControl extends React.Component {
  state = {
    voteModifier: 0
  }

  render() {
    return (
      <div className="vote-control">
        <span className="arrow" onClick={() => this.handleClick('up')}>⬆</span>
        <span>{this.props.votes + this.state.voteModifier}</span>
        <span className="arrow" onClick={() => this.handleClick('down')}>⬇</span>
      </div>
    )
  }
  
  handleClick = (vote) => {
    const { itemType, itemId } = this.props

    api.updateVoteCount(itemType, itemId, vote)
    .then(() => {
      const voteModifier = (vote === 'up')
      ? this.state.voteModifier + 1
      : this.state.voteModifier - 1
      this.setState({ voteModifier })
    })
  };
}

export default VoteControl;