import Header from "./header";
import NavBar from "./nav";
import '../App.css';

const Imports = () => {
    return (
        <div>
             <div className="row">
                <Header/>
            </div>
            <div className='row'>
                <div className='col-md-3'><NavBar/></div>
                <div className="col-md-1 vl"></div>
                
                <div className='col-md-8 main-container'>
                    <div className="row">
                        <div className="col-md-7">sankey</div>
                        <div className="col-md-5">pie</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Imports;