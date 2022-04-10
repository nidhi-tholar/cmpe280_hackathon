import Header from "./header";
import NavBar from "./nav";
import '../App.css';

const Home = () => {
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
                        <div className="col-md-9">Year Filter</div>
                        <div className="col-md-3">
                            <select>
                                <option>USA</option>
                                <option>CHINA</option>
                                <option>INDIA</option>
                            </select>
                        </div>
                    </div>

                    <div className=" row annotation">
                        annotation
                    </div>

                    <div className=" row drag-drop-area">
                    drag-drop-area
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Home;