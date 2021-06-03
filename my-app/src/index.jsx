import React from 'react';
import { render } from 'react-dom';
import { Joke } from './Joke/Joke';
import { jokes } from './jokes';

const App = () => {
  return jokes.map(({ id, avatar, name, text, likes, dislikes }) => (
    <Joke
      key={id}
      userAvatar={avatar}
      userName={name}
      text={text}
      likes={likes}
      dislikes={dislikes}
    />
  ));
};

render(<App />, document.querySelector('#app'));
