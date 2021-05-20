import { experimentalStyled as styled } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

export const TextFieldStyled = styled(TextField)`
    .MuiInputBase-root {
        background-color: ${({ theme }) => theme.palette.grey[50]};
    }

    .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.palette.grey[100]};
    }
`;
