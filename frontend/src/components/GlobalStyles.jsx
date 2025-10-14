import React from 'react';

export default function GlobalStyles() {
  return (
    <style jsx global>{`
      @keyframes slideRight {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(calc(100vw + 300px));
        }
      }

      @keyframes slideLeft {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(calc(-100vw - 300px));
        }
      }

      @keyframes float {
        0%,
        100% {
          transform: translateY(0) rotate(0deg);
        }
        50% {
          transform: translateY(-20px) rotate(10deg);
        }
      }

      @keyframes floatSlow {
        0%,
        100% {
          transform: translateY(0) rotate(0deg);
        }
        50% {
          transform: translateY(-20px) rotate(10deg);
        }
      }

      @keyframes rotate3d {
        0% {
          transform: rotateY(0deg) rotateZ(0deg);
        }
        100% {
          transform: rotateY(360deg) rotateZ(360deg);
        }
      }

      @keyframes rotate3dSlow {
        0% {
          transform: rotateY(0deg) rotateZ(0deg);
        }
        100% {
          transform: rotateY(360deg) rotateZ(360deg);
        }
      }

      @keyframes glitch {
        0%,
        90%,
        100% {
          transform: translate(0);
        }
        92% {
          transform: translate(-2px, 2px);
        }
        94% {
          transform: translate(2px, -2px);
        }
        96% {
          transform: translate(-2px, -2px);
        }
      }

      .animate-slideRight {
        animation: slideRight 8s infinite linear;
      }

      .animate-slideLeft {
        animation: slideLeft 8s infinite linear;
      }

      .animate-float {
        animation: float 6s infinite ease-in-out;
      }

      .animate-floatSlow {
        animation: floatSlow 8s infinite ease-in-out;
      }

      .animate-rotate3d {
        animation: rotate3d 10s infinite linear;
      }

      .animate-rotate3dSlow {
        animation: rotate3dSlow 15s infinite linear;
      }

      .animate-glitch {
        animation: glitch 5s infinite;
      }
    `}</style>
  );
}