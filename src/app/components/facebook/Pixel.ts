import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

export const PixelTracker = () => {
  useEffect(() => {
    const pixelId = process.env.NEXT_PUBLIC_PIXEL_ID;
    ReactPixel.init(pixelId);
    ReactPixel.pageView();
  }, []);
  return null;
};
