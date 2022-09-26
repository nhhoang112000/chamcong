import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts';
import { Fragment, useEffect, useState } from 'react';

function App() {
    const modelItems = [
        {
            id: 1,
            img: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2021/09_21_restyle/gw_aven_07.jpg',
            name: 'name1',
            color: 'blue',
            price: 1,
        },
        {
            id: 2,
            img: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2021/gate_aven_01.jpg',
            name: 'name2',
            color: 'grey',
            price: 12,
        },
        {
            id: 3,
            img: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/gallery/gate_hura_02.jpg',
            name: 'name3',
            color: 'red',
            price: 13,
        },
        {
            id: 4,
            img: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/gallery/gate_hura_05.jpg',
            name: 'name4',
            color: 'white',
            price: 14,
        },
    ];
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart((prev) => [...prev, product]);
    };
    const removeProductById = (filterId) => {
        const prevCart = cart;
        const newCart = prevCart.filter((item) => item.id == !filterId);
        console.log(newCart);
        // setCart((prev) => prev.filter((item) => (item.id = id)));
        alert(filterId);
    };
    useEffect(() => {
        // console.log(cart);
        // alert('gio hang da cap nhat');
    }, [cart]);

    const allProps = [modelItems, cart];

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page
                                            sendDataToParent={addToCart}
                                            removeProduct={removeProductById}
                                            allProps={allProps}
                                        />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
