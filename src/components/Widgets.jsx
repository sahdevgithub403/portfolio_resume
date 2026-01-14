import React, { useState, useEffect, useCallback } from 'react';
import { Trophy, Bug, Skull, AlertTriangle, RefreshCw, Frown, Activity, ChevronUp, ChevronDown } from 'lucide-react';
import { TOAST_MESSAGES, EXCUSES } from './data';

export const ToastSystem = () => {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const loop = setInterval(() => {
      if (Math.random() > 0.3) {
        setToast(TOAST_MESSAGES[Math.floor(Math.random() * TOAST_MESSAGES.length)]);
        setTimeout(() => setToast(null), 4000);
      }
    }, 8000);
    return () => clearInterval(loop);
  }, []);

  if (!toast) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-bounce-in">
      <div className="bg-black text-white px-4 py-3 border-4 border-yellow-400 shadow-[4px_4px_0px_white] font-bold text-sm flex items-center gap-2 max-w-xs transform -rotate-1">
        <Trophy size={16} className="text-yellow-400" />
        {toast}
      </div>
    </div>
  );
};

export const BugSmasher = ({ score, setScore }) => {
  const [position, setPosition] = useState({ top: '20%', left: '80%' });
  const [isVisible, setIsVisible] = useState(true);
  const [isBoss, setIsBoss] = useState(false);
  const [bossHealth, setBossHealth] = useState(5);

  const moveBug = useCallback(() => {
    const newTop = Math.floor(Math.random() * 80) + 10 + '%';
    const newLeft = Math.floor(Math.random() * 80) + 10 + '%';
    setPosition({ top: newTop, left: newLeft });
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isVisible && Math.random() > 0.6) {
        if (score > 5 && Math.random() > 0.8) {
           setIsBoss(true);
           setBossHealth(5);
        } else {
           setIsBoss(false);
        }
        moveBug();
      }
    }, 2000);
    return () => clearInterval(timer);
  }, [moveBug, isVisible, score]);

  const smash = (e) => {
    e.stopPropagation();
    
    if (isBoss) {
      if (bossHealth > 1) {
        setBossHealth(h => h - 1);
        const newTop = Math.floor(Math.random() * 80) + 10 + '%';
        const newLeft = Math.floor(Math.random() * 80) + 10 + '%';
        setPosition({ top: newTop, left: newLeft });
        return; 
      }
      setScore(s => s + 10);
      setIsBoss(false);
    } else {
      setScore(s => s + 1);
    }
    
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      onClick={smash}
      className={`fixed z-50 cursor-crosshair transition-all duration-300 hover:scale-110 
        ${isBoss ? 'animate-pulse' : 'animate-bounce'}`}
      style={{ 
        top: position.top, 
        left: position.left,
        transform: isBoss ? 'scale(2)' : 'scale(1)'
      }}
    >
      <div className={`p-2 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
        ${isBoss ? 'bg-purple-600' : 'bg-red-500'}`}>
        {isBoss ? <Skull size={24} className="text-white" /> : <Bug size={24} className="text-white" />}
      </div>
      {isBoss && (
        <div className="absolute -top-4 left-0 w-full bg-red-200 h-1 border border-black">
          <div className="bg-red-600 h-full" style={{width: `${(bossHealth/5)*100}%`}}></div>
        </div>
      )}
      <span className="absolute -bottom-6 left-0 bg-white text-xs font-bold border border-black px-1 whitespace-nowrap">
        {isBoss ? "BOSS FIGHT!" : "Smash me!"}
      </span>
    </div>
  );
};

export const ExcuseGenerator = () => {
  const [excuse, setExcuse] = useState(EXCUSES[0]);
  const [loading, setLoading] = useState(false);

  const generateExcuse = () => {
    setLoading(true);
    let count = 0;
    const interval = setInterval(() => {
      setExcuse(EXCUSES[Math.floor(Math.random() * EXCUSES.length)]);
      count++;
      if (count > 5) {
        clearInterval(interval);
        setLoading(false);
      }
    }, 100);
  };

  return (
    <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-md mx-auto transform rotate-1 hover:-rotate-1 transition-transform">
      <h3 className="font-black text-xl mb-2 flex items-center gap-2">
        <AlertTriangle className="text-yellow-500" /> DEV EXCUSE GEN v1.0
      </h3>
      <div className="bg-gray-100 border-2 border-black p-4 mb-4 font-mono text-lg min-h-20 flex items-center justify-center text-center">
        "{excuse}"
      </div>
      <button 
        onClick={generateExcuse}
        disabled={loading}
        className="w-full bg-yellow-300 border-2 border-black font-bold py-2 hover:bg-yellow-400 active:translate-y-1 transition-all flex justify-center gap-2"
      >
        <RefreshCw className={loading ? "animate-spin" : ""} /> {loading ? "Computing..." : "Generate Valid Reason"}
      </button>
    </div>
  );
};

export const RunawayButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const moveButton = (e) => {
    if (window.innerWidth > 768) {
      const x = Math.random() * 300 - 150; 
      const y = Math.random() * 300 - 150;
      setPosition({ x, y });
      setHasMoved(true);
    }
  };

  return (
    <button
      onMouseEnter={moveButton}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      className="bg-red-400 px-6 py-3 font-bold text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform duration-150 ease-out flex items-center gap-2 z-20 relative"
    >
      <Frown size={18} /> {hasMoved ? "Nice Try!" : "Don't Hire Me"}
    </button>
  );
};

export const UselessToggle = () => {
  const [isOn, setIsOn] = useState(false);
  const [message, setMessage] = useState("");

  const toggle = () => {
    setIsOn(!isOn);
    if (!isOn) {
      setMessage("Activating 100x Mode...");
      setTimeout(() => setMessage("Error: Not enough caffeine."), 1500);
      setTimeout(() => { setIsOn(false); setMessage(""); }, 3000);
    }
  };

  return (
    <div className="border-4 border-black p-4 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center gap-2">
      <h4 className="font-bold flex items-center gap-2"><Activity size={18} /> 100x Dev Mode</h4>
      <div 
        onClick={toggle}
        className={`w-16 h-8 border-2 border-black rounded-full p-1 cursor-pointer transition-colors ${isOn ? 'bg-green-500' : 'bg-gray-300'}`}
      >
        <div className={`w-5 h-5 bg-white border-2 border-black rounded-full shadow-sm transition-transform ${isOn ? 'translate-x-8' : 'translate-x-0'}`}></div>
      </div>
      <span className="text-xs font-mono min-h-5 text-red-600 font-bold">{message}</span>
    </div>
  );
};

export const FAQItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-4 border-black bg-white mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 font-bold flex justify-between items-center hover:bg-gray-100"
      >
        <span>{q}</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isOpen && (
        <div className="p-4 border-t-2 border-black bg-yellow-100 font-mono text-sm">
          {a}
        </div>
      )}
    </div>
  );
};