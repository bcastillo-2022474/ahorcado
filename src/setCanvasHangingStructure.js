export const setCanvasHangingStructure = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw horizontal beam
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(150, 20);
    ctx.stroke();

    // Draw vertical beam
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 250);
    ctx.stroke();

    // Draw noose rope
    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.lineTo(100, 20);
    ctx.stroke();

    // Draw noose right
    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.quadraticCurveTo(160, 120, 100, 125);
    ctx.stroke();

    // Draw noose left
    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.quadraticCurveTo(40, 120, 100, 125);
    ctx.stroke();
}
