import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

const Dona = ({confirmed,critical,deaths,recovered}) => {
    const data = {
        label: ['Total de casos: '],
        labels: ['Muertes: '+deaths, 'Casos Confirmados: '+confirmed, 'Casos Criticos: '+critical, 'Recuperados: '+recovered],
        datasets: [{
            data: [deaths, confirmed, critical, recovered],
            backgroundColor: [
            '#FF6384',
            '#F39E63',
            '#FFCE56',
            '#0FF5EE'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#F39E63',
            '#FFCE56',
            '#0FF5EE'
            ]
        }]
    };

    const opciones={
        maintainAspectRatio: false,
        responsive: true,
        showTooltips: true,
        showLabel: false
    }

    return (
        <div className="text-center w-full">
            <h3 className="text-xl sm:text-3xl font-semibold text-center m-5 black">Donut Statistics</h3>
            <div className="inline-block w-9/12 sm:w-10/12">
                <Doughnut
                    className="w-2/5 h-2/5"
                    data={data}
                    options = {opciones} 
                    width={500} 
                    height={500}
                />
            </div>
        </div>        
    );


}
export default Dona;
