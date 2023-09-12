import React from 'react'
import Head from 'next/head'

import FeatureCard from '../components/feature-card'
import GalleryCard1 from '../components/gallery-card1'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Cabinet Pluridisciplinaire à Sceaux | Location</title>
          <meta
            name="description"
            content="Louez un espace de travail pluridisciplinaire à Sceaux, idéalement situé pour les professionnels de la santé et du bien-être. Réservez dès aujourd'hui !"
          />
          <meta
            property="og:title"
            content="Cabinet Pluridisciplinaire à Sceaux | Location"
          />
          <meta
            property="og:description"
            content="Louez un espace de travail pluridisciplinaire à Sceaux, idéalement situé pour les professionnels de la santé et du bien-être. Réservez dès aujourd'hui !"
          />
        </Head>
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <a href="#avantages" className="home-link">
                Le cabinet
              </a>
              <a href="#gallery" className="home-link1">
                Gallerie
              </a>
              <a href="#tarifs" className="home-link2">
                Tarifs
              </a>
            </nav>
            <div className="home-buttons">
              <a href="#contact" className="home-contact button">
                Contact
              </a>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <a href="#avantages" className="home-link">
                  Le cabinet
                </a>
                <a href="#gallery" className="home-link1">
                  Gallerie
                </a>
                <a href="#tarifs" className="home-link2">
                  Tarifs
                </a>
              </nav>
            </div>
          </div>
        </header>
        <section className="home-hero">
          <div className="home-container1">
            <h1 className="home-text05">Cabinet Pluridisciplinaire à Sceaux</h1>
            <p className="home-text06">
              Découvrez notre cabinet pluridisciplinaire à Sceaux,
              l&apos;endroit parfait pour établir votre pratique de santé. Notre
              espace moderne offre une variété de bureaux équipés pour les
              professionnels de la santé, des psychologues aux thérapeutes en
              passant par les experts en bien-être.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <p>
              Avec un emplacement central dans la ville de Sceaux, vos patients
              auront un accès facile à votre cabinet. Nous nous engageons à
              créer un environnement accueillant et fonctionnel pour votre
              travail. Réservez dès aujourd&apos;hui pour offrir à vos patients
              le meilleur de la santé et du bien-être.
            </p>
          </div>
          <img alt="image" src="/photo-2-1200w.jpg" className="home-image" />
        </section>
        <section className="home-features">
          <h2 id="avantages" className="home-text08 H2">
            <span>Les avantages du cabinet</span>
            <br></br>
          </h2>
          <div className="home-container2">
            <FeatureCard
              title="Équipements de Notre Cabinet"
              description="Notre cabinet pluridisciplinaire à Sceaux est équipé pour répondre à vos besoins professionnels. Vous trouverez des espaces de consultation confortables, une cuisine bien équipée pour vos pauses, ainsi que des toilettes modernes pour votre confort."
              rootClassName="rootClassName"
            ></FeatureCard>
            <FeatureCard
              title="Espace de Consultation Polyvalent"
              description="Notre espace de consultation est conçu pour accueillir des professionnels de toutes disciplines. Que vous soyez médecin, psychologue, thérapeute, ou expert en bien-être, nos bureaux sont adaptés à votre pratique indépendante. Personnalisez votre espace pour répondre à vos besoins spécifiques."
              rootClassName="rootClassName3"
            ></FeatureCard>
            <FeatureCard
              title="Situation Idéale à Sceaux"
              description="Notre cabinet est stratégiquement situé au cœur de Sceaux, offrant un accès facile à vos patients. Vous bénéficierez de la proximité des transports en commun, de commerces locaux, et d'un environnement paisible propice à la consultation. La localisation idéale pour votre pratique."
              rootClassName="rootClassName2"
            ></FeatureCard>
            <FeatureCard
              title="Professions Adaptées au Cabinet"
              description="Les professionnels de la santé, psychologues, psychiatres, thérapeutes, nutritionnistes, coachs, et bien d'autres peuvent exercer dans notre cabinet pluridisciplinaire. Nous favorisons la diversité des pratiques pour offrir à nos locataires une communauté riche en connaissances et en opportunités de collaboration."
              rootClassName="rootClassName1"
            ></FeatureCard>
          </div>
        </section>
        <div id="gallery" className="home-gallery">
          <GalleryCard1
            image_src="/photo-2022-09-29-11-01-03%202-1500w.png"
            rootClassName="rootClassName"
          ></GalleryCard1>
          <GalleryCard1
            image_src="/photo-2022-09-29-11-01-03%204-1500w.png"
            rootClassName="rootClassName1"
          ></GalleryCard1>
          <GalleryCard1
            image_src="/photo-2022-09-29-11-01-03%206-1500w.png"
            rootClassName="rootClassName2"
          ></GalleryCard1>
          <GalleryCard1
            image_src="/photo-2022-09-29-11-01-03%203-1500h.png"
            rootClassName="rootClassName3"
          ></GalleryCard1>
          <GalleryCard1
            image_src="/photo-2022-09-29-11-01-03%205-1500h.png"
            rootClassName="rootClassName4"
          ></GalleryCard1>
          <GalleryCard1
            image_src="/photo-2022-09-29-11-01-03%205-1500h.png"
            rootClassName="rootClassName5"
          ></GalleryCard1>
        </div>
        <section id="tarifs" className="home-container3">
          <h2 className="H2">
            <span>
              Tarifs de Location de Bureaux Pluridisciplinaires à Sceaux
            </span>
            <br className="H2"></br>
          </h2>
          <span>
            <span>
              Tarif à la Demi-journée : 40 € pour une demi-journée de 6 heures,
              incluant les charges, soit 175 € par mois, toutes charges
              comprises pour une demi-journée de 6h par semaine.
            </span>
            <br></br>
            <br></br>
            <span>
              {' '}
              Les consultations sont disponibles en matinée jusqu&apos;à 13h45,
              l&apos;après-midi à partir de 14h00.
            </span>
            <br></br>
            <br></br>
            <span>
              Profitez de nos tarifs compétitifs pour louer un espace dans notre
              cabinet pluridisciplinaire à Sceaux et assurez-vous de disposer
              d&apos;un lieu de travail fonctionnel et abordable pour développer
              votre activité. Pour plus d&apos;informations ou pour réserver un
              espace, contactez-nous dès aujourd&apos;hui.
            </span>
            <br></br>
          </span>
        </section>
        <section id="contact" className="home-container4">
          <h1 className="H2">
            <span>Contact</span>
            <br></br>
          </h1>
          <p>
            Pour toute information, nous vous invitons à nous contacter par téléphone ou par email.
          </p>
          <img src="/mail.png" alt="email adress"/>
        </section>
        <div className="home-container5">
          <footer className="home-footer mx-auto">
            <p className="home-text25">
              © 2023 SCI DEVAUX, tous droits réservés.
            </p>

          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .home-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link1 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link2 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-contact {
            text-decoration: none;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo {
            height: 2rem;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text01 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text02 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text03 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text04 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-buttons1 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            min-height: 60vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container1 {
            width: 759px;
            height: 425px;
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-text05 {
            width: 100%;
            font-size: 36px;
            max-width: auto;
            font-family: Open Sans;
            font-weight: 700;
            line-height: 1.15;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: none;
            text-decoration: none;
          }
          .home-text06 {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-image {
            width: 509px;
            height: 339px;
            object-fit: cover;
          }
          .home-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .home-text08 {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .home-gallery {
            width: 100%;
            display: grid;
            padding: var(--dl-space-space-threeunits);
            grid-gap: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-container3 {
            width: var(--dl-size-size-maxwidth);
            height: auto;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container4 {
            width: var(--dl-size-size-maxwidth);
            height: auto;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container5 {
            flex: 1;
            width: 100%;
            height: 91px;
            display: flex;
            align-items: flex-start;
            background-color: #d9d9d9;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          @media (max-width: 1600px) {
            .home-navbar-interactive {
              background-color: #e5df97;
            }
            .home-hero {
              height: 537px;
              padding-bottom: 0px;
            }
            .home-image {
              width: 562px;
              height: 374px;
            }
          }
          @media (max-width: 1200px) {
            .home-hero {
              padding: var(--dl-space-space-threeunits);
              min-height: 60vh;
            }
            .home-image {
              width: 497px;
              height: 438px;
            }
            .home-features {
              padding-top: 0px;
            }
            .home-container3 {
              width: 100%;
            }
            .home-container4 {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            .home-hero {
              height: auto;
              flex-direction: column;
            }
            .home-container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-gallery {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text01 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text02 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text03 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text04 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-hero {
              height: auto;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container1 {
              height: auto;
            }
            .home-image {
              width: 80%;
            }
            .home-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container2 {
              grid-template-columns: 1fr;
            }
            .home-gallery {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container3 {
              width: 100%;
            }
            .home-container4 {
              width: 100%;
            }
            .home-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text25 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              padding: var(--dl-space-space-unit);
              padding-right: 16px;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-hero {
              height: auto;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container1 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text05 {
              font-size: 30px;
            }
            .home-image {
              width: 453px;
            }
            .home-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-gallery {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-text25 {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
