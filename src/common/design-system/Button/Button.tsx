import MuiButton from '@mui/material/Button';
import type { ReactElement } from 'react';
import type { ButtonProps } from '@mui/material/Button';
type Props = {
    type?: 'submit' | 'reset' | 'button';
    disabled?: ButtonProps['disabled'];
    onClick: ButtonProps['onClick'];
    children: ButtonProps['children'];
    variant?: ButtonProps['variant'];
};
const Button = ({
    children,
    type = 'button',
    disabled = false,
    onClick,
    variant = 'text',
}: Props): ReactElement => {
    return (
        <MuiButton
            type={type}
            disabled={disabled}
            onClick={onClick}
            variant={variant}
        >
            {children}
        </MuiButton>
    );
};

export default Button;
