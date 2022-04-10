import Header from "./header";
import NavBar from "./nav";
import '../App.css';

let value1=50;
let value2=50;
let value3=50;
let value4=50;
let value5=50;
let value6=50;
let value7=50;
let value8=50;
let value9=50;
let value10=50;

let show=false;


const Predict = () => {
    
    const updateValue1 = (val) => {
        value1 = val;
        document.getElementById('sliderValue1').innerHTML=val; 
    }
    const updateValue2 = (val) => {
        value2 = val;
        document.getElementById('sliderValue2').innerHTML=val; 
    }
    const updateValue3 = (val) => {
        value3 = val;
        document.getElementById('sliderValue3').innerHTML=val; 
    }
    const updateValue4 = (val) => {
        value4 = val;
        document.getElementById('sliderValue4').innerHTML=val; 
    }
    const updateValue5 = (val) => {
        value5 = val;
        document.getElementById('sliderValue5').innerHTML=val; 
    }
    const updateValue6 = (val) => {
        value6 = val;
        document.getElementById('sliderValue6').innerHTML=val; 
    }
    const updateValue7 = (val) => {
        value7 = val;
        document.getElementById('sliderValue7').innerHTML=val; 
    }
    const updateValue8 = (val) => {
        value8 = val;
        document.getElementById('sliderValue8').innerHTML=val; 
    }
    const updateValue9 = (val) => {
        value9 = val;
        document.getElementById('sliderValue9').innerHTML=val; 
    }
    const updateValue10 = (val) => {
        value10 = val;
        document.getElementById('sliderValue10').innerHTML=val; 
    }

    const openPopUp = () => {
        show=true;
    }

    function closeForm() {
        show=false;
    }

    return (
        <div>
             <div className="row">
                <Header/>
            </div>
            <div className='row'>
                <div className='col-md-3'><NavBar/></div>
                <div className="col-md-1 vl"></div>
                
                <div className='col-md-8'>
                    <div className="predict-container">
                        <h5>Model Prediction</h5>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="slider-container">
                                    <div className="slider-name">Projected GDP</div>
                                    <div className="slider">
                                        <p id="sliderValue1">{value1}</p>
                                        <input type="range" min="1" max="100" onChange={(e)=>updateValue1(e.target.value)}></input>
                                    </div>
                                </div>

                                <div className="slider-container">
                                    <div className="slider-name">Current Account Balance (% of GDP)</div>
                                    <div className="slider">
                                        <p id="sliderValue2">{value2}</p>
                                        <input type="range" min="1" max="100" onChange={(e)=>updateValue2(e.target.value)}></input>
                                    </div>
                                </div>

                                <div className="slider-container">
                                    <div className="slider-name">Foreign direct investment, net inflows(% of GDP)</div>
                                    <div className="slider">
                                        <p id="sliderValue3">{value3}</p>
                                        <input type="range" min="1" max="100" onChange={(e)=>updateValue3(e.target.value)}></input>
                                    </div>
                                </div>

                                <div className="slider-container">
                                    <div className="slider-name">Fertilizer consumption (% of fertilizer production)</div>
                                    <div className="slider">
                                        <p id="sliderValue4">{value4}</p>
                                        <input type="range" min="1" max="100" onChange={(e)=>updateValue4(e.target.value)}></input>
                                    </div>
                                </div>

                                <div className="slider-container">
                                    <div className="slider-name">Total reserves (% of total external debt)</div>
                                    <div className="slider">
                                        <p id="sliderValue5">{value5}</p>
                                        <input type="range" min="1" max="100" onChange={(e)=>updateValue5(e.target.value)}></input>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                            <div className="slider-container">
                                    <div className="slider-name">FDI- NetOutflows(%ofG DP)</div>
                                    <div className="slider">
                                        <p id="sliderValue6">{value6}</p>
                                        <input type="range" min="1" max="100" onChange={(e)=>updateValue6(e.target.value)}></input>
                                    </div>
                                </div>

                                <div className="slider-container">
                                    <div className="slider-name">Agricultural Contribution (% GDP)</div>
                                    <div className="slider">
                                        <p id="sliderValue7">{value7}</p>
                                        <input type="range" min="1" max="100" onChange={(e)=>updateValue7(e.target.value)}></input>
                                    </div>
                                </div>

                                <div className="slider-container">
                                    <div className="slider-name">Manufacturing(%GDP)</div>
                                    <div className="slider">
                                        <p id="sliderValue8">{value8}</p>
                                        <input type="range" min="1" max="100" onChange={(e)=>updateValue8(e.target.value)}></input>
                                    </div>
                                </div>

                                <div className="slider-container">
                                    <div className="slider-name">Agriculture, forestry, and fishing, value added (annual % growth)</div>
                                    <div className="slider">
                                        <p id="sliderValue9">{value9}</p>
                                        <input type="range" min="1" max="100" onChange={(e)=>updateValue9(e.target.value)}></input>
                                    </div>
                                </div>

                                <div className="slider-container">
                                    <div className="slider-name">Total debt service (% of GNI)</div>
                                    <div className="slider">
                                        <p id="sliderValue10">{value10}</p>
                                        <input type="range" min="1" max="100" onChange={(e)=>updateValue10(e.target.value)}></input>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div className="btn-container">
                            <button className="ml-btn" onClick={openPopUp()}>Call Machine Learning Model</button>
                        </div>

                        <div>{show && <PopUpContainer/>}</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export const PopUpContainer = () => {
    return (
        <div className="formPopup">
            <h5>Seleted Values</h5>
            <span>Projected GDP: {value1}</span>
        </div> 
    )
}

export default Predict;