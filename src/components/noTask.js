import AbstractComponent from './abstract-component';

const createNoTaskTemplate = () => {
  return `<p class="board__no-tasks">
    Click «ADD NEW TASK» in menu to create your first task
  </p>`;
};

export default class noTasksComponent extends AbstractComponent {
  getTemplate() {
    return createNoTaskTemplate();
  }
};
