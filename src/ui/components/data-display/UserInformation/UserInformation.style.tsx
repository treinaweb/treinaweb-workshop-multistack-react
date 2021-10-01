import { styled } from '@mui/material/styles';
import { Avatar, Rating } from '@mui/material';

export const UserInformationContainer = styled('div')`
    display: grid;
    grid-template-columns: 60px 1fr;
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
        'avatar name'
        'avatar rating'
        'avatar description';
    background-color: ${({ theme }) => theme.palette.grey[50]};
    padding: ${({ theme }) => theme.spacing(3)};
    gap: ${({ theme }) => theme.spacing(0.5) + ' ' + theme.spacing(2)};
    align-items: center;
`;

export const UserName = styled('div')`
    grid-area: name;
    font-weight: bolder;
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export const UserDescription = styled('div')`
    grid-area: description;
    color: ${({ theme }) => theme.palette.text.secondary};
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export const AvatarStyled = styled(Avatar)`
    grid-area: avatar;
    width: 100%;
    height: initial;
    aspect-ratio: 1;
`;

export const RatingStyled = styled(Rating)`
    grid-area: rating;
    font-size: 14px;
`;
