import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import classNames from 'classnames';

import defaultTheme from '@utils/theme';
import { Icon, Paragraph } from '@components';
import { StyledCard, StyledCardLink } from '@styles/Card/StyledCard';

const CardHeader = ({ image, icon, iconAriaLabel, imageAlt }: { image?: string; icon?: string; iconAriaLabel?: string; imageAlt?: string }) => {
    if (!image && !icon) return null;
    return (
        <div className='card-header' data-testid='card-header'>
            {image && !icon && <img alt={imageAlt} src={image} className='card-img card-img-top' data-testid='card-image' />}
            {icon && !image && <Icon name={icon} data-testid='card-icon' ariaLabel={!iconAriaLabel ? `${icon} icon` : iconAriaLabel} />}
        </div>
    );
};

const CardBody = ({ title, subtitle, description }: { title?: string; subtitle?: string; description?: string }) => {
    if (!title && !subtitle && !description) return null;
    return (
        <div className='card-body' data-testid='card-body'>
            {title && <h3 className='card-title'>{title}</h3>}
            {subtitle && <p className='card-subtitle'>{subtitle}</p>}
            {description && <Paragraph>{description}</Paragraph>}
        </div>
    );
};

const CardFooter = ({ footer }: { footer: React.ReactNode }) => {
    if (!footer) return null;
    return (
        <div className='card-footer' data-testid='card-footer'>
            {footer}
        </div>
    );
};

export type CardProps = {
    link?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    icon?: string;
    image?: string;
    imageAlt?: string;
    footer?: React.ReactNode;
    isActive?: boolean;
    isHorizontal?: boolean;
    linkTitle?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLAnchorElement>) => void;
};

type CardContentProps = {
    title?: string;
    subtitle?: string;
    description?: string;
    icon?: string;
    image?: string;
    footer?: React.ReactNode;
    isHorizontal?: boolean;
    iconAriaLabel?: string;
    imageAlt?: string;
};

const CardContent = ({ image, icon, isHorizontal, title, subtitle, description, footer, iconAriaLabel, imageAlt }: CardContentProps): JSX.Element => (
    <>
        <CardHeader image={image} icon={icon} iconAriaLabel={iconAriaLabel} imageAlt={imageAlt} />
        {isHorizontal ? (
            <div className='horizontal'>
                <CardBody title={title} subtitle={subtitle} description={description} />
                <CardFooter footer={footer} />
            </div>
        ) : (
            <>
                <CardBody title={title} subtitle={subtitle} description={description} />
                <CardFooter footer={footer} />
            </>
        )}
    </>
);

export const Card = (props: CardProps) => {
    const { link, title, subtitle, description, icon, image, footer, isActive, isHorizontal, imageAlt, linkTitle, onClick, onFocus } = props;
    const th = useContext(ThemeContext) || defaultTheme;
    const classes = classNames(isActive && 'active');
    return link ? (
        <StyledCardLink
            href={link}
            className={classes}
            theme={th}
            $hasFooter={footer !== null}
            $isHorizontal={isHorizontal}
            data-testid='card'
            title={linkTitle}
            onClick={onClick}
            onFocus={onFocus}
        >
            <CardContent title={title} subtitle={subtitle} description={description} icon={icon} image={image} footer={footer} isHorizontal={isHorizontal} imageAlt={imageAlt} />
        </StyledCardLink>
    ) : (
        <StyledCard className={classes} theme={th} $hasFooter={footer !== null} $isHorizontal={isHorizontal} data-testid='card' onClick={onClick} onFocus={onFocus}>
            <CardContent title={title} subtitle={subtitle} description={description} icon={icon} image={image} footer={footer} isHorizontal={isHorizontal} imageAlt={imageAlt} />
        </StyledCard>
    );
};

export default Card;
