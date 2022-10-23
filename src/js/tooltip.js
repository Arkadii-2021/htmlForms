export default class Tooltip {
  constructor() {
    this.tooltips = [];
  }

  showTooltip(element) {
    const tooltipElement = document.createElement('DIV');

    tooltipElement.classList.add('popover');
    tooltipElement.innerHTML = "<h3 class='popover-header'>Popover title</h3><div class='arrow'></div><div class='popover-body'>And here's some amazing content. It's very engaging. Right?</div>";

    this.tooltips.push({
      element: tooltipElement,
    });

    document.body.appendChild(tooltipElement);

    const { left } = element.getBoundingClientRect();

    tooltipElement.style.left = `${left + (left - element.offsetWidth) / 2 - 12}px`;
    tooltipElement.style.top = `${element.offsetHeight + (element.offsetHeight / 2) + 8}px`;
  }

  removeTooltip() {
    document.querySelector('.popover').remove();
    this.tooltips = [];
  }
}
