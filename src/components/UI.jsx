import React, { useState, useEffect, useRef } from 'react';

// Scroll Animation Wrapper
export const ScrollReveal = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} ${className}`}
    >
      {children}
    </div>
  );
};

export const Typewriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setBlink(!blink), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  useEffect(() => {
    if (index === words.length) {
       // eslint-disable-next-line react-hooks/set-state-in-effect
       setIndex(0); 
       return;
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000); 
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="inline-block min-w-50">
      {words[index].substring(0, subIndex)}
      <span className={`${blink ? 'opacity-100' : 'opacity-0'} ml-1`}>|</span>
    </span>
  );
};

export const BrutalButton = ({ children, onClick, color = "bg-white", className = "" }) => (
  <button
    onClick={onClick}
    className={`
      ${color} px-6 py-3 font-bold text-black border-4 border-black 
      shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
      hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] 
      hover:translate-x-1 hover:translate-y-1 
      transition-all active:shadow-none active:translate-x-1.5 active:translate-y-1.5
      flex items-center gap-2 ${className}
    `}
  >
    {children}
  </button>
);

export const BrutalCard = ({ title, children, color = "bg-white", rotate = "0deg" }) => (
  <div 
    className={`
      ${color} p-6 border-4 border-black 
      shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
      hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] 
      hover:-translate-y-1 hover:rotate-1
      transition-all duration-300 relative overflow-hidden h-full
    `}
    style={{ transform: `rotate(${rotate})` }}
  >
    <div className="absolute top-0 left-0 w-full h-8 bg-black flex items-center px-2 gap-2">
      <div className="w-3 h-3 rounded-full bg-red-500 border border-white"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500 border border-white"></div>
      <div className="w-3 h-3 rounded-full bg-green-500 border border-white"></div>
      <span className="ml-auto text-white font-mono text-xs truncate">{title}</span>
    </div>
    <div className="mt-6">
      {children}
    </div>
  </div>
);

export const Marquee = ({ text }) => (
  <div className="bg-black text-white border-y-4 border-black py-2 overflow-hidden whitespace-nowrap sticky top-18 z-20">
    <div className="animate-marquee inline-block font-black text-xl">
      {text} &nbsp; • &nbsp; {text} &nbsp; • &nbsp; {text} &nbsp; • &nbsp; {text} &nbsp; • &nbsp; {text}
    </div>
  </div>
);