import { Component } from 'React';
import { Princess } from './characters';

const mario = {
  alias: 'JumpMan',
  progress: {
    world: 1,
    level: 4
  }
};

class Castle extends Component {
  render() {
    const message = `Thank You Mario! But Our Princess Is in Another Castle!`;

    return (
      <div className="sorry-mario">
        {/* <Princess /> */}
        <p>{message}</p>
      </div>
    );
  }
}

export default Castle;
