import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Collapse,
  Rating,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Header from '../../components/Header';
import { useGetImageQuery } from '../../store/apis/index';
import { useEffect, useState } from 'react';
import Image from '../../components/Image';
import { useDispatch } from 'react-redux';
import { setToggleLoading } from '../../store/common/commonSlice';

const Product = ({ _id, tags, title, description, photo, status }) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundImage: 'none',
        backgroundColor: theme.palette.background.alt,
        borderRadius: '0.55rem',
      }}
    >
      <CardContent>
        <Image url={photo} alt={title} />

        {tags.map((tag) => (
          <Chip key={tag} label="Chip Outlined" variant="outlined" />
        ))}

        <Typography
          sx={{ fontSize: 14, color: theme.palette.secondary[700] }}
          gutterBottom
        >
          {title}
        </Typography>

        <Typography variant="h2" component="div">
          {title}
        </Typography>

        <Rating value={status.likes} readOnly />

        <Typography variant="body2">{description}</Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>

      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{ color: theme.palette.neutral[300] }}
      >
        <CardContent>
          <Typography>id: {_id}</Typography>
          <Typography>Supply left: {status.likes}</Typography>
          <Typography>Yearly sales this year: {status.likes}</Typography>
          <Typography>Yearly units sold this year: {status.views}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const Products = () => {
  const { data, isLoading } = useGetImageQuery();
  const isMobile = useMediaQuery('(min-width: 1000px)');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setToggleLoading(isLoading));
  }, [isLoading, dispatch]);

  return (
    <Box id="products">
      <Header title="Products" subtitle="See your list of products." />

      {data && (
        <Box
          mt={0.8}
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap={0.9}
          columnGap="1.33%"
          sx={{
            '& > div': {
              gridColumn: isMobile ? undefined : 'span 4',
            },
          }}
        >
          {data.data.map((data) => (
            <Product key={data._id} {...data} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Products;
