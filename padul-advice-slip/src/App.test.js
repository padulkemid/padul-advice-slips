import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import { setAdvices } from './store/actions/advice_actions';
import { SET_SLIP_DETAIL } from './store/actions/action_key';
import useAdviceSlip from './hooks/useAdviceSlip';
import App from './App';

// mandatory
afterEach(cleanup);

// custom hook test
jest.mock('./hooks/useAdviceSlip');
useAdviceSlip.mockReturnValue([
  [{ advice: 'This is a mock advice', slip_id: 1 }],
  () => {
    // should be handleInput test
  },
]);

// redux test
jest.mock('./store/actions/advice_actions');
setAdvices.mockReturnValue({
  type: SET_SLIP_DETAIL,
  payload: {
    slipId: 1,
    slipAdvice: 'This is a mock advice',
  },
});

// pages tests
describe('all pages should be rendered', () => {
  it('should render homepage', () => {
    const { getByTestId } = render(<App />);

    // on homepage
    const homePage = getByTestId('render-home');
    expect(homePage).toBeInTheDocument();
  });

  it('should render slips [ custom hooks test ]', () => {
    const { getByText } = render(<App />);

    // get slip
    const mockedSlip = getByText(/this is a mock advice/i);
    expect(mockedSlip).toBeInTheDocument();
  });

  it('should render slips detail page', () => {
    const { getByTestId } = render(<App />);

    // home page, redirect to slips detail page button
    const slipsDetailBtn = getByTestId('slip-detail-button');
    fireEvent.click(slipsDetailBtn);

    // page changed to slips detail
    const slipsDetail = getByTestId('slip-detail');
    expect(slipsDetail).toBeInTheDocument();
  });

  it('should add data to favorite state in redux [ redux test ]', () => {
    const { getByTestId } = render(<App />);

    // click add to fav button
    const addToFav = getByTestId('add-to-fav');
    fireEvent.click(addToFav);
  });

  it('should go back to homepage', () => {
    const { getByTestId } = render(<App />);

    // click back
    const slipBackBtn = getByTestId('slip-back-button');
    fireEvent.click(slipBackBtn);

    // modal pops up, accept redirect
    const slipRedirHome = getByTestId('slip-redirect-home');
    fireEvent.click(slipRedirHome);

    // its on homepage
    const homePage = getByTestId('render-home');
    expect(homePage).toBeInTheDocument();
  });

  it('should render favorite page', () => {
    const { getByTestId } = render(<App />);

    // goto favorite page
    const redirFavBtn = getByTestId('redirect-fav-button');
    fireEvent.click(redirFavBtn);

    // its on fav page
    const favoritePage = getByTestId('render-fav');
    expect(favoritePage).toBeInTheDocument();
  });

  it('should render favorite slips [ redux test ]', () => {
    const { getByText } = render(<App />);

    // get redux state
    const favoriteSlip = getByText(/this is a mock advice/i);
    expect(favoriteSlip).toBeInTheDocument();
  });
});
