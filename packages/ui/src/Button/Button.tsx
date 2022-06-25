import * as React from "react";
import { styled, themeUno } from '../stitches.config';

const StyledButton = styled('button', {
    backgroundColor: '$blue4',
    color: '$blue11',
    borderColor: '$blue7',
    borderRadius: '9999px',
    fontSize: '13px',
    padding: '10px 15px',
    '&:hover': {
        backgroundColor: '$blue5',
        borderColor: '$blue8',
    },
    [`.${themeUno} &`]: {
        backgroundColor: '$gray500'
    }
});

export interface ButtonProps {
    size?: 'sm' | 'md' | 'lg',
    children: React.ReactNode
}

export const Button = ({ size = 'sm', children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};

Button.displayName = 'Button'
