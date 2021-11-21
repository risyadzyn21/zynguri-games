import { useEffect } from 'react'
import './GameCollections.scss'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getGameAsync } from '../../redux/actions'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InfiniteScroll from 'react-infinite-scroll-component';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function GameCollections() {
  const dispatch = useDispatch()

  const { games, isLoading } = useSelector(
    (state) => state.gameReducer
  );

  useEffect(() => {
    dispatch(getGameAsync())
    console.log(getGameAsync())
  }, [])


  return (
    <div style={{ padding: 40 }}>
      {isLoading ? (<h1>Loading</h1>) : ''}
      <InfiniteScroll>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {games?.map((game) => {
              return (
                <Grid item xs={2} sm={3} md={3} key={game.id}>
                  <Link to={`/movie-detail/${game.id}`} item xs={2} sm={4} md={4} className='game-box'>
                    <img
                      src={game.background_image}
                      alt={game.name}
                      className='game-img'
                    />
                    <div className='game-info'>
                      <p className='game-rating'>{game.metacritic}</p>
                      <p className='game-title'>{game.name}</p>
                    </div>
                  </Link>
                </Grid>

              );
            })}
          </Grid>
        </Box>
      </InfiniteScroll>
    </div>
  )
}

export default GameCollections
