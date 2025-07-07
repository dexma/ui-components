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
    onMenuClick?: MenuProps['onClick'];
    onItemSelected: (key: number) => void;
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
    onMenuClick,
    onItemSelected,
}: DropdownProps) => {
    const [openDropdown, setOpen] = useState(open || false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const dropdownId = `dropdown-button-${text ? 'text' : 'icon'}_${Date.now()}`;
    let dropdownButtonKind: 'button' | 'iconTextButton' | 'iconButton' = 'button';
    if (text && icon) {
        dropdownButtonKind = 'iconTextButton';
    } else if (!text && icon) {
        dropdownButtonKind = 'iconButton';
    }

    const handleOpenChange = (flag: boolean) => {
        setOpen(flag);
        setTimeout(() => {
            const dropdownElem = document.querySelector('.ant-dropdown');
            if (dropdownElem && buttonRef.current) {
                dropdownElem.setAttribute('role', 'dialog');
                dropdownElem.setAttribute('aria-labelledby', buttonRef.current.id);
            }
        }, 0);
    };

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter' && !open) {
            e.preventDefault();
            handleOpenChange(true);
        }
    };

    const getContent = (menuContent?: DropdownContent[]) => {
        if (!menuContent) return null;
        const itemButtonKind = (textItem?: string, iconItem?: string) => {
            if (textItem && iconItem) return 'iconTextButton';
            if (!textItem && iconItem) return 'iconButton';
            return 'button';
        };

        const items = menuContent
            ? menuContent.map(
                  (
                      {
                          key,
                          icon: iconItem,
                          onClick,
                          dataId: dataIdItem,
                          variant: variantItem,
                          text: textItem,
                          ariaLabel,
                          disabled: disabledItem,
                          iconAriaLabel: iconAriaLabelItem,
                          onKeyDown,
                          ...props
                      },
                      index
                  ) => ({
                      label: (
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
                      ),
                  })
              )
            : undefined;
        return {
            items,
        };
    };

    const menuItems = menu || (getContent(content) as MenuProps);

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        const key = e.key.split('-')[1] as any as number;
        onItemSelected(key);
    };

    return (
        <>
            <StyledGlobalDropdown />
            <DropdownAntd
                menu={{ items: menuItems ? menuItems.items : [], onClick: onMenuClick ?? handleMenuClick }}
                placement={placement}
                trigger={trigger}
                open={openDropdown}
                onOpenChange={handleOpenChange}
                disabled={disabled}
            >
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
                    onKeyDown={trigger && trigger.find((x) => x !== 'click') ? handleKeyDown : undefined}
                    ref={buttonRef}
                    type='button'
                    aria-expanded={openDropdown}
                    iconAriaLabel={icon ? iconAriaLabel || '' : ''}
                />
            </DropdownAntd>
        </>
    );
};

export default Dropdown;
