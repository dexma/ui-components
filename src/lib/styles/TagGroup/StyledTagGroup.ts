import styled from 'styled-components';

import { type Theme } from '@utils/theme';
import { StyledTag } from '@styles/Tag/StyledTag';

const StyledTagGroup = styled.div<{ theme: Theme }>`
    display: flex;
    ${StyledTag} {
        margin: 4px 4px 4px 0px;
    }
`;

export { StyledTagGroup };
