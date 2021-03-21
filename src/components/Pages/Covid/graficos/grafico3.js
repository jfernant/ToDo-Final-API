import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

const Barras = ({confirmed,critical,deaths,recovered}) => {

    const data = {
    labels: ['Casos Confirmados','Casos Criticos','Muertes','Recuperados'],
    datasets: [{
        label: [''],
        value:'0',
        data: [confirmed,critical,deaths,recovered],
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
    }]
    }
    const opciones={
        maintainAspectRatio: false,
        responsive: true,
        showTooltips: true,
        showLabel: false
    }
    


    return (
        <div>
            <h2 className="W-100 text-center p-2 bg-yellow-500 text-white">CORONAVIRUS EN HONDURAS</h2>
            <Bar
            data={data}
            width={400}
            height={200}
            options={opciones}
            />
        </div>
    );


}
export default Barras;

