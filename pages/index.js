import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fressbremse Online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Individuelle Fressbremsen für individuelle Pferde</h1>
        <p>
          Jetzt Online eine komplett nach deinen Vorstellungen individuell angepasste Fressbremse bestellen.
        </p>
        <div>
          <h2>Bestellformular</h2>
          <form action="#">
            <fieldset>
              <h3>Individulle Anpassungen</h3>
              <div>
                <label htmlFor="farbe">Farbe</label>
                <select name="farbe" id="farbe">
                  <option value="">--- Wähle deine wunsch Farbe ---</option>
                  <option value="gruen">Grün</option>
                  <option value="blau">Blau</option>
                  <option value="schwarz">Schwarz</option>
                </select>
              </div>
              <div>
                <label htmlFor="ausfuehrung">Ausführung</label>
                <select>
                  <option value="">--- Wähle deine gewünschte Ausführung ---</option>
                  <option value="schnallenverschluss">Schnallenverschluss</option>
                  <option value="schnellverschluss">Schnellverschluss</option>
                  <option value="halfterlos">Halfterlos</option>
                </select>
              </div>
              <div>
                <label htmlFor="futtermenge">Menge der Futteraufnahme</label>
                <select name="futtermenge" id="futtermenge">
                  <option value="">--- Wähle die gewünschte Futteraufnahme ---</option>
                  <option value="gering">Gering</option>
                  <option value="moderat">Moderat</option>
                  <option value="hoch">Hoch</option>
                </select>
              </div>
            </fieldset>
            <fieldset>
              <h3>Abmessungen</h3>
              <div>
                <label htmlFor="umfangMaul">Umfang Maul</label>
                <input type="number" name="maulumfang" id="maulumfang"/>
                <span>cm</span>
              </div>
              <div>
                <label htmlFor="laengeMaul">Länge Maul</label>
                <input type="number" name="laengeMaul" id="laengeMaul" />
                <span>cm</span>
              </div>
              <div>
                <label htmlFor="laengeGenick">Länge Genick</label>
                <input type="number" name="laengegenick" id="laengegenick" />
                <span>cm</span>
              </div>
            </fieldset>
            <fieldset>
              <div>
                <label htmlFor="vorname">Vorname</label>
                <input type="text" name="vorname" id="vorname"/>
              </div>
              <div>
                <label htmlFor="nachname">Nachname</label>
                <input type="text" name="nachname" id="nachname"/>
              </div>
              <div>
                <label htmlFor="starsse">Straße</label>
                <input type="text" name="strasse" id="strasse"/>
              </div>
              <div>
                <label htmlFor="plz">PLZ</label>
                <input type="text" name="plz" id="plz"/>
              </div>
              <div>
                <label htmlFor="ort">Ort</label>
                <input type="text" name="ort" id="ort"/>
              </div>
              <div>
                <label htmlFor="email">E-Mail</label>
                <input type="text" name="email" id="email"/>
              </div>
            </fieldset>
            <button type="submit">In den Warenkorb</button>
          </form>
        </div>
      </main>
    </div>
  )
}
