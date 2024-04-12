import { useReducer } from "react";
import {
  ilkYapılacaklarListesi,
  isKucultucu,
} from "./kucultuculer/isKucultucu";
import IsListe from "./İsListe";
import IsEkleForm from "./kucultuculer/İsEkleForm";

function App() {
  const [yapılacaklar, vekilFonksiyon] = useReducer(
    isKucultucu,
    ilkYapılacaklarListesi
  );

  const tamamlananSayısı = yapılacaklar.veri.filter(
    (is) => is.complete === true
  ).length;

  return (
    <>
      <div className="container w-50 mx-auto mt-5  ">
        <h3>Yapılacak İş</h3>
        <IsEkleForm vekilFonksiyon={vekilFonksiyon} />
        <IsListe yapılacaklar={yapılacaklar} vekilFonksiyon={vekilFonksiyon} />
        <div>{`toplam ${yapılacaklar.veri.length} / ${tamamlananSayısı} `}</div>
      </div>
    </>
  );
}

export default App;
