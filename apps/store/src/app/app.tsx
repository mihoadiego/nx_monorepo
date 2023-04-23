import styled from 'styled-components';

import { Route, Routes, Link } from 'react-router-dom';
import { getAllGames } from '../fake_api';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const ContainerDiv = styled.div`
  background: cyan;
  display: flex;
`;

const GamesLayoutDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`;

const CardDiv = styled.div`
  margin: auto 15px;
  display: flex;
`;

export function App() {
  return (
    <ContainerDiv>
      <GamesLayoutDiv>
        {getAllGames().map((game) => (
          <CardDiv>
            <Card
              key={game.id}
              className="game-card"
              sx={{
                maxWidth: 250,
                margin: '0 auto',
              }}
            >
              <CardActionArea>
                <CardMedia
                  className="game-card-media"
                  image={game.image}
                  title={game.name}
                  sx={{
                    height: 140,
                    padding: '1em 1em 0 1em',
                    objectFit: 'contain',
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {game.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="p"
                  >
                    {game.description}
                  </Typography>

                  <Typography
                    className="game-rating"
                    variant="body2"
                    color="text.secondary"
                    component="p"
                  >
                    <strong>Rating:</strong>
                    {game.rating}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </CardDiv>
        ))}
      </GamesLayoutDiv>
    </ContainerDiv>
  );
}

export default App;
