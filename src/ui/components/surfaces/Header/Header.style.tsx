import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';

export const HeaderAppBar = styled(AppBar)`
    background-color: ${({ theme }) => theme.palette.background.paper};
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);

    ${({ theme }) => theme.breakpoints.up('md')} {
        .MuiToolbar-root {
            height: 100px;
        }
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
        .MuiToolbar-root {
            display: flex;
            justify-content: center;
        }
    }
`;

export const HeaderLogo = styled('img')`
    height: 25px;

    ${({ theme }) => theme.breakpoints.up('md')} {
        height: 47px;
    }
`;
