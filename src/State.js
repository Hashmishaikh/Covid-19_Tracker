import React,{useState,useEffect} from 'react';
import './State.css';


function State() {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const adata = await res.json();
            console.log(adata.statewise);
            setData(adata.statewise);
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
            <div className="container-fluid mt-5">
            <div className="main-headinig" >
            <h1 className="mb-5 text-center" ><span>INDIA</span> COVID-19</h1>
            </div>

            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="thead-dark" >
                        <tr>
                            <th>States</th>
                            <th>Conformed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updated</th>

                        </tr>
                    </thead>

                    <tbody>
                    {
                        data.map((currElem,indx) => {
                            return(
                                <tr key={indx}>
                                    <td>{currElem.state}</td>
                                    <td>{currElem.confirmed}</td>
                                    <td>{currElem.recovered}</td>
                                    <td>{currElem.deaths}</td>
                                    <td>{currElem.active}</td>
                                    <td>{currElem.lastupdatedtime}</td>
                                </tr>
                            )
                        })
                    }
                        <tr></tr>
                    </tbody>

                </table>
            </div>

            </div>
        </>
    )
}

export default State;
