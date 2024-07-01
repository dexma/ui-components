import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import { type TagProps } from '@components';
import { StyledTagGroup } from '@styles/TagGroup/StyledTagGroup';

export const TagGroup = (props: { children: React.ReactElement<TagProps> | Array<React.ReactElement<TagProps>> }) => {
    const { children, ...rest } = props;
    const th = useContext(ThemeContext) || defaultTheme;
    return (
        <StyledTagGroup data-testid='tag-group' theme={th} {...rest}>
            {children}
        </StyledTagGroup>
    );
};

StyledTagGroup.displayName = 'StyledTagGroup';

export default TagGroup;
