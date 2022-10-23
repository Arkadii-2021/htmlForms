import Tooltip from './tooltip';

const btn = document.querySelector('.btn');

const tooltip = new Tooltip();

export default function popoverActive() {
  btn.addEventListener('click', () => {
    if (tooltip.tooltips.length === 0) {
      tooltip.showTooltip(btn);
    } else tooltip.removeTooltip();
  });
}
