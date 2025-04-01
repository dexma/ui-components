import { Dropdown as DropdownAntd, type DropDownProps, type MenuProps } from 'antd';

import { StyledDropdownInnerButton, StyledDropdownButton, StyledGlobalDropdown } from '@styles/Dropdown/StyledDropdown';
import { useEffect, useState } from 'react';

type DropdownContent = {
    text: string;
    key?: string;
    icon?: string;
    dataId?: string;
    variant?: string;
    ariaLabel?: string;
    parentName: string;
    disabled?: boolean;
    onClick?: (e: any) => void;
};

const getContent = (menu?: DropdownContent[]) => {
    if (!menu) return null;
    const items = menu
        ? menu.map(({ key, icon, onClick, dataId, variant, text, ariaLabel, parentName, disabled, ...props }) => ({
              label: (
                  <StyledDropdownInnerButton
                      className='dropdown-button-item'
                      style={{ width: '100%', padding: '0px 1rem' }}
                      iconBefore={icon}
                      onClick={onClick}
                      key={key}
                      dataId={dataId ?? 'ddItem'}
                      variant={variant ?? 'icon'}
                      text={text}
                      aria-label={icon ? ariaLabel : undefined}
                      aria-labelledby={parentName}
                      aria-disabled={disabled}
                      disabled={disabled}
                      {...props}
                  />
              ),
          }))
        : undefined;
    return {
        items,
    };
};

export type DropdownProps = DropDownProps & {
    dataId?: string;
    text?: string;
    icon?: string;
    variant?: string;
    content?: DropdownContent[];
    ariaLabel?: string;
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
    ariaLabel,
    open,
    disabled,
}: DropdownProps) => {
    useEffect(() => {
        const dropdownElem = document.querySelector('.ant-dropdown');
        if (dropdownElem) dropdownElem.setAttribute('role', 'dialog');
    }, []);

    const menuItems = menu || (getContent(content) as MenuProps);
    const [openDropdown, setOpen] = useState(open || false);

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            setOpen((prev) => !prev);
        }
    };
    return (
        <>
            <StyledGlobalDropdown />
            <DropdownAntd menu={menuItems} placement={placement} trigger={trigger} open={openDropdown} onOpenChange={setOpen} disabled={disabled}>
                {text ? (
                    <StyledDropdownButton
                        data-testid='dropdown-button-text'
                        dataId={dataId}
                        className='dropdown-button'
                        variant={variant ?? 'icon'}
                        iconBefore={icon}
                        text={text}
                        aria-disabled={disabled || false}
                        onKeyDown={handleKeyDown}
                    />
                ) : (
                    <StyledDropdownButton
                        data-testid='dropdown-button-icon'
                        dataId={dataId}
                        className='dropdown-button'
                        variant={variant ?? 'icon-secondary'}
                        iconBefore={icon}
                        text=''
                        isCircle
                        aria-label={ariaLabel}
                        aria-disabled={disabled || false}
                        onKeyDown={handleKeyDown}
                    />
                )}
            </DropdownAntd>
        </>
    );
};

export default Dropdown;
