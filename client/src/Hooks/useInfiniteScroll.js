import { useState, useEffect } from 'react';


const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 500));
    return () => window.removeEventListener('scroll', debounce(handleScroll, 500));
    }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      console.log('called back');
    });
  }, [isFetching]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
    setIsFetching(true);
  }
  const debounce = (func, delay) => {
    let inDebounce;
    return function() {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => {
    func.apply(this, arguments);
    }, delay);
    }
    }

  return [isFetching, setIsFetching];
};


export default useInfiniteScroll;