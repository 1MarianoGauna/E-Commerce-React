import * as React from 'react';
import './Cart.css'
import ItemListContainer from '../components/ItemList/ItemListContainer';

function Home() {
    return (
        <div className='homeDiv'>
            <div>
                <h3>Bienvenido a nuestra Tienda Electronica!</h3>
                <p>Aqui encontraras diferentes productos electronicos para que puedas llenar tu sitio gramer o simplemente personalizar aun mejor tu pc, nuestros productos son 100% originales y con garantia incluida</p>
            </div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_641803-MLA44938932364_022021-O.webp" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.shop.thonet-vander.com/img/Producto/7e106b51-82a4-7e54-4414-65c8bf167185/05-1583769044-60e75f1c55e9c.jpeg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_782736-MLA32146214199_092019-O.webp" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Home