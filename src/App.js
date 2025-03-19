import './App.css';
import React, { useState, useEffect } from 'react';

const headerImg = "/desktop2025.png"
const mobileHeaderImg = '/mobiili2025.png'
/*const pdfFile = '/Pelikaavio.pdf'*/
const santtububble = '/sandels2.png'



function App() {



    const [isSticky, setIsSticky] = useState(false);
  
    useEffect(() => {
      const headerPic = document.querySelector('.headerpic');
  
      const handleScroll = () => {
        const headerPicHeight = headerPic.offsetHeight;
        const scrollY = window.scrollY;
  
        if (scrollY > headerPicHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const handleContextMenu = (event) => {
      event.preventDefault();
  
      return false
    };

    return (
    <div className="App">
      <div className="headerpic">
        <img src={headerImg} alt="header" id="img-header" className="imgheader" placeholder="blurred"/>
        <img src={mobileHeaderImg} alt="mobile-header" id="mobile-header-img" placeholder="blurred"/>
      </div>
      <header className={`App-header ${isSticky ? 'sticky' : ''}`}>

        <nav>
            <ul>
                <li><a href="#ilmo">Ilmo</a></li>
                <li><a href="#sarjat">Sarjat</a></li>
                <li><a href="#aikataulu">Aikataulu</a></li>
                <li><a href="#saannot">Säännöt</a></li>
            </ul>
        </nav>
      </header>

      <section>
      <div className='introduction-container'>
        <div className='introduction-picture-container'>
            <img src={santtububble} alt="santtu" id="santtu-bubble" placeholder='blurred'/>
        </div>
        <div className="introduction">
          <h3 className="tekstikeskelle">
            Wappu on kohta täällä, mikä voi tarkoittaa vain yhtä asiaa. Kaljakroketti, tuo urheilulajeista jaloin, tulee taas!
          </h3>
          <p className="tekstikeskelle">Perinteinen kaljakrokettiturnaus järjestetään tänä vuonna Wappuviikon sunnuntaina 27.4. Alvarin aukiolla. Suurta urheilujuhlaa ovat tavan mukaan tervetulleita viettämään kaikki kroketista sekä hyvästä seurasta nauttivat hiilihapotettujen juomien ystävät, jotka löytävät ympärilleen 4-6 hengen joukkueen. Perinteisesti taidon sijaan olennaisempaa on pitää hauskaa, joten asenne ja huumorintaju ovat aikaisempaa kokemusta tärkeämpiä. Kaljaakaan ei tarvitse juoda, vaan sen voi korvata muilla hiilihapotetuilla tölkkijuomilla.</p>
        </div>
      </div>
      <div className="side-by-side" id='ilmo'>
      
        <h2>Ilmoittautuminen</h2>
        <div className="full-container">
          <p>Kerää 4-6 hengen tiimi ja ilmoittaudu mukaan kaljakrokettiin <span className="bold">1.4.2025 klo 12.00 alkaen</span>, mutta viimeistään <span className="bold"> 15.4.2025 klo 23.59</span> mennessä KideAppissa!</p>
          <br/><br/>Kutsuvieraille on oma kiintiö. Kutsuvieraiksi on kutsuttu muiden kiltojen ja ainejärjestöjen edustajia. Kutsuvierasilmoittautuminen on auki aiemmin ja kaikki ylijääneet paikat lisätään avoimeen lipunmyyntiin!
          <br/><br/>Osallistumismaksulla katetaan sakkojuomat ja krokettivälineet, eli varsinaiset pelijuomat tulee tuoda paikalle itse.
          <p>Peliasu on vapaa mutta suositeltava - pelaajat voivat pukeutua edustamansa järjestön haalareihin taikka omaan yhteneväiseen peliasuun.</p>
          <br/><br/><p>Linkki ilmoittautumiseen tulee tähän</p>
          
          </div>
       
     
      </div>

      <div className="side-by-side" id='sarjat'>
      <h2>Sarjat</h2>
        <div className="full-container">
        
          <h3>Höyhensarja</h3>
          <p>Jos krokettitaitosi ovat vasta jalostumassa taikka päässeet ruostumaan phabuunnuttua, Höyhensarja voi olla sinua varten! Varsinkin jos nautit ennemmin sääntöjen mukaisesta kuin niitä jatkuvasti rikkovasta pelistrategiasta sekä keskustelet mieluusti vastapelaajien ja tuomarien kanssa normaalilla puheäänellä, ilmottaudu tähän kevyimpään sarjaan!</p><br/>
          <h3>Raskassarja</h3>
          <p>Jos taas olet kuluttanut enemmänkin nurmikkoa eikä kaljan kellotus hirvitä, jatka lukemista! Raskaassa sarjassa pelaajat ovat hitusen taitavampia eli kenttä haastavampi, pelistrategiat likaisempia ja uhoaminen kovempaa. Jos olet valmis tekemään mitä vain voiton eteen, ilmoittaudu tähän sarjaan!</p>
          <p></p>
          <p className="italic">Sarjat ovat kuitenkin suuntaa antavia ja todellinen taso selviää paikan päällä – me järjestäjät kun emme voi ilmoittautuneiden taitotasoa etukäteen tietää. Muistakaa, että sopimatonta käytöstä tuomaria tai kanssapelaajia kohtaan ei kummassakaan sarjassa suvaita.</p>
        </div>
   
     
      </div>

      <div className="side-by-side" id='aikataulu'>
      
        <h2>Aikataulu<br/>(tarkentuu myöhemmin) </h2>
  
        <div className="full-container">
        
          <div className='aikataulu-container'>
            <div className="sarjapadding">
              <h4>Höyhensarja</h4>
              <h3>16.30 Alkulohkot A, B, C ja D</h3>
              <h3>17.15 Alkulohkot E, F, G ja H</h3>
              <h3>18.00 Jatkosarjat (lohko 1)</h3>
              <h3>18.45 Jatkosarjat (lohko 2)</h3>
              <h3>19.30 Finaalit</h3>

            </div>
            <div className="sarjapadding">
              <h4>Raskassarja</h4>
              <h3>16.30 Alkulohkot A ja B</h3>
              <h3>17.15 Alkulohkot C ja D</h3>
              <h3>18.00 Jatkosarjat</h3>
              <h3>19.00 Finaalit</h3>
            </div>

          </div>

          <p>Tarjoamme turnauskaavion tässä lähempänä tapahtumaa</p>

      
        </div>
      
     
     
      </div>
   


      </section>
        
      <section id="saannot">
        
        <div className="text-container">

        <h2 className="tekstikeskelle">Säännöt</h2>
        <p className="tekstikeskelle"><a href="https://bit.ly/3ZK5elt" rel="noreferrer noopener " target="_blank">Rules in English</a></p>
        <ol>
          <li>Aloitus tapahtuu osumalla aloitustolppaan. Pallo asetetaan mailan mitan päähänaloituksesta, ja osuttaessa tolppaan joukkue saa uuden lyönnin. Jos pallo vierii kauemmas kuin mailan mitta ennen osumista aloitustolppaan, sen saa seuraavalla kierroksella tuoda jälleen mailan mitan päähän.</li>

          <li>Joukkueen on kumottava kalja (tai muu 0.33L juoma) ennen seuraavan portin läpäisyä, muuten joukkue saa yhden sakkojuoman. Kaljan saa avata vasta edellisen portin läpäisyn jälkeen (aloituksessa tolppaan osumisen jälkeen), eli niitä ei voi juoda varastoon.</li>

          <li>Portin läpäisystä saa uuden lyönnin. Mikäli joukkue läpäisee portin ja osuu toisen joukkueen palloon samalla lyönnillä, seuraa kaksi lisälyöntiä. Jos pallo menee portista läpi toisen joukkueen toimesta, saa läpäissyt joukkue avata kaljan, mutta ei ylimääräistä lyöntiä omalla vuorollaan.</li>

          <li>Tuplaportin läpäisystä saa juotavaksi kaksi kaljaa, jotka on juotava ennen seuraavaa normaalia porttia. Jos pallo pysähtyy tuplaportin porttien väliin, saa avata yhden kaljan, jota ei kuitenkaan tarvitse juoda kuin vasta ennen seuraavan yksittäisen portin läpäisyä.</li>

          <li>Mikäli pallo osuu toisen joukkueen palloon, saa lyönyt joukkue joko uuden lyönnin tai krokata toisen joukkueen pallon. Samalla kierroksella voi saada jokaisen muun joukkueen palloon osumisesta maksimissaan yhden uuden lyönnin tai krokkauksen. Krokkaamisessa lyödään omaa palloa, jonka päälle krokkaaja on asettanut oman jalkansa. Oma pallo siirretään toisen joukkueen pallon viereen, mikäli se on kauemmaksi vierinyt. Oma pallo ei saa liikkua krokatessa, siitä seuraa kaljasakko.</li>

          <li>Jos portti mennään läpi väärältä puolelta, saa joukkue kaljasakon. Muustakin sääntöjen rikkomisesta voi pelin tuomari määrätä sakon tai useamman rikkeen vakavuudesta riippuen. Esimerkkejä yleisistä virheistä ovat pelin turha viivyttäminen (peliä ei siis saa viivyttää lisäajan saamiseksi kaljan juontiin), portin irtoaminen maasta, pallon työntäminen lyömisen sijaan (ensimmäisestä ko. virheestä huomautus, huomautuksen jälkeisistä rikkeistä sakkoa) sekä pallojen siirtely tai ohjailu kentällä. Sakot on juotava ennen maalitolppaan osumista.</li>

          <li>Rataa ei saa muuttaa, siihen kuuluvat risut ja kivet yms. Muiden pelivälineet tai lennelleet kaljatölkit saa kuitenkin siirtää pois tieltä.</li>

          <li>Voittanut joukkue on se, joka ensimmäisenä selvittää radan eli osuu maalitolppaan maalikaljan sekä mahdollisten sakkojen tyhjentämisen jälkeen.</li>  

        </ol>
        <br/>
        <p>Kaljakrokettia pelataan, koska se on hauskaa. Kilpailua ei suotane otettavan vakavana urheiluna, sillä urheilu humalassa voi olla vaarallista. 

          Tuomarit hoitavat radan, sääntöjen tarkkailun ja muut ongelmakohdat. Tuomarit eivät ole absoluuttisia eivätkä absolutisteja.</p>
          <p>Tapahtumassa noudatetaan <a className="a-link" href="https://athene.fi/periaatteet" rel="noreferrer noopener" target="_blank">Athenen yhteisiä periaatteita.</a></p>

      </div>
      <img 
        id="beer" 
        src='/santtu-uus.png' 
        width="400px" 
        alt="sandels" 
        draggable="false" 

        onContextMenu={handleContextMenu} 
        />

    </section>
      <footer>
       

          <h3>Kysyttävää? Ota yhteyttä Telegramissa @ToiKimi tai s-postilla yhteiso(a)athene.fi</h3>
          <br/>
          <br/>
          <br/>
          <br/>
          <p>Kaljakroketti 2022-2024</p>
          <p>(c) Maria Toivainen (2024) & Markus Laine </p>
   
        
      </footer>
    </div>
  );
}

export default App;
