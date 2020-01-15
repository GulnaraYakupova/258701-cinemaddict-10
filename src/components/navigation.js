/**
 * Модуль для создания экземппляра класса для основной навигации
 */

import AbstractComponent from './abstract-component.js';

/**
 * Класс для создания компонента основной навигаци
 */
export default class Navigation extends AbstractComponent {
  constructor(filters) {
    super();

    this._filters = filters;
  }

  /** Формирует разметку блока с фильтрами
   * @param{Object} filter - значение фильтра и количество
   * @param{Boolean} isChecked
   * @param{Boolean} isStats
   * @return {String}
   * @private
   */
  _createFilterMarkup(filter, isChecked, isStats) {
    const {name, count} = filter;
    const isItemChecked = `${isChecked ? `main-navigation__item--active` : ``}`;
    const isItAdditionalItem = `${isStats ? `main-navigation__item--additional` : ``}`;
    const isItCountingItem = `${isChecked || isStats ? `` : `<span class="main-navigation__item-count">${count}</span>`}`;
    return `<a href="#${name}" class="main-navigation__item
      ${isItemChecked}
      ${isItAdditionalItem}">${name}
      ${isItCountingItem}
    </a>`;
  }

  getTemplate() {
    return (`<nav class="main-navigation">
        ${this._filters.map((filter, i) => this._createFilterMarkup(filter, i === 0, i === this._filters.length - 1)).join(``)}
      </nav>`);
  }
}
