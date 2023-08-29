const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const steps = []

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

steps.push(() => {
    // Draw head
    ctx.beginPath();
    ctx.arc(centerX, centerY - 50, 25, 0, Math.PI * 2, true);
    ctx.stroke();
});

steps.push(() => {
    // Draw body
    ctx.moveTo(centerX, centerY - 25);
    ctx.lineTo(centerX, centerY + 50);
    ctx.stroke();
});

steps.push(() => {
    // Draw left arm
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX - 25, centerY - 25);
    ctx.stroke();
});

steps.push(() => {
    // Draw right arm
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + 25, centerY - 25);
    ctx.stroke();
});

steps.push(() => {
    // Draw left leg
    ctx.moveTo(centerX, centerY + 50);
    ctx.lineTo(centerX - 25, centerY + 100);
    ctx.stroke();
});

steps.push(() => {
    // Draw right leg
    ctx.moveTo(centerX, centerY + 50);
    ctx.lineTo(centerX + 25, centerY + 100);
    ctx.stroke();
});


export const iterator = steps[Symbol.iterator]();
export const iteratorLength = steps.length;