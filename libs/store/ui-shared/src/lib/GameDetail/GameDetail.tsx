import React from 'react';

import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
} from '@mui/material';

export const GameDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="container">
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {id}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Button onClick={() => navigate('/')}>{'back'}</Button>
    </div>
  );
};

export default GameDetail;
