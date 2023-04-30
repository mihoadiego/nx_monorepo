import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import styled from 'styled-components';

import { HeaderProps } from '@nxegghead/store/utils-formatters';

/* eslint-disable-next-line */

const HeaderDiv = styled.div`
  padding: 0;
  margin: 0;
`;

export const Header = (props: HeaderProps) => {
  return (
    <HeaderDiv>
      <AppBar position="static" color={props.color || 'primary'}>
        <Toolbar>
          <Typography variant="h6">HEADER</Typography>
        </Toolbar>
      </AppBar>
    </HeaderDiv>
  );
};

export default Header;
