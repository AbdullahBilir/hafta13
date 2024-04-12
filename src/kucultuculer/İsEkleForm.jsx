import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";

function IsEkleForm({ vekilFonksiyon }) {
  const [yeniIsAdi, setIsAdı] = useState("");

  function formGonder(e) {
    e.preventDefault();

    vekilFonksiyon({ type: "EKLE", title: yeniIsAdi });

    setIsAdı("");
  }

  return (
    <>
      <form className="input-group" onSubmit={formGonder}>
        <input
          type="text"
          value={yeniIsAdi}
          placeholder="İş adı yaz..."
          onChange={(e) => {
            setIsAdı(e.target.value);
          }}
        />
        <button type="submit" className="btn btn-success">
          Ekle
        </button>
      </form>
    </>
  );
}

export default IsEkleForm;
