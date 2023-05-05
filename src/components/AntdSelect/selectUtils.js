export const getOptionsBySearch = (optionsAvailable, currentSearchValue) => {
  let filteredOptions = optionsAvailable;
  if (currentSearchValue.includes('*')) {
    const parsedSearchValue = currentSearchValue.split('*')[0];
    filteredOptions = optionsAvailable.filter(option => {
      return option.label
        .toLowerCase()
        .includes(parsedSearchValue.toLowerCase());
    });
  } else if (currentSearchValue !== '') {
    filteredOptions = optionsAvailable.filter(option => {
      return option.label
        .toLowerCase()
        .includes(currentSearchValue.toLowerCase());
    });
  }
  return filteredOptions;
};
