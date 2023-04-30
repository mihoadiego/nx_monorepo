import styled from 'styled-components';

import { formatRating } from '@nxegghead/store/utils-formatters';

import {
  Router,
  Route,
  Routes,
  Link,
  useNavigate,
  BrowserRouter,
} from 'react-router-dom';
import { getAllGames } from '../fake_api';
import { Header, GameDetail } from '@nxegghead/store/ui-shared';

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

const AppBody = styled.div`
  margin: 0;
  padding: 0;
`;

const MainComponent = () => {
  const history = useNavigate();
  return (
    <AppBody>
      <Header welcomeText="Super Header" color="secondary" />
      <ContainerDiv>
        <GamesLayoutDiv>
          {getAllGames().map((game) => (
            <CardDiv>
              <Card
                key={game.id}
                className="game-card"
                onClick={() => history(`/game/${game.id}`)}
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
                      {formatRating(game.rating)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </CardDiv>
          ))}
        </GamesLayoutDiv>
      </ContainerDiv>
    </AppBody>
  );
};

const NotFound = () => {
  return <div>Not Found Page</div>;
};

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="game">
          <Route index element={<GameDetail />} />
          <Route path=":id" element={<GameDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
