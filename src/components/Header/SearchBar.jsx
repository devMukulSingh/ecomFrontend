import { InputBase ,Box, List, ListItem, styled} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsApi } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';

const MainBox = styled(Box) (({theme}) => ({
    backgroundColor:"#F0F5FF",
    width:'90vmin',
    borderRadius:10,
    height:'2.5rem',
    display:'flex',
    alignItems:'center',
    padding:'0rem 1rem',
    marginLeft:'2rem',

    [theme.breakpoints.down('lg')]:{
      width:'80vmin',
    },
    [theme.breakpoints.down('md')]:{
      width:'38vmin',
      marginLeft:'1rem',
    },
    [theme.breakpoints.down('sm')]:{
      width:'30vmin',
      marginLeft:0,
      height:'2rem',

    }
  
}))
const ListStyled = styled(List)({
  background:'#fff',
  color:'#000',
  width:'44rem',
  position:'absolute',
  marginLeft:30

})

const SearchBar = () => {
  const dispatch = useDispatch();
  const[inputValue, setInputValue ] = useState('');


  useEffect( () => {
      dispatch(getProductsApi());
  },[dispatch,inputValue]);

  const{ products } = useSelector( state => state.getProducts);

  const onInputChange = (value) => {
      setInputValue(value);
  }

  const handleLinkClick = () => {
    setInputValue('');

  }
  return (
    <Box>
        <MainBox>
            <SearchIcon sx={{color:'#717478'}}/>
            <InputBase 
            placeholder='Search for Products, Brands and More'
            sx={{ width:'100%',padding:'0rem 0.5rem', color:'#666666'}}
            onChange={ (e) => onInputChange(e.target.value)} name='search'
            />
           
        </MainBox>

          {
            inputValue && 
            <ListStyled>
                  {
                    products.filter( products => products.title.longTitle.toLowerCase().includes(inputValue.toLowerCase())).map((product) => {
                      return(
                        <Link to= {`product/${product.id}`} style= {{ textDecoration:'none', color:'inherit',fontWeight:600 }}
                         onClick={ () => handleLinkClick() } >
                          <ListItem >
                              {product.title.longTitle}
                          </ListItem>
                        </Link>
                          )
                      })
                    }
                </ListStyled>
              }
    </Box>
  )
}

export default SearchBar