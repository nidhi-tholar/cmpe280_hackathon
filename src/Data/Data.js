import React from "react";
import { Chart } from "react-google-charts";


export const data = [
    [
        "Year",
        "India",
        "China",
        "US",
    ],
    [1960, 37029883875.0, 59716467625.0, 543300000000.0],
    [1961, 39232435784.0, 50056868958.0, 563300000000.0],
    [1962, 42161481859.0, 47209359006.0, 605100000000.0],
    [1963, 48421923459.0, 50706799903.0, 638600000000.0],
    [1964, 56480289941.0, 59708343489.0, 685800000000.0],
    [1965, 59554854575.0, 70436266147.0, 743700000000.0],
    [1966, 45865462034.0, 76720285970.0, 815000000000.0],
    [1967, 50134942203.0, 72881631327.0, 861700000000.0],
    [1968, 53085455871.0, 70846535056.0, 942500000000.0],
    [1969, 58447995017.0, 79705906247.0, 1019900000000.0],
    [1970, 62422483055.0, 92602973434.0, 1073300000000.0],
    [1971, 67350988021.0, 99800958648.0, 1164850000000.0],
    [1972, 71463193830.0, 113688000000.0, 1279110000000.0],
    [1973, 85515269586.0, 138544000000.0, 1425380000000.0],
    [1974, 99525899116.0, 144182000000.0, 1545240000000.0],
    [1975, 98472796457.0, 163432000000.0, 1684900000000.0],
    [1976, 102717000000.0, 153940000000.0, 1873410000000.0],
    [1977, 121487000000.0, 174938000000.0, 2081830000000.0],
    [1978, 137300000000.0, 149541000000.0, 2351600000000.0],
    [1979, 152992000000.0, 178281000000.0, 2627330000000.0], [1980, 186325000000.0, 191149000000.0, 2857310000000.0], [1981, 193491000000.0, 195866000000.0, 3207040000000.0], [1982, 200715000000.0, 205090000000.0, 3343790000000.0], [1983, 218262000000.0, 230687000000.0, 3634040000000.0], [1984, 212158000000.0, 259947000000.0, 4037610000000.0], [1985, 232512000000.0, 309488000000.0, 4338980000000.0], [1986, 248986000000.0, 300758000000.0, 4579630000000.0], [1987, 279034000000.0, 272973000000.0, 4855220000000.0], [1988, 296589000000.0, 312354000000.0, 5236440000000.0], [1989, 296042000000.0, 347768000000.0, 5641580000000.0], [1990, 320979000000.0, 360858000000.0, 5963140000000.0], [1991, 270105000000.0, 383373000000.0, 6158130000000.0], [1992, 288208000000.0, 426916000000.0, 6520330000000.0], [1993, 279296000000.0, 444731000000.0, 6858560000000.0], [1994, 327276000000.0, 564325000000.0, 7287240000000.0], [1995, 360282000000.0, 734548000000.0, 7639750000000.0], [1996, 392897000000.0, 863747000000.0, 8073120000000.0], [1997, 415868000000.0, 961604000000.0, 8577550000000.0], [1998, 421351000000.0, 1029040000000.0, 9062820000000.0], [1999, 458820000000.0, 1094000000000.0, 9630660000000.0], [2000, 468395000000.0, 1211350000000.0, 10252300000000.0], [2001, 485441000000.0, 1339400000000.0, 10581800000000.0], [2002, 514938000000.0, 1470550000000.0, 10936400000000.0], [2003, 607699000000.0, 1660290000000.0, 11458200000000.0], [2004, 709149000000.0, 1955350000000.0, 12213700000000.0], [2005, 820382000000.0, 2285970000000.0, 13036600000000.0], [2006, 940260000000.0, 2752130000000.0, 13814600000000.0], [2007, 1216740000000.0, 3550340000000.0, 14451900000000.0], [2008, 1198900000000.0, 4594310000000.0, 14712800000000.0], [2009, 1341890000000.0, 5101700000000.0, 14448900000000.0], [2010, 1675620000000.0, 6087160000000.0, 14992100000000.0], [2011, 1823050000000.0, 7551500000000.0, 15542600000000.0], [2012, 1827640000000.0, 8532230000000.0, 16197000000000.0], [2013, 1856720000000.0, 9570410000000.0, 16784800000000.0], [2014, 2039130000000.0, 10475700000000.0, 17527200000000.0], [2015, 2103590000000.0, 11061600000000.0, 18238300000000.0], [2016, 2294800000000.0, 11233300000000.0, 18745100000000.0], [2017, 2651470000000.0, 12310400000000.0, 19543000000000.0], [2018, 2701110000000.0, 13894800000000.0, 20611900000000.0], [2019, 2870500000000.0, 14279900000000.0, 21433200000000.0], [2020, 2622980000000.0, 14722700000000.0, 20936600000000.0],
];

var chartData = []

export function CountryData(country = 'INDIA') {
    chartData = [['year', country.toUpperCase()]]
    if (country === 'INDIA') {
        for (let i = 1; i < data.length; i++) {
            chartData.push(data[i].slice(0, 2))
        }
    } else if (country === 'CHINA') {
        for (let i = 1; i < data.length; i++) {
            let interval = []
            interval.push(data[i][0])
            interval.push(data[i][2])
            chartData.push(interval)
        }
    } else {
        for (let i = 1; i < data.length; i++) {
            let interval = []
            interval.push(data[i][0])
            interval.push(data[i][3])
            chartData.push(interval)
        }
    }
}


export const options = {
    chart: {
        // title: "GDP data for 3 Countries",
        // subtitle: "Denoted in USD",
    },
};



export function DataChart(props) {

    console.log('Data Chart country: ', props.country);
    CountryData(props.country);
    return (
        <div style={{ marginBottom: "20px" }}>
            <Chart
                chartType="Line"
                width="100%"
                height="250px"
                data={chartData}
                options={options}
            />
        </div>

    );
}