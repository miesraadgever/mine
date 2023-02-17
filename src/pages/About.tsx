import React from "react";
import Nav from "../components/Nav"

const About = () => {
  return (
    <div>
      <Nav />

    <div className="row p-5">
      <div className="col-4">
      <p>
      Begonnen in 2020 als modemerk, genaamd mi_ne (fonetisch: /’mini’/),  onderzochten mies raadgever en neeltje de jong meer dan alleen kleding.
      <br></br>Vanuit hier ontstond mi_ne movement; een interdisciplinair collectief.

      Binnen mi_ne movement onderzoeken zij oa. thema’s als dualiteit, femine rage en lichamelijke expressie. 
      Deze thema’s worden zowel mysthiek als confronterend tot vorm gebracht in projecten variërend van audiovisueel werk tot schilderijen, tot teksten en terug naar kleding.
      <br></br>
      <br></br>
      Tegelijkertijd werken mies en neeltje ook aan individuele projecten. Op de persoonlijke pagina’s vind je meer informatie over hun eigen praktijk en kwaliteiten.
      </p>
      </div>
      <div className="col-2"></div>
      <div className="col-4">
      <img
            className= "w-100"
            src={require("../assets/ABOUT/about.jpg")}
            alt="broek1"
          />
          </div>
    </div>

    


    <div className="row col-12 p-5">

      <div className="col-4">
      <h1>Mies Raadgever</h1>
      <p> Mies Raadgever verbeeld haar eigen gedachtengangen
          verhalend. Het werk ontstaat veel al uit schetsmatige- en
          lijntekeningen. De elementen die zich vaak herhalen en
          terugkeren vormen een dromerige fantasie wereld.
          Inspiratie komt uit verschillende hoeken; een persoonlijke
          emotie, natuurverschijnselen of verhalen.
          Deze worden uitgewerkt in illustratie, audiovisuele installaties en kleding.<br></br>
          ‘Bovenstaande vang ik in mijn werken, maar ik laat veel
          ruimte over voor eigen interpretatie. Hierdoor zet ik de
          toeschouwer enkel aan tot denken en kan ieder een andere
          en persoonlijke boodschap uit mijn werk halen.'</p>

          <p>
           <i> @miesraadgever <br></br>
            mjraadgever@gmail.com </i>
          </p>

          <p>Nomination Kazerne Design Award, Eindhoven 2020 
            <br></br>Blauwdruk, Amersfoort 2020 
            <br></br> Culturele Zaterdag, Utrecht 2020
            <br></br> A0 Expo, Utrecht 2020
            <br></br>Graduation Show Design Academy Eindhoven, 2019
            <br></br>Amersfoortste Prachtnacht, 2018 </p>
      </div>
      <div className="col-2"></div>
      <div className="col-4">
      <h1>Neeltje de Jong</h1>
      <p> Mies Raadgever verbeeld haar eigen gedachtengangen
          verhalend. Het werk bestaat veel al uit schetsmatige- en
          lijntekeningen. De elementen die zich vaak herhalen en
          terugkeren vormen een dromerige fantasie wereld.
          Inspiratie komt uit verschillende hoeken; een persoonlijke
          emotie, herinnering, natuurverschijnselen of verhalen.
          Deze worden uitgewerkt in illustratie, textiel en sculpturen.
          ‘Bovenstaande vang ik in mijn werken, maar ik laat veel
          ruimte over voor eigen interpretatie. Hierdoor zet ik de
          toeschouwer enkel aan tot denken en kan ieder een andere
          en persoonlijke boodschap uit mijn werk halen.</p>
      </div>

      </div>
    </div>
  )
};

export default About;
