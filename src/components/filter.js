import AbstractComponent from './abstract-component';

const FILTER_ID_PREFIX = `filter__`;

const getFilterNameById = (id) => {
	return id.substring(FILTER_ID_PREFIX.length);
};

const createFilterMarkUp = (filter, isChecked) => {
	const { name, count } = filter; // деструктуризация
	return `<input
    type="radio"
    id="filter__${name}"
    class="filter__input visually-hidden"
    name="filter"
    ${isChecked ? `checked` : ``}
  />
  <label for="filter__${name}" class="filter__label">
    ${name}<span class="filter__${name}-count">${count}</span></label
  >`;
};

const createFilter = (filters) => {
	const filtersMarkup = filters.map((it) => createFilterMarkUp(it, it.checked)).join(`\n`);

	return `<section class="main__filter filter container">
    ${filtersMarkup}
  </section>`;
};

export default class Filter extends AbstractComponent {
	constructor(filters) {
		super();

		this._filter = filters;
	}

	getTemplate() {
		return createFilter(this._filter);
	}

	setFilterChangeHandler(handler) {
		this.getElement().addEventListener(`change`, (evt) => {
			const filterName = getFilterNameById(evt.target.id);
			handler(filterName);
		});
	}
}
