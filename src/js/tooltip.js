export default class Tooltip {
  constructor() {
    this.tooltips = [];
  }

  showTooltip() {
    const tooltipElement = document.createElement('DIV');
    const btn = document.querySelector('.btn');

    tooltipElement.classList.add('popover');
    tooltipElement.innerHTML = "<h3 class='popover-header'>Popover title</h3><div class='arrow'></div><div class='popover-body'>And here's some amazing content. It's very engaging. Right?</div>";

    this.tooltips.push({
      element: tooltipElement,
    });

    document.body.appendChild(tooltipElement);

    const {
      left, top,
    } = btn.getBoundingClientRect();

    tooltipElement.style.left = `${left - (left / 4)}px`;
    tooltipElement.style.top = `${top - tooltipElement.getBoundingClientRect().height - 13}px`;
  }

  removeTooltip() {
    document.querySelector('.popover').remove();
    this.tooltips = [];
  }
}
