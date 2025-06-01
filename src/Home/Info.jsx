import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



export default function Info({ name, image, content,links }) {
  const handleOnClick = () => {
    
      window.location.href = "http://localhost:5174/";
    
  };
  return (
    <div>
    <Box
    
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Card
        sx={{
          maxWidth: 200,
          overflow: 'hidden',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: 8,
            cursor: 'pointer',
          },
        }}
      >
        <CardMedia
          sx={{
            height: 100,
            transition: 'transform 0.4s ease',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
    <button style={{width:"100%", backgroundColor:"	#87CEFA"}} onClick={handleOnClick}>Booking</button>
    </div>
  );
}
