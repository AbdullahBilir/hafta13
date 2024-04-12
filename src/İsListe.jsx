function IsListe({ vekilFonksiyon, yapılacaklar }) {
  const tamamlandıYap = (is) => {
    vekilFonksiyon({ type: "TAMAMLANDI", id: is.id });
  };

  const isSil = (is, e) => {
    e.preventDefault();
    vekilFonksiyon({ type: "SİL", id: is.id });
  };

  return (
    <>
      {yapılacaklar.veri.map((is) => {
        return (
          <div key={is.id} className="d-flex justify-content-between ">
            <label>
              <input
                type="checkbox"
                checked={is.complete}
                onChange={() => tamamlandıYap(is)}
              />
              {is.title}
            </label>
            <a href="#" onClick={(e) => isSil(is, e)}>
              <i className="bi bi-trash"></i>
            </a>
          </div>
        );
      })}
    </>
  );
}

export default IsListe;
