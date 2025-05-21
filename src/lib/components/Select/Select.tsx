import { Select as AntdSelect, type SelectProps as AntdSelectProps } from 'antd';
import defaultTheme, { type Theme } from '@utils/theme';
import { MouseEventHandler, ReactElement, useContext, useEffect, useRef, useState } from 'react';
import { get } from 'lodash';
import { ThemeContext } from 'styled-components';

import { Icon, Tooltip } from '@components';
import { withDataId } from '@components/DataId/withDataId';
import { SelectOptionStyle, StyledSelectDropdown, StyledSpanOption, StyledSpanOptionSelected } from '@styles/Select/StyledSelect';
import { colors } from 'index';
import { filterOption, findSubstringIndices, getOptionsBySearch, getRegExpBasedOnInput } from './selectUtils';
import { ButtonPaginationSelector } from './ButtonPaginationSelector';

const ALL_CHARACTER = '*';
const ENTER_CHARACTER = 'Enter';

type CustomTagProps = {
    label: React.ReactNode;
    value: any;
    disabled?: boolean;
    onClose: (event?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    closable: boolean;
};

type Option = {
    value: string | number;
    label: string;
    color?: string;
    disabled?: boolean;
};

type DisplayValue = {
    key?: React.Key;
    value?: string | number;
    label?: any;
    title?: string | number;
    disabled?: boolean;
};

export const tagRenderButtonPagination = (props: CustomTagProps, options: Option[], maxTagLength: number, theme: Theme, deleteOptionAriaLabel: string): ReactElement => {
    const { value, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const option = options.filter((element) => element.value === value)[0];
    const parsedLabel = option.label.length > maxTagLength - 3 ? `${option.label.slice(0, maxTagLength - 3)}...` : option.label;

    return (
        <Tooltip title={option.label}>
            <StyledSpanOptionSelected
                className='tag-select-option-selected'
                color={options.filter((element) => element.value === value)[0].color}
                onMouseDown={onPreventMouseDown}
                style={{ marginRight: 4 }}
                data-testid={`tag-option-selected-${value}`}
                theme={theme}
            >
                {parsedLabel}
                {closable && (
                    <Icon
                        className='icon-close'
                        name='close'
                        size='small'
                        onClick={onClose as unknown as MouseEventHandler<SVGSVGElement>}
                        color={colors.white}
                        ariaLabel={deleteOptionAriaLabel}
                    />
                )}
            </StyledSpanOptionSelected>
        </Tooltip>
    );
};

export const dropdownRenderSelect = (
    menu: React.ReactElement,
    currentPage: number,
    options: Option[],
    handleChangePage: (page: number) => void,
    handleSelectAll: () => void,
    text: SelectTextProps,
    searchValue: string,
    mode: string,
    theme: Theme,
    pageSize?: number
) => (
    <StyledSelectDropdown data-testid='select-dropdown'>
        {menu}
        {pageSize !== undefined && ['multiple', 'tags'].includes(mode) && (
            <ButtonPaginationSelector
                pageSize={pageSize}
                currentPage={currentPage}
                handleSelectAll={handleSelectAll}
                onPageChange={handleChangePage}
                options={options}
                text={text}
                theme={theme}
                searchValue={searchValue}
            />
        )}
    </StyledSelectDropdown>
);

export const renderUnselectedOption = (option: any, searchValue: string, dataId: string) => {
    if (searchValue !== '' && (![...searchValue].every((char) => char === '*' || char === ' ') || !searchValue.includes(ALL_CHARACTER))) {
        const regex = getRegExpBasedOnInput(searchValue);
        if (regex === false) {
            return (
                <StyledSpanOption data-testid={`option-span-${option.value}`} data-id={`${dataId}.option-span-${option.value}`} value={option as string}>
                    {option}
                </StyledSpanOption>
            );
        }
        const indices = findSubstringIndices(option as string, regex);
        if (indices.start !== -1 && indices.end !== -1) {
            return (
                <StyledSpanOption data-testid={`option-span-${option}-bold`} data-id={`${dataId}.option-span-${option.value}-bold`} value={option as string}>
                    {[...option].map((letter, index) => {
                        const isBold = searchValue.includes(ALL_CHARACTER) ? index === indices.start || index === indices.end : index >= indices.start && index <= indices.end;
                        return isBold ? <b key={letter}>{letter}</b> : letter;
                    })}
                </StyledSpanOption>
            );
        }
    }
    return (
        <StyledSpanOption data-testid={`option-span-${option}`} value={option as string}>
            {option}
        </StyledSpanOption>
    );
};

const isDisabledOption = (option: Option, selectedValues: Array<string | number>, pageSize?: number) => {
    if (pageSize !== undefined) return selectedValues.length >= pageSize && !selectedValues.includes(option.value);
    return option.disabled;
};

export const singleOptionsRenderer = (options: Option[], selectedValue: string | number | undefined, theme: Theme, dataId: string) => <>
        {options.map((option) => (
                <AntdSelect.Option
                    id={option.value}
                    className='option-select'
                    key={option.value}
                    disabled={option.disabled}
                    value={option.value}
                    theme={theme}
                    selected={selectedValue === option.value}
                    data-testid={`select-option-${option.value}`}
                    data-id={`${dataId}.select-option-${option.value}`}
                    aria-label={option.label}
                >
                    {selectedValue === option.value ? (
                        <StyledSpanOptionSelected theme={theme} $isSingleSelect>
                            {option.label}
                        </StyledSpanOptionSelected>
                    ) : (
                        <StyledSpanOption data-testid={`option-span-${option.value}`} data-id={`${dataId}.option-span-${option.value}`} value={option.label}>
                            {option.label}
                        </StyledSpanOption>
                    )}
                </AntdSelect.Option>
            ))}
    </>

export const optionsRenderer = (options: Option[], selectedValues: Array<string | number>, searchValue: string, theme: Theme, dataId: string, currentPage: number, pageSize?: number) => {
    const startIndex = (currentPage - 1) * (pageSize ?? options.length);
    const endIndex = startIndex + (pageSize ?? options.length);
    let optionsToRender = searchValue === '' ? options : (getOptionsBySearch(options, searchValue) as Option[]);
    optionsToRender = optionsToRender.slice(startIndex, endIndex);
    return (
        <>
            {optionsToRender.map((option) => {
                const backgroundColor = selectedValues.includes(option.value) ? (option.color ? get(theme.color, option.color) : colors.gray400) : colors.white;
                return (
                    <AntdSelect.Option
                        id={option.value}
                        className='option-select'
                        key={option.value}
                        disabled={isDisabledOption(option, selectedValues, pageSize)}
                        value={option.value}
                        theme={theme}
                        color={option.color}
                        style={{
                            backgroundColor,
                        }}
                        selected={selectedValues.includes(option.value)}
                        data-testid={`select-option-${option.value}`}
                        data-id={`${dataId}.select-option-${option.value}`}
                        aria-label={option.label}
                    >
                        {selectedValues.includes(option.value) ? (
                            <StyledSpanOptionSelected theme={theme} color={option.color}>
                                {option.label}
                            </StyledSpanOptionSelected>
                        ) : (
                            renderUnselectedOption(option.label, searchValue, dataId)
                        )}
                    </AntdSelect.Option>
                );
            })}
        </>
    );
};

export type SelectTextProps = {
    select: string;
    all: string;
    connector: string;
    content: string;
    overflow: string;
};

export type SelectProps = Omit<AntdSelectProps, 'options' | 'mode'> & {
    dataId?: string;
    defaultValues?: any[];
    pageSize?: number;
    text?: SelectTextProps;
    options?: Array<Option>;
    theme?: Theme;
    isLoading?: boolean;
    maxTagLength?: number;
    overflowLength?: number;
    handleButtonSelectAll?: (values: any[]) => void;
    handleClearAll?: () => void;
    mode?: 'multiple' | 'single';
    showOptionsAriaLabel: string;
    hideOptionsAriaLabel: string;
    clearAllOptionsAriaLabel?: string;
    deleteOptionSelectedAriaLabel?: string;
};

type BaseSelectRef = {
    focus: () => void;
    blur: () => void;
};

export const Select = withDataId(
    ({
        dataId = 'select',
        defaultValues = [],
        mode,
        options: originalOptions = [],
        pageSize,
        text = {
            select: 'Select',
            all: 'all',
            connector: 'of',
            content: '"All items"',
            overflow: 'and more...',
        },
        placeholder = 'Select',
        isLoading,
        onChange,
        maxTagLength = 20,
        overflowLength = 5,
        handleButtonSelectAll,
        handleClearAll,
        allowClear,
        disabled,
        showOptionsAriaLabel,
        hideOptionsAriaLabel,
        clearAllOptionsAriaLabel,
        deleteOptionSelectedAriaLabel,
        ...props
    }: SelectProps) => {
        const [showDropdown, setShowDropdown] = useState(false);
        const [selectedValues, setSelectedValues] = useState<any[]>([]);
        const [currentPage, setCurrentPage] = useState<number>(1);
        const [searchValue, setSearchValue] = useState('');
        const ref = useRef<BaseSelectRef | null>(null);
        const sValue = useRef('');
        const th = useContext(ThemeContext) || defaultTheme;
        const options = originalOptions || [];

        useEffect(() => {
            setCurrentPage(1);
        }, [searchValue]);

        useEffect(() => {
            if (defaultValues ) {
                setSelectedValues(defaultValues);
            }
        }, [defaultValues]);

        const handleChangePage = (page: number) => setCurrentPage(page);

        const handleSelectAll = () => {
            const actualPage = currentPage;
            const selectedOptions = searchValue !== '' ? getOptionsBySearch(options, searchValue) : options;
            const startIndex = (actualPage - 1) * (pageSize ?? 1);
            const endIndex = startIndex + (pageSize ?? 1);
            const slicedOptions = selectedOptions.slice(startIndex, endIndex);
            const allValues = slicedOptions.map((option) => option.value);

            setSelectedValues(() => allValues);
            if (handleButtonSelectAll) handleButtonSelectAll(allValues);
        };

        const closeDropdown = () => {
            setCurrentPage(1);
            sValue.current = '';
            setSearchValue('');
            if (ref !== null && ref.current !== null) (ref.current as HTMLElement).blur();
            setShowDropdown(false);
        };

        const reset = () => {
            if (handleClearAll) handleClearAll();
            setCurrentPage(1);
            sValue.current = '';
            setSearchValue('');
            setSelectedValues([]);
            if (ref !== null && ref.current !== null) (ref.current as HTMLElement).blur();
            setShowDropdown(false);
        };

        return (
            <>
                <SelectOptionStyle $theme={th} />
                {mode === undefined || mode === 'single' ? (
                    <AntdSelect
                        className={`custom-select ${props.className}`}
                        data-testid='select'
                        autoClearSearchValue
                        data-id={dataId}
                        defaultValue={defaultValues}
                        filterOption={(input: string, option?: any) => {
                            const opt = options.find(x => x.value === option.value)
                            if (opt && opt?.label) {
                                return (opt.label as string).toLowerCase().includes(input.toLowerCase());
                            }
                            return false;
                        }}
                        loading={isLoading}
                        placeholder={placeholder}
                        open={showDropdown}
                        ref={(r) => {
                            ref.current = r;
                        }}
                        searchValue={sValue.current}
                        showSearch
                        style={{ width: '100%' }}
                        suffixIcon={
                            <>
                                {allowClear && (searchValue !== '' || selectedValues.length > 0) && (
                                    <Icon
                                        className='selectable-icon'
                                        color='gray'
                                        name='close'
                                        size='small'
                                        onClick={() => {
                                            reset();
                                        }}
                                        ariaLabel={clearAllOptionsAriaLabel || ''}
                                    />
                                )}
                                <Icon
                                    className='selectable-icon'
                                    color='gray'
                                    name={showDropdown ? 'chevron_up' : 'chevron_down'}
                                    size='small'
                                    onClick={(e) => {
                                        if (showDropdown) {
                                            closeDropdown();
                                            e.stopPropagation();
                                        }
                                        else
                                            setShowDropdown(true);
                                    }}
                                    ariaLabel={showDropdown ? hideOptionsAriaLabel : showOptionsAriaLabel}
                                />
                            </>
                        }
                        value={selectedValues}
                        onSelect={(value, option) => {
                            if (onChange !== undefined) onChange(value, option);
                            setSelectedValues([value]);
                            closeDropdown();
                        }}
                        onDropdownVisibleChange={(e) => {
                            if (e !== showDropdown) {
                                setShowDropdown(e);
                            }
                        }}
                        onFocus={() => {
                            setShowDropdown(true);
                        }}
                        onSearch={(searchText) => {
                            setSearchValue(searchText);
                            sValue.current = searchText;
                            return searchText;
                        }}
                        disabled={disabled}
                        aria-disabled={disabled}
                        aria-expanded={showDropdown}
                        {...props}
                    >
                        {singleOptionsRenderer(options, selectedValues.length > 0 ? selectedValues[0] : undefined, defaultTheme, dataId)}
                    </AntdSelect >
                ) : (
                    <AntdSelect
                        autoClearSearchValue={false}
                        data-id={dataId}
                        data-testid='select'
                        defaultValue={defaultValues}
                        dropdownRender={
                            text
                                ? (menu: ReactElement) =>
                                    dropdownRenderSelect(
                                        menu,
                                        currentPage,
                                        options,
                                        handleChangePage,
                                        handleSelectAll,
                                        text,
                                        searchValue,
                                        mode,
                                        defaultTheme,
                                        pageSize
                                    )
                                : undefined
                        }
                        optionFilterProp='children'
                        filterOption={filterOption}
                        maxTagCount='responsive'
                        maxTagPlaceholder={(displayValue: DisplayValue[]) => {
                            const textOverflow = overflowLength && displayValue.length > overflowLength ? ` ${text?.overflow}` : '';
                            const valuesToRender = `${displayValue.slice(0, overflowLength).map((value) => ` ${value?.label?.props?.value}`)}${textOverflow}`;
                            return <Tooltip title={valuesToRender}>{`+${displayValue.length}`}</Tooltip>;
                        }}
                        menuItemSelectedIcon={<Icon color='white' name='close' size='small' ariaLabel={deleteOptionSelectedAriaLabel || ''} />}
                        mode={mode}
                        open={showDropdown}
                        placeholder={placeholder}
                        searchValue={sValue.current}
                        style={{ width: '100%' }}
                        showSearch
                        suffixIcon={
                            <>
                                {allowClear && (searchValue !== '' || selectedValues.length > 0) && (
                                    <Icon
                                        className='selectable-icon'
                                        color='gray'
                                        name='close'
                                        size='small'
                                        onClick={() => {
                                            reset();
                                        }}
                                        ariaLabel={clearAllOptionsAriaLabel || ''}
                                    />
                                )}
                                <Icon
                                    className='selectable-icon'
                                    color='gray'
                                    name={showDropdown ? 'chevron_up' : 'chevron_down'}
                                    size='small'
                                    onClick={(e) => {
                                        if (showDropdown) {
                                            closeDropdown();
                                            e.stopPropagation();
                                        }
                                        else
                                            setShowDropdown(true);
                                    }}
                                    ariaLabel={showDropdown ? hideOptionsAriaLabel : showOptionsAriaLabel}
                                />
                            </>
                        }
                        ref={(r) => {
                            if (ref !== null && r !== null) ref.current = r;
                        }}
                        onDropdownVisibleChange={(e) => {
                            if (e !== showDropdown) {
                                setShowDropdown(e);
                                if (!e) {
                                    setCurrentPage(1);
                                    setSearchValue('');
                                    sValue.current = '';
                                }
                            }
                        }}
                        tagRender={maxTagLength ? (customTagProps: CustomTagProps) => tagRenderButtonPagination(customTagProps, options, maxTagLength, defaultTheme, deleteOptionSelectedAriaLabel || '') : undefined}
                        value={selectedValues}
                        dropdownAlign={{ offset: [0, 3] }}
                        onChange={(values, _options) => {
                            if (onChange !== undefined) onChange(values, _options);
                            setSelectedValues(values);
                        }}
                        onFocus={() => {
                            setShowDropdown(true);
                        }}
                        onSearch={(searchText) => {
                            setSearchValue(searchText);
                            sValue.current = searchText;
                            return searchText;
                        }}
                        onInputKeyDown={(e) => {
                            if (['multiple', 'tags'].includes(mode) && e.key === ENTER_CHARACTER && sValue.current.includes(ALL_CHARACTER)) {
                                handleSelectAll();
                                e.stopPropagation();
                            }
                        }}
                        disabled={disabled}
                        aria-disabled={disabled}
                        aria-expanded={showDropdown}
                        {...props}
                    >
                        {optionsRenderer(options, selectedValues, searchValue, defaultTheme, dataId, currentPage, pageSize)}
                    </AntdSelect>
                )}
            </>
        );
    },
    'select'
);

// DO NOT REMOVE, NOT WORKING W/O THIS LINE (UNKNOWN REASON)
Select.defaultProps = {
    defaultValues: [],
};
