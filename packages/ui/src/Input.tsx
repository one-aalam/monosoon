import * as React from "react";
import { styled, themeUno } from './stitches.config';

const StyledInput = styled('input', {
    flexShrink: 1,
    paddingLeft: '1rem',
    paddingRight: '1rem',
    height: '3rem',
    lineHeight: 2,
    transition: 'all',
    transitionDuration: 200,
    transitionTimingFunction: 'ease-in-out'
});

export const Input = () => {
  return <StyledInput/>;
};
