import { DefaultOptionType } from 'antd/es/select';
export declare const regExpWithoutAllCharacter: (input: string) => RegExp;
export declare const regExpWithSubstringsWithAllCharacter: (string: string) => RegExp;
export declare const regExpWith2Substrings: (initialString: string, finalString: string) => RegExp;
export declare const getRegExpBasedOnInput: (input: string) => false | RegExp;
export declare const getOptionsBySearch: (optionsAvailable: Array<{
    value: string | number;
    label: string;
    color?: string;
}>, currentSearchValue: string) => {
    value: string | number;
    label: string;
    color?: string;
}[];
export declare const findSubstringIndices: (string: string, regex: RegExp) => {
    start: number;
    end: number;
};
export declare const singleOptionFilter: (input: string, option?: any) => boolean;
export declare const filterOption: (input: string, option?: DefaultOptionType) => any;
