import { screen, within } from '@testing-library/react';
import {Homepage} from '.';

describe('Homepage', () => {
   beforeEach(() => {
      render(<Homepage />)
   })
   
   test("loads static headers (h1, h3) ", () => {
      const title = screen.queryByRole('main-title');
      expect(title.textContent).toBe("MICHAEL JACKSON");

   });


})
