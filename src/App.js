import './App.css';

const headerImg = "/header1.png"
const mobileHeaderImg = '/mobilee.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <img src={headerImg} alt="header" id="img-header" className="imgheader" />
        <img src={mobileHeaderImg} alt="mobile-header" id="mobile-header-img"/>

      </header>

      <section>

      <div className="introduction">
        <h3>
          Wappu lähestyy, mikä voi tarkoittaa vain yhtä asiaa. Kaljakroketti, tuo urheilulajeista jaloin, tulee taas! 
        </h3>
        <p>Perinteinen kaljakrokettiturnaus järjestetään tänä vuonna Wappuviikon torstaina 27.4. Alvarin aukiolla. Suurta urheilujuhlaa ovat tavan mukaan tervetulleita viettämään kaikki kroketista sekä hyvästä seurasta nauttivat athenelaiset sekä athenenmieliset, jotka löytävät ympärilleen 4-6 hengen joukkueen.
          Perinteisesti taidon sijaan olennaisempaa on pitää hauskaa, joten asenne ja huumorintaju ovat aikaisempaa kokemusta tärkeämpiä. Kaljaakaan ei ole pakko juoda, vaan sen voi korvata muilla hiilihapotetuilla tölkkijuomilla.
        </p>

      </div>

      <div className="side-by-side">
      
        <h2>Ilmoittautuminen</h2>
        <div className="full-container">
          <p>Kaljakroketurnaukseen mahtuu 16 joukkuetta kumpaankin sarjaan. Kerää 4-6 hengen tiimi ja ilmoittaudu mukaan kaljakrokettiin <span className="bold">16.4.2023 mennessä</span>!
          <br/><br/>Kutsuvieraille on oma kiintiö. Mikäli kutsuvieraskiintiöstä jää paikkoja yli, ne täytetään jonosijoille ilmoittautuneilla. 
          <br/><br/>Osallistumismaksut ovat 8€/joukkue. Osallistumismaksulla katetaan sakkojuomat ja krokettivälineet, eli varsinaiset pelijuomat tulee tuoda paikalle itse.
          <br/><br/><a className="a-link" href="https://athene.fi/ilmo/325" rel="noreferrer noopener " target="blank" >Linkki ilmoittautumiseen</a>
          </p>
          </div>
       
     
      </div>

      <div className="side-by-side">
      <h2>Sarjat</h2>
        <div className="full-container">
        
          <h3>Höyhensarja</h3>
          <p>Jos krokettitaitosi ovat vasta jalostumassa taikka päässeet ruostumaan phabuunnuttua, Höyhensarja voi olla sinua varten! Varsinkin jos nautit ennemmin sääntöjen mukaisesta kuin niitä jatkuvasti rikkovasta pelistartegiasta sekä keskustelet mieluusti vastapelaajien ja tuomarien kanssa normaalilla puheäänellä, ilmottaudu tähän kevyimpään sarjaan!</p><br/>
          <h3>Raskassarja</h3>
          <p>Jos taas olet kuluttanut enemmänkin nurmikkoa eikä kaljan kellotus hirvitä, jatka lukemista! Raskaassa sarjassa pelaajat ovat hitusen taitavampia eli kenttä haastavampi, pelistrategiat likaisempia ja uhoaminen kovempaa. Jos olet valmis tekemään mitä vain voiton eteen, ilmoittaudu tähän sarjaan!</p>
        </div>
   
     
      </div>

      <div className="side-by-side">
      
      <h2>Aikataulu</h2>
  
      <div className="full-container">
        
        <h3>16.00 Alkulohko A ja B</h3>
        <h3>16.45 Alkulohko C ja D</h3>
        <h3>17.30 Jatkosarjat</h3>
        <h3>18.15 Finaali</h3>

     
        </div>
      
     
     
        </div>
   


      </section>
        
      <section id="saannot">
        
        <div className="text-container">

        <h2>Säännöt</h2>
        <ol>
          <li>Aloitus tapahtuu osumalla aloitustolppaan. Pallo asetetaan mailan mitan päähänaloituksesta, ja osuttaessa tolppaan joukkue saa uuden lyönnin. Jos pallo vierii kauemmas kuin mailan mitta ennen osumista aloitustolppaan, sen saa seuraavalla kierroksella tuoda jälleen mailan mitan päähän.</li>

          <li>Joukkueen on kumottava kalja (tai muu 0.33L juoma) ennen seuraavan portin läpäisyä, muuten joukkue saa yhden sakkojuoman. Kaljan saa avata vasta edellisen portin läpäisyn jälkeen (aloituksessa tolppaan osumisen jälkeen), eli niitä ei voi juoda varastoon.</li>

          <li>Portin läpäisystä saa uuden lyönnin. Mikäli joukkue läpäisee portin ja osuu toisen joukkueen palloon samalla lyönnillä, seuraa kaksi lisälyöntiä. Jos pallo menee portista läpi toisen joukkueen toimesta, saa läpäissyt joukkue avata kaljan, mutta ei ylimääräistä lyöntiä omalla vuorollaan.</li>

          <li>Tuplaportin läpäisystä saa juotavaksi kaksi kaljaa, jotka on juotava ennen seuraavaa normaalia porttia. Jos pallo pysähtyy tuplaportin porttien väliin, saa avata yhden kaljan, jota ei kuitenkaan tarvitse juoda kuin vasta ennen seuraavan yksittäisen portin läpäisyä.</li>

          <li>Mikäli pallo osuu toisen joukkueen palloon, saa lyönyt joukkue joko uuden lyönnin tai krokata toisen joukkueen pallon. Samalla kierroksella voi saada jokaisen muun joukkueen palloon osumisesta maksimissaan yhden uuden lyönnin tai krokkauksen. Krokkaamisessa lyödään omaa palloa, jonka päälle krokkaaja on asettanut oman jalkansa. Oma pallo siirretään toisen joukkueen pallon viereen, mikäli se on kauemmaksi vierinyt. Oma pallo ei saa liikkua krokatessa, siitä seuraa kaljasakko.</li>

          <li>Jos portti mennään läpi väärältä puolelta, saa joukkue kaljasakon. Muustakin sääntöjen rikkomisesta voi pelin tuomari määrätä sakon tai useamman rikkeen vakavuudesta riippuen. Esimerkkejä yleisistä virheistä ovat pelin turha viivyttäminen (peliä ei siis saa viivyttää lisäajan saamiseksi kaljan juontiin), portin irtoaminen maasta, pallon työntäminen lyömisen sijaan (ensimmäisestä ko. virheestä huomautus, huomautuksen jälkeisistä rikkeistä sakkoa) sekä pallojen siirtely tai ohjailu kentällä. Sakot on juotava ennen maalitolppaan osumista.</li>

          <li>Rataa ei saa muuttaa, siihen kuuluvat risut ja kivet yms. Muiden pelivälineet tai lennelleet kaljatölkit saa kuitenkin siirtää pois tieltä.</li>

          <li>Voittanut joukkue on se, joka ensimmäisenä selvittää radan eli osuu maalitolppaan maalikaljan sekä mahdollisten sakkojen tyhjentämisen jälkeen.</li>  

          <li>Huijaaminen on sallittua, jos tuomari ei huomaa. Jos tuomari huomaa, hän voi määrätä sakkoja. Jos peli sujuu muutenkin hyvin, ei ole hyvien tapojen mukaista huijata.</li>
        </ol>
        <br/>
        <p>Kaljakrokettia pelataan, koska se on hauskaa. Kilpailua ei suotane otettavan vakavana urheiluna, sillä urheilu humalassa voi olla vaarallista. 

          Tuomarit hoitavat radan, sääntöjen tarkkailun ja muut ongelmakohdat. Tuomarit eivät ole absoluuttisia eivätkä absolutisteja.</p>
      </div>
      <div className="img-container">
        <img src='/sandels.png' width="200px" alt="sandels"/>
        <div>
          <img src="/krokesetti.png" width="340px" alt="krokesetti" id="krokesetti"/>
        </div>
        </div>

    </section>
      <footer>
       

          <h3>Kysyttävää? Ota yhteyttä Telegramissa @markuslaine tai s-postilla markus(a)athene.fi</h3>
          <p>Kaljakroketti 2023</p>
   
        
      </footer>
    </div>
  );
}

export default App;
