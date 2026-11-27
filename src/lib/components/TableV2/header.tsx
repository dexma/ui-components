import { useContext, useEffect, useRef, type KeyboardEvent, type MouseEvent } from 'react';
import { ThemeContext } from 'styled-components';
import omit from 'lodash/omit';
import { Button, Input, type InputRef } from 'antd';
import type { ColumnType, FilterDropdownProps } from 'antd/es/table/interface';

import defaultTheme from '@utils/theme';
import { Icon, Tooltip } from '@components';
import { StyledSearchDropdown } from '@styles/TableV2/StyledTableV2';
import { extendTitle, type LeafColumn } from './columns';
import type { TableLabels } from './labels';

const HeaderIcon = ({ name, active, label }: { name: string; active: boolean; label: string }) => {
    const th = useContext(ThemeContext) || defaultTheme;
    // Figma's Dexma header only shows the inactive icon (gray500); active uses primary, as antd marks an active filter.
    return <Icon name={name} size={12} ariaLabel={label} color={active ? th.primary : 'gray500'} />;
};

// antd sorts a sortable header on click and on Enter, so header controls keep both to themselves.
export const stopSorting = (event: MouseEvent) => event.stopPropagation();
export const stopSortingKey = (event: KeyboardEvent) => {
    if (event.key === 'Enter') event.stopPropagation();
};

/** Told when the pointer enters or leaves an info icon, so the table can hide the sort tooltip meanwhile. */
export type InfoHoverHandler = (hovered: boolean) => void;

const HeaderInfo = ({ content, onHoverChange }: { content: string; onHoverChange: InfoHoverHandler }) => (
    <Tooltip title={content} trigger={['hover', 'focus']}>
        <button
            type='button'
            className='table-header-info'
            aria-label={content}
            onClick={stopSorting}
            onKeyDown={stopSortingKey}
            onMouseEnter={() => onHoverChange(true)}
            onMouseLeave={() => onHoverChange(false)}
        >
            <Icon name='circle_info_outline' size={12} ariaLabel='' aria-hidden />
        </button>
    </Tooltip>
);

type SearchDropdownProps = Pick<FilterDropdownProps, 'selectedKeys' | 'setSelectedKeys' | 'confirm' | 'visible'> & { placeholder?: string; labels: TableLabels };

const SearchDropdown = ({ selectedKeys, setSelectedKeys, confirm, visible, placeholder, labels }: SearchDropdownProps) => {
    const inputRef = useRef<InputRef>(null);
    // Typing starts as soon as the dropdown opens, whether it was opened by click or from the keyboard.
    useEffect(() => {
        if (visible) inputRef.current?.focus();
    }, [visible]);
    return (
        <StyledSearchDropdown>
            <Input
                ref={inputRef}
                placeholder={placeholder}
                value={(selectedKeys[0] as string | undefined) ?? ''}
                onChange={(event) => setSelectedKeys(event.target.value.trim() ? [event.target.value] : [])}
                onPressEnter={() => confirm()}
            />
            <div className='table-search-actions'>
                <Button type='primary' size='small' onClick={() => confirm()}>
                    {labels.filterConfirm}
                </Button>
                <Button
                    size='small'
                    onClick={() => {
                        setSelectedKeys([]);
                        confirm();
                    }}
                >
                    {labels.filterReset}
                </Button>
            </div>
        </StyledSearchDropdown>
    );
};

const filterIconName = (isSearch: boolean, filtered: boolean) => {
    if (isSearch) return 'search';
    return filtered ? 'filter' : 'filter_outline';
};

/** Turns `info`, `search` and `filters` into the Dexma header controls. App-set `filterIcon`s win. */
export const decorateHeader = <T,>(column: LeafColumn<T>, labels: TableLabels, onInfoHover: InfoHoverHandler): ColumnType<T> => {
    const { info, search } = column;
    let next = omit(column, ['info', 'search', 'filterLabel']) as ColumnType<T>;
    if (info) next = { ...next, title: extendTitle(next.title, { after: <HeaderInfo content={info} onHoverChange={onInfoHover} /> }) };
    if (search) next = { ...next, filterDropdown: (props) => <SearchDropdown {...props} placeholder={search.placeholder} labels={labels} /> };
    if ((search || next.filters) && next.filterIcon === undefined) {
        next = { ...next, filterIcon: (filtered) => <HeaderIcon name={filterIconName(!!search, filtered)} active={filtered} label={labels.filterTitle} /> };
    }
    return next;
};
