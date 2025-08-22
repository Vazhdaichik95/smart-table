//import {rules, createComparison} from "../lib/compare.js";

export function initSearching(searchField) {
  // @todo: #5.1 — настроить компаратор

  return (query, state, action) => {
    return state[searchField]
      ? Object.assign({}, query, {
          search: state[searchField],
        })
      : query;
  };

  //const compare = createComparison(['skipEmptyTargetValues'], [rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)]);
  /*
    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        return data.filter(row => compare(row, state));
    }*/
}
