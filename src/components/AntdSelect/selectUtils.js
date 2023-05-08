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

export const filterOption = (input, option) => {
  if (input.includes('*')) {
    const parsedSearchValue = input.split('*')[0];
    return option.value.toLowerCase().includes(parsedSearchValue.toLowerCase());
  }
  if (input !== '' && !input.includes('*')) {
    return option.value.toLowerCase().includes(input.toLowerCase());
  }
  return false;
};
