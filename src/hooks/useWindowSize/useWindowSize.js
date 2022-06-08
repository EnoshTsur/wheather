import React from 'react'

export default function useWindowSize() {
    const [size, setSize] = React.useState({ windowWidth: 0, windowHeight: 0 });
    
    React.useLayoutEffect(() => {

      const updateSize = () => {
        setSize({ 
            windowWidth: window.innerWidth, 
            windowHeight: window.innerHeight
        });
      }
      
      window.addEventListener('resize', updateSize);
      
      updateSize();
      
      return () => {
          window.removeEventListener('resize', updateSize);
      }

    }, []);

    return size;
}
