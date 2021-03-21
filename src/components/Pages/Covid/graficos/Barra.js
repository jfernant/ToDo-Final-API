import {Bar} from 'react-chartjs-2';

function Barra({confirmed,critical,deaths,recovered}){

  const data ={
    labels: ['Muertes: '+deaths, 'Casos Criticos: '+critical, 'Casos Confirmados: '+confirmed, 'Recuperados: '+recovered],
    datasets:[
      {
      backgroundColor: [
        'rgba(255, 99, 132, 0.1)',
        'rgba(54, 162, 235, 0.1)',
        'rgba(255, 206, 86, 0.1)',
        'rgba(75, 192, 192, 0.1)',
        'rgba(153, 102, 255, 0.1)',
        'rgba(255, 159, 64, 0.1)'
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
      hoverBackgroundColor: [
        'rgba(255, 99, 132, 0.4)',
        'rgba(54, 162, 235, 0.4)',
        'rgba(255, 206, 86, 0.4)',
        'rgba(75, 192, 192, 0.4)',
        'rgba(153, 102, 255, 0.4)',
        'rgba(255, 159, 64, 0.4)'
        ],
      hoverBorderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
        ],
      label: ['Total de casos: '],  
      data:[deaths,critical,confirmed,recovered]
      }
  ]
  };

  const opciones={
    maintainAspectRatio: false,
    responsive: true,
    showTooltips: true,
    showLabel: false
  }

  return (
    <div className="style text-center w-full">
      <h3 class="text-xl sm:text-3xl font-semibold text-center m-5 black">Bar Statistics</h3>
      <div className="desing inline-block w-9/12 sm:w-10/12">
        <Bar 
          data = {data} 
          options = {opciones} 
          width={800} 
          height={600}
        />
      </div>
    </div>
  )
}

export default Barra;