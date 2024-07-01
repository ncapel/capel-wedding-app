import { useState , useEffect } from 'react';

export function useScroll() {
    // Scroll Direction
    const [lastScrollTop, setLastScrollTop] = useState(0);
    // Body Offset
    const [bodyOffset, setBodyOffset] = useState(document.body.getBoundingClientRect());
    // Vertical Direction
    const [scrollY, setScrollY] = useState(bodyOffset.top);
    // Horizontal Direction
    const [scrollX, setScrollX] = useState(bodyOffset.left);
    // Up / Down
    const [scrollDirection, setScrollDirection] = useState();

    const listener = e => {
        setBodyOffset(document.body.getBoundingClientRect());
        setScrollY(-bodyOffset.top);
        setScrollX(bodyOffset.left);
        setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
        setLastScrollTop(-bodyOffset.top);
    };

    useEffect(() => {
        window.addEventListener('scroll', listener);
        return () => {
            window.removeEventListener('scroll', listener);
        };
    });

    return {
        scrollY,
        scrollX,
        scrollDirection
    };
};

