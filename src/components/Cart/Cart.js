import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Grid } from '@mui/material';
import {BsCurrencyRupee} from "react-icons/bs"
import {AiFillStar} from "react-icons/ai"
import { ProductsContext } from '../../context/ProductContext'

function Cart() {
 const {cart} = useContext(ProductsContext)
 
  return (
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"15px"}}>
  {cart &&(
    <Grid container spacing={{ xs: 0, md: 0 }}  columns={{ xs: 12, sm: 12, md: 12 }}  sx={{display:"flex", justifyContent:"center"}} >
      {cart.map((cart, index)=>{
        const {brand, category, discountPercentage,id, price,rating,stock,thumbnail,title, description} = cart
        return (
          <Grid Item xs={12} sm = {5} md={4} key={id} padding={1} sx={{boxSizing:"border-box",display:"flex", justifyContent:"center" ,padding:"5px"}}>
          <Card sx={{ width: 345,height:"400px", boxSizing:"border-box",boxShadow:"2px 2px 5px 4px"}}>
      <CardActionArea sx={{ height:"360px"}}>
        <CardMedia
          component="img"
          height="200"
          image={thumbnail}
          alt="green iguana"
        />
        <CardContent sx={{ padding:"3px"}}>
          <Typography gutterBottom variant="h6" component="div">
           {title} | {brand}
          </Typography>
          <Button  variant='contained' sx={{backgroundColor:"red", padding:"2px",margin:"0px 0px 2px" }}>
          {discountPercentage} %
        </Button>
        <CardContent sx={{display:"flex", justifyContent:"space-between", padding:"0px"}}>
        <Typography variant="body1">
          <BsCurrencyRupee style={{height:"20px", width:"15px"}}/> {price}
          </Typography>
          <Typography variant="body1">
           <AiFillStar style={{ color:"gold"}}/>  {rating}
          </Typography>
          </CardContent>
          <CardContent sx={{display:"flex", padding:"0px", boxSizing:"border-box"}}>
        <Typography variant="body1" sx ={{padding:"0px"}}>
        {description}
          </Typography>
          </CardContent>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
          )
        })}
        </Grid>
      )}
    </Box>
  )
}

export default Cart
