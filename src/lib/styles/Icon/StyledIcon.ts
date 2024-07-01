import styled from 'styled-components';

type StyledIconProps = {
    $fillColor: string;
};

const StyledIcon = styled.svg<StyledIconProps>`
    fill: ${(props) => props.$fillColor};
`;

export { StyledIcon };
