import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import CartContainer from './CartContainer';
import CartCheckout from './CartCheckout';
import { Container } from 'react-bootstrap';


function Main() {
    return (
        <Container className='mainContainer'>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:category" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path='/cart' element={<CartContainer/>}/>
                <Route path='/checkout' element={<CartCheckout/>}/>
            </Routes>
        </Container>
    );
}
export default Main;