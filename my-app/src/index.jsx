import React from 'react';
import { render } from 'react-dom';
import { Joke } from './Joke/Joke';
import { jokes } from './jokes';
import './style.css';
const App = () => (
  <div className="container">
    {jokes.map((joke) => (
      <Joke
        key={joke.id}
        userAvatar={joke.avatar}
        userName={joke.name}
        likes={joke.likes}
        dislikes={joke.dislikes}
      />
    ))}
  </div>
);

render(<App />, document.querySelector('#app'));
