import { screen, within } from '@testing-library/react';
import {Biography} from '.';

describe('Biography', () => {
   beforeEach(() => {
      render(<Biography />)
   })
   
   test("loads static headers (h1, h3) ", () => {
      const title = screen.queryByRole('main-title');
      expect(title.textContent).toBe("MICHAEL JACKSON");
      const bioTitle = screen.queryByRole("biography-title");
      expect(bioTitle.textContent).toBe("Biography")
   });


})
