import { Dropdown as DropdownAntd, type DropDownProps, type MenuProps } from 'antd';

import { StyledDropdownInnerButton, StyledDropdownButton, StyledGlobalDropdown } from '@styles/Dropdown/StyledDropdown';
import { useRef, useState } from 'react';

export type DropdownContent = {
    text?: string;
    key?: string;
    icon?: string;
    dataId?: string;
    variant?: string;
    ariaLabel?: string;
    disabled?: boolean;
    onClick?: (e: any) => void;
    iconAriaLabel?: string;
    onKeyDown?: (e: any) => void;
};

export type DropdownProps = DropDownProps & {
    dataId?: string;
    text?: string;
    icon?: string;
    variant?: string;
    content?: DropdownContent[];
    iconAriaLabel?: string;
    onItemSelected: (key: number) => void
};

export const Dropdown = ({
    dataId = 'dropdown-button',
    trigger = ['hover'],
    text,
    placement = 'bottomRight',
    menu,
    icon,
    content,
    variant,
    open,
    disabled,
    iconAriaLabel,
    onItemSelected
}: DropdownProps) => {
    const [openDropdown, setOpen] = useState(open || false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const dropdownId = `dropdown-button-${text ? 'text' : 'icon'}_${Date.now()}`;
    const dropdownButtonKind = text && icon ? 'iconTextButton' : (!text && icon ? 'iconButton' : 'button');

    const handleOpenChange = () => {
        setOpen((prev) => !prev);
        setTimeout(() => {
            const dropdownElem = document.querySelector('.ant-dropdown');
            if (dropdownElem && buttonRef) {
                dropdownElem.setAttribute('role', 'dialog');
                dropdownElem.setAttribute('aria-labelledby', buttonRef.current?.id || '');
            }
        }, 0);
    };

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter' && !open) {
            e.preventDefault();
            handleOpenChange();
        }
    };

    const getContent = (menuContent?: DropdownContent[]) => {
        if (!menuContent) return null;
        const itemButtonKind = (textItem?: string, iconItem?: string) => textItem && iconItem ? 'iconTextButton' : (!textItem && iconItem ? 'iconButton' : 'button');

        const items = menuContent
            ? menuContent.map(({ key, icon: iconItem, onClick, dataId: dataIdItem, variant: variantItem, text: textItem, ariaLabel, disabled: disabledItem, iconAriaLabel: iconAriaLabelItem, onKeyDown, ...props }, index) => ({
                label:
                    <StyledDropdownInnerButton
                        kind={itemButtonKind(textItem, iconItem)}
                        className='dropdown-button-item'
                        style={{ width: '100%', padding: '0px 1rem' }}
                        iconBefore={iconItem}
                        onClick={onClick}
                        key={key ?? `key_${index}`}
                        dataId={dataIdItem ?? 'ddItem'}
                        variant={variantItem ?? 'icon'}
                        text={itemButtonKind(textItem, iconItem) === 'button' || itemButtonKind(textItem, iconItem) === 'iconTextButton' ? textItem! : ''}
                        aria-label={iconItem ? ariaLabel : undefined}
                        aria-disabled={disabledItem}
                        disabled={disabledItem}
                        iconAriaLabel={iconItem ? iconAriaLabelItem || '' : ''}
                        {...props}
                        type='button'
                    />
            }))
            : undefined;
        return {
            items
        };
    };

    const menuItems = menu || (getContent(content) as MenuProps);

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        setOpen(false);
        const key = (e.key.split('-')[1] as any) as number;
        onItemSelected(key);
    };


    return (
        <>
            <StyledGlobalDropdown />
            <DropdownAntd menu={{ items: menuItems ? menuItems.items : [], onClick: handleMenuClick }} placement={placement} trigger={trigger} open={openDropdown} onOpenChange={handleOpenChange} disabled={disabled}>
                <StyledDropdownButton
                    tabIndex={0}
                    kind={dropdownButtonKind}
                    id={dropdownId}
                    data-testid={`dropdown-button-${icon ? 'icon' : 'text'}`}
                    dataId={dataId}
                    className='dropdown-button'
                    variant={variant ?? 'icon'}
                    iconBefore={icon}
                    text={dropdownButtonKind === 'button' || dropdownButtonKind === 'iconTextButton' ? text! : ''}
                    aria-disabled={disabled}
                    onKeyDown={trigger && trigger.find(x => x !== 'click') ? handleKeyDown : undefined}
                    ref={buttonRef}
                    aria-expanded={openDropdown}
                    iconAriaLabel={icon ? iconAriaLabel || '' : ''}
                />
            </DropdownAntd>
        </>
    );
};

export default Dropdown;
