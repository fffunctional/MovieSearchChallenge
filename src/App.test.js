import React from 'react';
import ReactDOM from 'react-dom';
import 'jest-dom/extend-expect';
import { render } from 'react-testing-library'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays a title at the top', () => {
  const { getByText } = render(<App />)
  expect(getByText('Movie Search App')).toBeInTheDocument();
});
