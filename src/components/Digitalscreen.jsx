import React, { useState, useEffect } from 'react';
import '../index.css';

export default function DigitalAgencyHero() {
  const [activeTab, setActiveTab] = useState('Mobile Apps');

  // 👇 TEXT TYPING STATES
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tabs = [
    'Web Development',
    'Mobile Apps',
    'Cloud Services',
    'UI/UX Design',
    'Fullstack',
    'Performance Marketing'
  ];

  // -------------------------------
  // ✨ Auto Typing Logic for Tabs
  // -------------------------------
  useEffect(() => {
    const currentWord = tabs[wordIndex];

    let speed = isDeleting ? 50 : 100;

    const typing = setTimeout(() => {
      if (!isDeleting) {
        // typing forward
        setDisplayText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        // fully typed
        if (charIndex === currentWord.length) {
          setIsDeleting(true);
          setActiveTab(currentWord);   // 🔥 update the active tab
        }
      } else {
        // deleting
        setDisplayText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % tabs.length);
        }
      }
    }, speed);

    return () => clearTimeout(typing);
  }, [charIndex, isDeleting, wordIndex]);


  // ---------------------------------------
  // EXISTING CONTENT MAPPING (unchanged)
  // ---------------------------------------
  const contentData = {
    'Web Development': {
      emoji: '🌐',
      title: 'Web Development Service',
      className: 'WebDevTeam',
      method: 'buildWebsite',
      param: 'technology',
      outputParts: { first: 'Responsive', rest: 'websites with modern frameworks.' }
    },
    'Mobile Apps': {
      emoji: '📱',
      title: 'Mobile Apps Service',
      className: 'MobileAppTeam',
      method: 'createApp',
      param: 'platform',
      outputParts: { first: 'Beautiful', rest: 'apps with seamless UX.' }
    },
    'Cloud Services': {
      emoji: '☁️',
      title: 'Cloud Services',
      className: 'CloudTeam',
      method: 'deployInfra',
      param: 'provider',
      outputParts: { first: 'Scalable', rest: 'infrastructure on AWS, Azure & GCP.' }
    },
    'UI/UX Design': {
      emoji: '🎨',
      title: 'UI/UX Design Service',
      className: 'DesignTeam',
      method: 'createDesign',
      param: 'product',
      outputParts: { first: 'Stunning', rest: 'designs with user-first approach.' }
    },
    'Fullstack': {
      emoji: '⚙️',
      title: 'Fullstack Development',
      className: 'FullstackTeam',
      method: 'buildSolution',
      param: 'requirements',
      outputParts: { first: 'End-to-end', rest: 'solutions from database to UI.' }
    },
    'Performance Marketing': {
      emoji: '📈',
      title: 'Performance Marketing',
      className: 'MarketingTeam',
      method: 'runCampaign',
      param: 'channel',
      outputParts: { first: 'Data-driven', rest: 'campaigns with ROI focus.' }
    }
  };

  const content = contentData[activeTab];

  // ----------------------------------------------------
  // FINAL JSX — Only header tabs text gets typing effect
  // ----------------------------------------------------
  return (
    <div className="digital-agency-hero">
      <div className="hero-container outer-glow">
        <div className="browser-window">

          {/* HEADER */}
          <div className="browser-header">
            <div className="traffic-lights">
              <div className="traffic-light red"></div>
              <div className="traffic-light yellow"></div>
              <div className="traffic-light green"></div>
            </div>

            {/* AUTO-TYPING TAB AREA */}
            <div className="nav-tabs">
              <span className="typed-text">{displayText}</span>
              <span className="cursor">|</span>
            </div>

            <div className="search-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* CONTENT */}
          <div className="code-content">
            <div className="main-heading">
              <h1>Custom Software Solutions & Digital Marketing Experts</h1>
            </div>

            <div className="code-block">
              <div className="code-line code-comment">
                <span className="comment-slash">//</span>
                <span className="comment-emoji">{content.emoji}</span>
                <span className="comment-text">{content.title}</span>
              </div>

              <div className="code-line">
                <span className="keyword">class</span>{' '}
                <span className="class-name">{content.className}</span>{' '}
                <span className="bracket">{'{'}</span>
              </div>

              <div className="code-line indent-1">
                <span className="method-name">{content.method}</span>
                <span className="bracket">(</span>
                <span className="param-name">{content.param}</span>
                <span className="bracket">)</span>{' '}
                <span className="bracket">{'{'}</span>
              </div>

              <div className="code-line indent-2">
                <span className="keyword">return</span>{' '}
                <span className="string">'{content.outputParts.first} '</span>{' '}
                <span className="bracket">+</span>{' '}
                <span className="param-name">{content.param}</span>{' '}
                <span className="bracket">+</span>{' '}
                <span className="string">' {content.outputParts.rest}'</span>
                <span className="bracket">;</span>
              </div>

              <div className="code-line indent-1 bracket">{'}'}</div>
              <div className="code-line bracket">{'}'}</div>

              <div className="code-line margin-top">
                <span className="keyword">const</span>{' '}
                <span className="method-name">team</span>{' '}
                <span className="bracket">=</span>{' '}
                <span className="keyword">new</span>{' '}
                <span className="class-name">{content.className}</span>
                <span className="bracket">();</span>
              </div>

              <div className="code-line">
                <span className="method-name">console</span>
                <span className="bracket">.</span>
                <span className="class-name">log</span>
                <span className="bracket">(</span>
                <span className="method-name">team</span>
                <span className="bracket">.</span>
                <span className="class-name">{content.method}</span>
                <span className="bracket">(</span>
                <span className="string">'iOS'</span>
                <span className="bracket">));</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* CURSOR BLINK STYLE */}
      <style>
        {`
        .typed-text {
          font-size: 18px;
          color: #00eaff;
          font-weight: 600;
          font-family: monospace;
        }
        .cursor {
          display: inline-block;
          width: 2px;
          background: #00eaff;
          animation: blink 0.7s infinite;
        }
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        `}
      </style>
    </div>
  );
}
