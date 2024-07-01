import { DefaultOptionType } from 'antd/es/select';

export const regExpWithoutAllCharacter = (input: string) => new RegExp(input, 'ig');
export const regExpWithSubstringsWithAllCharacter = (string: string) => new RegExp(`${string}`, 'ig');
export const regExpWith2Substrings = (initialString: string, finalString: string) => new RegExp(`${initialString}.*?${finalString}`, 'ig');

export const getRegExpBasedOnInput = (input: string) => {
    try {
        if (input.includes('*')) {
            const splitInput = input.split('*');
            const initialPartSearchValue = splitInput[0];
            const lastPartSearchValue = splitInput[1];

            if (initialPartSearchValue !== '' && initialPartSearchValue !== undefined && lastPartSearchValue === '') {
                return regExpWithSubstringsWithAllCharacter(initialPartSearchValue);
            }
            if (initialPartSearchValue === '' && lastPartSearchValue !== '' && lastPartSearchValue !== undefined) {
                return regExpWithSubstringsWithAllCharacter(lastPartSearchValue);
            }
            if (initialPartSearchValue !== '' && lastPartSearchValue !== '' && initialPartSearchValue !== undefined && lastPartSearchValue !== undefined) {
                return regExpWith2Substrings(initialPartSearchValue, lastPartSearchValue);
            }
        }
        return regExpWithoutAllCharacter(input);
    } catch (e) {
        return false;
    }
};

export const getOptionsBySearch = (
    optionsAvailable: Array<{
        value: string | number;
        label: string;
        color?: string;
    }>,
    currentSearchValue: string
) => {
    if ([...currentSearchValue].every((char) => char === '*' || char === ' ')) {
        return optionsAvailable;
    }
    if (![...currentSearchValue].every((char) => char === '*' || char === ' ')) {
        const regex = getRegExpBasedOnInput(currentSearchValue);
        if (regex === false) return [];
        return optionsAvailable.filter((option) => option.label.match(regex));
    }
    if (currentSearchValue !== '' && !currentSearchValue.includes('*')) {
        return optionsAvailable.filter((option) => option.label.toLowerCase().includes(currentSearchValue.toLowerCase()));
    }
    return optionsAvailable;
};

export const findSubstringIndices = (string: string, regex: RegExp) => {
    const match = regex.exec(string);
    return match !== null
        ? {
              start: match.index,
              end: regex.lastIndex - 1,
          }
        : {
              start: -1,
              end: -1,
          };
};

export const singleOptionFilter = (input: string, option?: any) => {
    if (option?.label) {
        return (option.label as string).toLowerCase().includes(input.toLowerCase());
    }
    return false;
};

export const filterOption = (input: string, option?: DefaultOptionType) => {
    if ([...input].every((char) => char === '*' || char === ' ')) {
        return true;
    }
    if (![...input].every((char) => char === '*' || char === ' ')) {
        if (option?.children && (option.children as any).props.value) {
            const regex = getRegExpBasedOnInput(input);
            if (regex === false) return false;
            return (option.children as any).props.value.match(regex);
        }
        return false;
    }
    if (input !== '' && !input.includes('*')) {
        if (option?.children && (option.children as any).props.value) {
            return (option.children as any).props.value.toLowerCase().includes(input.toLowerCase());
        }
        return false;
    }
    return false;
};
