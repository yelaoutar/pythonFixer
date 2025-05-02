const canvases = document.querySelectorAll(".fancyButton");

canvases.forEach((canvas) => {
  const parent = canvas.parentElement;
  const ctx = canvas.getContext("2d");

  function drawButton(scale = 0.9, strokeColor = "#1EAEDB", fillColor = null) {
    const width = 260 * scale;
    const height = 100 * scale;

    canvas.width = width;
    canvas.height = height;

    // Clear any previous canvas drawings
    ctx.clearRect(0, 0, width, height);

    ctx.lineWidth = 2.5 * scale;
    ctx.strokeStyle = strokeColor;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    ctx.beginPath();
    ctx.moveTo(0 * scale, 0 * scale);
    ctx.lineTo(250 * scale, 0 * scale);
    ctx.lineTo(250 * scale, 40 * scale);
    ctx.lineTo(216 * scale, 65 * scale);
    ctx.lineTo(0 * scale, 65 * scale);
    ctx.lineTo(0 * scale, 36 * scale);
    ctx.lineTo(20 * scale, 36 * scale);
    ctx.lineTo(20 * scale, 30 * scale);
    ctx.lineTo(0 * scale, 30 * scale);
    ctx.closePath();

    if (fillColor) {
      ctx.fillStyle = fillColor;
      ctx.fill();
    }

    ctx.stroke();
  }

  function updateButton(element, hover = false) {
    const scale = parseFloat(element.getAttribute("data-scale")) || 1;
    const strokeColor = element.getAttribute("data-color") || "#1EAEDB";
    const hoverFill = element.getAttribute("data-hover-fill") || null;
    const hoverText = element.getAttribute("data-hover-text") || null;

    const fillColor = hover ? hoverFill : null;
    drawButton(scale, strokeColor, fillColor);

    if (hover && hoverText) {
      element.style.color = hoverText;
    } else {
      element.style.color = strokeColor;
    }
  }

  // Initial draw
  updateButton(canvas, false);

  // Hover events
  parent.addEventListener("mouseenter", () => updateButton(canvas, true));
  parent.addEventListener("mouseleave", () => updateButton(canvas, false));
});
