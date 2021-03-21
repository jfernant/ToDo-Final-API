import {useState,useEffect} from 'react';
import firebaseSDK from '../../../FirebaseInit';
import getCountryCodeTotal from './CovidApi';
import Barra from './graficos/Barra';
import Dona from './graficos/Dona';

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
        <h2 class="text-xl sm:text-3xl font-semibold text-center w-full m-5">Coronavirus in {country} ({code})</h2>
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
    </section>
  );
}

export default Covid;