
  document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('earth-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Function to detect if an element is visible (not hidden by parent display: none)
    function isElementVisible(el) {
      return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
    }

    const setCanvasDimensions = () => {
      let size;
      if (window.innerWidth < 1000) {
        size = Math.min(window.innerWidth * 0.55, window.innerHeight * 0.55);
      } else if (window.innerWidth >= 1000 && window.innerWidth < 1120) {
        size = Math.min(window.innerWidth * 0.6, window.innerHeight * 0.6);
      } else {
        size = Math.min(window.innerWidth * 0.7, window.innerHeight * 0.7);
      }
      canvas.width = size;
      canvas.height = size;

      radius = canvas.width * 0.45;
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
    };

    let radius = 0;
    let centerX = 0;
    let centerY = 0;
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const meridians = 30;
    const parallels = 15;

    let animationFrame;
    let rotation = 0;
    let isAnimating = false;

    const drawEarth = () => {
      if (!isElementVisible(canvas)) {
        cancelAnimationFrame(animationFrame);
        isAnimating = false;
        return;
      }
      // console.log("earth drawing")
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0EA5E9';

      for (let m = 0; m < meridians; m++) {
        const meridianAngle = (m / meridians) * Math.PI * 2;

        for (let point = 0; point <= 180; point += 3) {
          const angle = (point / 180) * Math.PI;
          const rotatedAngle = meridianAngle + rotation;

          const perspectiveX = Math.sin(rotatedAngle) * Math.sin(angle);
          ctx.globalAlpha = 0.2 + Math.max(0, (1 + perspectiveX) / 2) * 0.6;

          const x = centerX + radius * Math.sin(rotatedAngle) * Math.sin(angle);
          const y = centerY + radius * Math.cos(angle);

          const char = characters[Math.floor(Math.random() * characters.length)];
          ctx.font = '10px monospace';
          ctx.fillText(char, x, y);
        }
      }

      for (let p = 1; p < parallels; p++) {
        const parallelAngle = (p / parallels) * Math.PI;
        const circleRadius = radius * Math.sin(parallelAngle);
        const y = centerY + radius * Math.cos(parallelAngle);

        for (let point = 0; point < 360; point += 10) {
          const angle = (point / 180) * Math.PI;
          const rotatedAngle = angle + rotation;

          const perspectiveX = Math.sin(rotatedAngle);
          ctx.globalAlpha = 0.2 + Math.max(0, (1 + perspectiveX) / 2) * 0.6;

          const x = centerX + circleRadius * Math.sin(rotatedAngle);
          const char = characters[Math.floor(Math.random() * characters.length)];

          ctx.font = '10px monospace';
          ctx.fillText(char, x, y);
        }
      }

      rotation += 0.002;
      isAnimating = true;
      animationFrame = requestAnimationFrame(drawEarth);
    };

    // Initial sizing and drawing
    setCanvasDimensions();
    drawEarth();

    // On resize: resize canvas and re-draw only if not animating
    window.addEventListener('resize', () => {
      setCanvasDimensions();
      if (!isAnimating && isElementVisible(canvas)) {
        drawEarth();
      }
    });

    // Cleanup on unload
    window.addEventListener('beforeunload', () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrame);
    });
  });

