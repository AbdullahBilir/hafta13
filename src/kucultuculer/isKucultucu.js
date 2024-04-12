import { v4 as uuid } from "uuid";

const ilkYapılacaklarListesi = {
  veri: [
    {
      id: 1,

      title: "Yumurta Alınacak",

      complete: false,
    },

    {
      id: 2,

      title: "Ekmek Alınacak Ramazan Pidesi",

      complete: false,
    },
  ],
  tamamlanan: 0,
};

function tamamlananSayısı(veri) {
  return veri.filter((is) => is.complete === true).length;
}

const isKucultucu = (state, aksiyon) => {
  switch (aksiyon.type) {
    case "TAMAMLANDI":
      const tamamlandıVeri = state.veri.map((todo) => {
        if (todo.id === aksiyon.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });

      const yeniVeri = { ...state, veri: tamamlandıVeri };

      return { ...yeniVeri, tamamlanan: tamamlananSayısı(yeniVeri.veri) };

    case "SİL":
      const silindiVeri = state.veri.filter((todo) => {
        if (todo.id !== aksiyon.id) {
          return todo;
        }
      });

      return { ...state, veri: silindiVeri };

    case "EKLE":
      // const yeniId =
      //   state.reduce(
      //     (max, is) => {
      //       return Math.max(max, is.id);
      //     },

      //     0
      //   ) + 1;

      const yeniIs = { id: uuid(), title: aksiyon.title, complete: false };
      return { ...state, veri: [...state.veri, yeniIs] };

    default:
      return state;
  }
};

export { ilkYapılacaklarListesi, isKucultucu };
