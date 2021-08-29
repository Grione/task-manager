export {generateFilters};

const filtersNames = [
    `all`, `overdue`, `today`, `favorites`, `repeating`, `archive`
];
const generateFilters = () => {
  return filtersNames.map((it)=> {
    return {
        name: it,
        count: Math.floor(Math.random() * 10),
    };
  });
};
