import React, { useContext } from 'react';
import MainContext from "../../../Context/context"

const Home = () => {
    const { data } = useContext(MainContext);

    return (
        <div>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {data.map((item, index) => (
                            <div className="col mb-5" key={index}>
                                <div className="card h-100">
                                    <img className="card-img-top" style={{height:"235px"}} src={item.image} alt="..." />
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">{item.name}</h5>
                                            {item.price} $
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#!">Add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
