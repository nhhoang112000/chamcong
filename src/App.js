import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts';
import { Fragment, useState } from 'react';

function App() {
    const [cart, setCart] = useState('hello');
    const addToCart = (product) => {
        console.log(product);
    };
    const checking = () => {
        alert('hello');
    };
    const modelItems = [
        {
            img: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2021/09_21_restyle/gw_aven_07.jpg',
            name: 'name1',
            price: 1,
        },
        {
            img: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2021/gate_aven_01.jpg',
            name: 'name2',
            price: 12,
        },
        {
            img: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/gallery/gate_hura_02.jpg',
            name: 'name3',
            price: 13,
        },
        {
            img: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/gallery/gate_hura_05.jpg',
            name: 'name4',
            price: 14,
        },
    ];

    const allProps = [modelItems];

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
                                        <Page sendDataToParent={addToCart} allProps={allProps} />
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
