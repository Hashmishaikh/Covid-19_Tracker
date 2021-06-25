import React, { useEffect, useState } from 'react';
import './Covid.css';

function Covid() {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const adata = await res.json();
            console.log(adata.statewise[0]);
            setData(adata.statewise[0]);
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getCovidData();
    }, [])
    return (
        <div>
            <div className="row">
                <div className="column">
                    <div className="card count" >
                        <p className="card_name"><span>Our </span>Country</p>
                        <p className="card_total card_small">India</p>
                    </div>
                </div>


                <div className="column">
                    <div className="card recov" >

                        <p className="card_name"><span>Total </span>Recovery</p>
                        <p className="card_total card_small">{data.recovered}</p>
                    </div>

                </div>
                <div className="column">
                    <div className="card conf" >

                        <p className="card_name"><span>Total </span>Conformed</p>
                        <p className="card_total card_small">{data.confirmed}</p>
                    </div>

                </div>
                <div className="column">
                    <div className="card death" >

                        <p className="card_name"><span>Total </span>Deaths</p>
                        <p className="card_total card_small">{data.deaths}</p>
                    </div>
                </div>
                <div className="column">
                    <div className="card active" >

                        <p className="card_name"><span>Total </span>Active</p>
                        <p className="card_total card_small">{data.active}</p>
                    </div>
                </div>
                <div className="column">
                    <div className="card last" >

                        <p className="card_name"><span>Total </span>Update</p>
                        <p className="card_total card_small">{data.lastupdatedtime}</p>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Covid;
