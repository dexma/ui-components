import React, { HTMLAttributes, type ReactNode, useContext } from 'react';
import classNames from 'classnames';
import { uniqueId as lodashUniqueId } from 'lodash';
import find from 'lodash/find';
import set from 'lodash/set';
import { ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import { withDataId } from '@components/DataId/withDataId';
import { StyledFieldGroup } from '@styles/Fieldgroup/StyledFieldGroup';
import { ButtonSize, Icon, Tooltip } from '@components';
import { colors } from 'index';

export enum FieldGroupType {
    RADIO = 'radio',
    CHECKBOX = 'checkbox',
}

export enum FieldGroupVariant {
    JOINED = 'joined',
    SPLIT = 'split',
    CUSTOM = 'custom',
}

const getSelectedField = <V,>(type: FieldGroupType, selectedValues: V, allValues: FieldGroupItem[], selectedProp: string) => {
    let selectedItem;
    if (type === FieldGroupType.RADIO) {
        const objectToSelect = set({}, selectedProp, selectedValues);
        selectedItem = find(allValues, objectToSelect);
    }
    if (type === FieldGroupType.CHECKBOX) {
        selectedItem = (selectedValues as [string | number]).map((item: string | number) => {
            const objectToSelect = set({}, selectedProp, item);
            return find(allValues, objectToSelect);
        });
    }
    return selectedItem;
};

const isFieldSelected = <T extends FieldGroupType, V>(group: Pick<GenericFieldGroupProps<T, V>, 'type' | 'selectedValues'>, selectedField: any) => {
    let isEqual = false;
    if (group.type === FieldGroupType.RADIO) {
        isEqual = !!(group.selectedValues === selectedField);
    }
    if (group.type === FieldGroupType.CHECKBOX) {
        isEqual = !!find(selectedField, group.selectedValues as []);
    }
    return isEqual;
};

type GenericFieldGroupProps<T extends FieldGroupType, V> = {
    type: T;
} & FieldGroupProps<V>;

type FieldGroupProps<V> = {
    selectedValues: V;
    variant?: FieldGroupVariant;
    values: FieldGroupItem[];
    size?: ButtonSize;
    name?: string;
    vertical?: boolean;
    onChange?: (e: FieldGroupItem) => void;
    onFieldClick?: (e: FieldGroupItem) => void;
    dataId?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

export type FieldGroupItem = {
    id: string;
    label?: ReactNode;
    icon?: string;
    name?: string;
    uniqueId?: string;
    value: string;
    tooltip?: string;
    isDisabled?: boolean;
    ariaLabel?: string;
};

const GenericFieldGroup = <T extends FieldGroupType, V>({
    type,
    variant = FieldGroupVariant.JOINED,
    values,
    selectedValues,
    size = ButtonSize.MEDIUM,
    name,
    vertical,
    onChange,
    onFieldClick,
    dataId,
    ...props
}: GenericFieldGroupProps<T, V>) => {
    const th = useContext(ThemeContext) || defaultTheme;
    const uniqueValues =
        values.length > 0
            ? [
                  ...values.map((value: FieldGroupItem) => ({
                      ...value,
                      uniqueId: lodashUniqueId(value.id),
                  })),
              ]
            : [];

    const selectedField = getSelectedField(type, selectedValues, uniqueValues, 'value');
    // TODO REVIEW
    // const fieldGroupProps = omit(props, ['values', 'selectedValues', 'name', 'onChange', 'onFieldClick', 'dataId']);
    const handleOnFieldClick = (item: FieldGroupItem) => {
        const { uniqueId, ...itemRest } = item;
        if (onFieldClick) onFieldClick(itemRest);
    };

    const handleOnChange = (item: FieldGroupItem) => {
        const { uniqueId, ...itemRest } = item;
        if (onChange) onChange(itemRest);
    };

    return (
        <StyledFieldGroup theme={th} size={size} data-testid='field-group' $vertical={!!vertical} variant={variant} data-id={dataId} {...props}>
            {uniqueValues.map((item: FieldGroupItem) => {
                const { uniqueId, value, label, icon, tooltip, isDisabled, ariaLabel } = item;
                const isSelected = isFieldSelected({ type, selectedValues: item }, selectedField);
                const classesItem = classNames('item', label ? `item-${label}` : null, isSelected && 'active', isDisabled && 'disabled');
                const getLabel = () => (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                    <label
                        className={classesItem}
                        data-tooltip={tooltip}
                        htmlFor={`${uniqueId}_${value}`}
                        key={`${uniqueId}_${value}`}
                        onClick={() => {
                            handleOnFieldClick(item);
                        }}
                        data-testid='field-group-label'
                    >
                        {!icon && label ? label : null}
                        {icon ? <Icon name={icon} size={variant === 'custom' && size === 'large' ? 'xlarge' : size} color={colors.red} ariaLabel={!ariaLabel ? `${icon} icon` : ariaLabel} /> : null}
                        <input
                            id={`${uniqueId}_${value}`}
                            onChange={() => {
                                handleOnChange(item);
                            }}
                            type={type}
                            name={name}
                            value={value}
                            checked={isSelected}
                            data-testid='field-group-input'
                            disabled={isDisabled}
                        />
                    </label>
                );
                return tooltip ? (
                    <Tooltip title={tooltip} key={`tooltip_${uniqueId}`}>
                        {getLabel()}
                    </Tooltip>
                ) : (
                    getLabel()
                );
            })}
        </StyledFieldGroup>
    );
};

export type RadioFieldGroupProps = FieldGroupProps<string | number>;
export type CheckboxFieldGroupProps = FieldGroupProps<Array<string | number>>;

export const RadioFieldGroup = withDataId((props: RadioFieldGroupProps) => GenericFieldGroup({ ...props, type: FieldGroupType.RADIO }), 'radio-field-group');
export const CheckboxFieldGroup = withDataId(
    (props: FieldGroupProps<Array<string | number>>) => GenericFieldGroup({ ...props, type: FieldGroupType.CHECKBOX }),
    'checkbox-field-group'
);
