import {useState,useEffect} from 'react';
import firebaseSDK from '../../../FirebaseInit';
import getCountryCodeTotal from './CovidApi';
import Barra from './graficos/Barra';
import LineDemo from './graficos/grafico1';
import BarChart from './graficos/grafico2';
import Dona from './graficos/grafico4';

function Covid (){
  
  const [data, setdata] = useState();
  const [code, setcode] = useState();
  const [confirmed, setconfirmed] = useState();
  const [country, setcountry] = useState();
  const [critical, setcritical] = useState();
  const [deaths, setdeaths] = useState();
  const [lastChange, setlastChange] = useState();
  const [lastUpdate, setlastUpdate] = useState();
  const [recovered, setrecovered] = useState();

  function snap(snapshot){
    setdata(snapshot.val());
    setcode(snapshot.child('code').val());
    setconfirmed(snapshot.child('confirmed').val());
    setcountry(snapshot.child('country').val());
    setcritical(snapshot.child('critical').val());
    setdeaths(snapshot.child('deaths').val());
    setlastChange(snapshot.child('lastChange').val());
    setlastUpdate(snapshot.child('lastUpdate').val());
    setrecovered(snapshot.child('recovered').val());
  }
  useEffect(
    ()=>{
       firebaseSDK.database().ref('covid').child('0').get().then(function(snapshot) {
         if (!(snapshot.exists())){
             console.log(" No encontrado ");
             getCountryCodeTotal((err, data)=>{
               if(err){
                 console.log(err);
               } 
               else{
                    firebaseSDK.database().ref('covid').set(data);
                    firebaseSDK.database().ref('covid').child('0').get().then(function(snapshot) {
                      snap(snapshot);
                    });
               }
             })
         }else{
          // snapshot.forEach((childSnapshot) => {
          //   var childKey = childSnapshot.key;
          //   var childData = childSnapshot.val();
          // });

          snap(snapshot);
          const datos=snapshot.exportVal();
          for (const key in datos) {
            console.log(key+":"+datos[key]);
          }
          console.log(datos);
          setdata(datos);
          console.log(data);
         }
       });
    },
    []
  );
  return (
    <section>
      <div className="flex items-center w-full overflow-hidden">
        <h2 class="text-xl sm:text-3xl font-semibold text-center w-full m-5">Coronavirus in Honduras</h2>
      </div>
      <Barra 
        confirmed={confirmed}
        critical={critical}
        deaths={deaths}
        recovered={recovered}
      >
      </Barra>
      <Dona
        confirmed={confirmed}
        critical={critical}
        deaths={deaths}
        recovered={recovered}
      >
      </Dona>
      <div className="flex items-center w-full overflow-hidden">
        <h3 className="text-base sm:text-xl font-semibold text-center w-full p-9">Last Update: {lastUpdate}</h3>
      </div>
      {/* <LineDemo></LineDemo>
      <BarChart dato="100"></BarChart>
      <div className="p-10">
          <h2 className="p-1">DATOS</h2>
          <h2 className="p-1">code: {code}</h2>
          <h2 className="p-1">confirmed: {confirmed}</h2>
          <h2 className="p-1">country: {country}</h2>
          <h2 className="p-1">critical: {critical}</h2>
          <h2 className="p-1">deaths: {deaths}</h2>
          <h2 className="p-1">lastChange: {lastChange}</h2>
          <h2 className="p-1">lastUpdate: {lastUpdate}</h2>
          <h2 className="p-1">recovered: {recovered}</h2>
      </div> */}
    </section>
  );
}

export default Covid;