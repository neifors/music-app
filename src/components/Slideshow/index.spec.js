import { screen} from '@testing-library/react';
import {Slideshow} from '.';
import React from 'react';
// import { act } from 'react-dom/test-utils';

const images = ["one","two","three"]


describe('Static Slideshow', () => {
   beforeEach(() => {
      render(<Slideshow interval={10000} images={images}/>)
   })
   
   test("loads previous and next buttons of slideshow ", () => {
      const previous = screen.queryByRole('previous-button');
      expect(previous.textContent).toBe("Previous");
      const next = screen.queryByRole("next-button");
      expect(next.textContent).toBe("Next")
   });

})

describe('SetInterval', () => {
   beforeEach(() => {
      jest.useFakeTimers('legacy');
      render(<Slideshow interval={10000} images={images}/>)
   });

   it('Test if SetTimeout is been called', () => {

      expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 10000);
      expect(setInterval).toHaveBeenCalledTimes(1);
      
   })

   it('Test if the background are setted up correctly at the beginning', () => {

      const previous = screen.queryByRole('previous-slide');
      const current = screen.queryByRole("current-slide");
      const next = screen.queryByRole("next-slide");

      expect(current).toHaveStyle('background-image: url("one")')
      expect(previous).toHaveStyle('background-image: url("three")')
      expect(next).toHaveStyle('background-image: url("two")')

   })

   it('backgrounds after 10 seconds', () => {

      jest.advanceTimersByTime(10000);

      const previous = screen.queryByRole('previous-slide');
      const current = screen.queryByRole("current-slide");
      const next = screen.queryByRole("next-slide");

      expect(current).toHaveStyle('background-image: url("two")')
      expect(previous).toHaveStyle('background-image: url("one")')
      expect(next).toHaveStyle('background-image: url("three")')
   })


})


