import React, { useRef } from 'react';

const coreSkill = {
  title: 'Embedded Firmware',
  subtitle: 'Core expertise',
  description:
    'Low-level firmware development, drivers, RTOS, bare-metal, bootloaders, OTA updates, peripheral integration and on-device intelligence.',
  tags: 'STM32, ESP32, RTOS, Linux, Yocto, BLE, Wi-Fi, MQTT, TensorFlow Lite...',
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      style={{ width: 48, height: 48 }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
      />
    </svg>
  ),
};

const integrations = [
  {
    title: 'Cloud Connectivity',
    description: 'Connecting your devices to the cloud. Data ingestion, device management and orchestration.',
    tags: 'AWS IoT, IAM, Lambda...',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        style={{ width: 40, height: 40 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
        />
      </svg>
    ),
  },
  {
    title: 'Data Pipeline',
    description: 'Routing and storing your device data. Time-series, structured databases, and querying.',
    tags: 'InfluxDB, SQL...',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        style={{ width: 40, height: 40 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
  },
  {
    title: 'Web & Dashboards',
    description: 'Custom web apps, real-time dashboards and monitoring interfaces.',
    tags: 'Next.js, Grafana, custom web tools...',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        style={{ width: 40, height: 40 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  },
  {
    title: 'DevOps & AI Tooling',
    description: 'CI/CD, containerization, AI-assisted development, and security practices.',
    tags: 'Docker, GitLab CI, Ansible, Zed + Claude Code, security scans...',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        style={{ width: 40, height: 40 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const cardBase = {
  background: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(8px)',
  borderRadius: '16px',
  padding: '28px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
};

export default function ToolboxCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 340;
      scrollRef.current.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Core skill — hero card */}
      <div
        style={{
          ...cardBase,
          border: '2px solid #00adb5',
          padding: '36px',
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <div style={{ color: '#00adb5', marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>
          {coreSkill.icon}
        </div>
        <p
          style={{
            color: '#00adb5',
            fontSize: '0.8rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '4px',
          }}
        >
          {coreSkill.subtitle}
        </p>
        <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#222831', marginBottom: '12px' }}>
          {coreSkill.title}
        </h4>
        <p style={{ color: '#393e46', lineHeight: 1.7, marginBottom: '10px' }}>{coreSkill.description}</p>
        <p style={{ color: '#00adb5', fontSize: '0.9rem', fontStyle: 'italic' }}>{coreSkill.tags}</p>
      </div>

      {/* Integration cards — horizontal scroll */}
      <div style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <span
            style={{
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(8px)',
              padding: '8px 20px',
              borderRadius: '12px',
              color: '#393e46',
              fontSize: '0.95rem',
            }}
          >
            And I connect your devices all the way up
          </span>
        </div>

        {/* Left arrow */}
        <button
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
          style={{
            position: 'absolute',
            left: -20,
            top: '55%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'rgba(255,255,255,0.95)',
            border: '1px solid rgba(0,0,0,0.1)',
            borderRadius: '50%',
            width: 44,
            height: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            color: '#00adb5',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            style={{ width: 20, height: 20 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          style={{
            position: 'absolute',
            right: -20,
            top: '55%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'rgba(255,255,255,0.95)',
            border: '1px solid rgba(0,0,0,0.1)',
            borderRadius: '50%',
            width: 44,
            height: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            color: '#00adb5',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            style={{ width: 20, height: 20 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="toolbox-scroll"
          style={{
            display: 'flex',
            gap: '20px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            padding: '8px 4px',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <style>{`.toolbox-scroll::-webkit-scrollbar { display: none; }`}</style>
          {integrations.map((tool, index) => (
            <div
              key={index}
              style={{
                ...cardBase,
                flex: '0 0 300px',
                scrollSnapAlign: 'start',
                border: '1px solid rgba(0,0,0,0.05)',
              }}
            >
              <div style={{ color: '#00adb5', marginBottom: '16px' }}>{tool.icon}</div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#222831', marginBottom: '10px' }}>
                {tool.title}
              </h4>
              <p style={{ color: '#393e46', lineHeight: 1.6, marginBottom: '8px', fontSize: '0.9rem' }}>
                {tool.description}
              </p>
              <p style={{ color: '#00adb5', fontSize: '0.8rem', fontStyle: 'italic' }}>{tool.tags}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
