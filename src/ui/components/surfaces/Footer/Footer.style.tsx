import { Container, IconButton, Typography } from '@material-ui/core';
import { experimentalStyled as styled } from '@material-ui/core/styles';

export const FooterContainer = styled('footer')`
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) =>
        theme.palette.getContrastText(theme.palette.primary.main)};
    padding: ${({ theme }) => theme.spacing(4)} 0;
    margin-top: auto;
`;

export const FooterTitle = styled((props) => (
    <Typography component={'h2'} variant={'body2'} {...props} />
))`
    font-weight: bold;
`;

export const SocialButton = styled((props) => (
    <IconButton
        component={'a'}
        target={'_blank'}
        rel={'noopener noreferrer'}
        {...props}
    />
))<{ href: string }>`
    background-color: ${({ theme }) => theme.palette.primary.dark};
    .MuiIconButton-label {
        color: ${({ theme }) =>
            theme.palette.getContrastText(theme.palette.primary.dark)};
    }
`;

export const AppList = styled('ul')`
    display: flex;
    list-style-type: none;
    gap: ${({ theme }) => theme.spacing()};
    padding: 0;
    margin: ${({ theme }) => theme.spacing(2) + ' 0 ' + theme.spacing(3)};

    img {
        width: 122px;
    }
`;

export const FooterGrid = styled(Container)`
    display: flex;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(2)};
    flex-wrap: wrap;
    ${({ theme }) => theme.breakpoints.down('md')} {
        gap: 40px 90px;
    }
`;

export const SocialContainer = styled('div')`
    display: flex;
    flex-direction: column;

    ${({ theme }) => theme.breakpoints.down('md')} {
        width: 100%;
        flex-direction: row-reverse;
        justify-content: space-between;
    }

    ${({ theme }) => theme.breakpoints.down(726)} {
        flex-direction: column;
    }
`;
