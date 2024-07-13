import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './FAB.png';
import PropTypes from 'prop-types'
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import reportWebVitals from './reportWebVitals';
const Navbar = (props) => {
  const scrollToFeature = () => {
    document.getElementById("features").scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById("contact-section").scrollIntoView({ behavior: 'smooth' });
  };
  return (
    React.createElement('header', { className: "navbar-container",}
      , React.createElement('header', { 'data-thq': "thq-navbar", className: "navbar-navbar-interactive",}
        , React.createElement('img', {
          alt: props.logoAlt,
          src: props.logoSrc,
          className: "navbar-image1",}
        )
        , React.createElement('div', { 'data-thq': "thq-navbar-nav", className: "navbar-desktop-menu",}
          , React.createElement('nav', { className: "navbar-links",}
            , React.createElement('span', { className: "thq-link thq-body-small" ,}, props.link1)
            , React.createElement('span', { className: "thq-link thq-body-small" , onClick: scrollToFeature}, props.link2)
            , React.createElement('span', { className: "thq-link thq-body-small" , onClick: scrollToContact}, props.link4)
          )
        )
        , React.createElement('div', { 'data-thq': "thq-burger-menu", className: "navbar-burger-menu",}
          , React.createElement('svg', { viewBox: "0 0 1024 1024"   , className: "navbar-icon",}
            , React.createElement('path', { d: "M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"                              ,})
          )
        )
        , React.createElement('div', { 'data-thq': "thq-mobile-menu", className: "navbar-mobile-menu",}
          , React.createElement('div', { className: "navbar-nav",}
            , React.createElement('div', { className: "navbar-top",}
              , React.createElement('img', {
                alt: props.logoAlt,
                src: props.logoSrc,
                className: "navbar-logo",}
              )
              , React.createElement('div', { 'data-thq': "thq-close-menu", className: "navbar-close-menu",}
                , React.createElement('svg', { viewBox: "0 0 1024 1024"   , className: "navbar-icon2",}
                  , React.createElement('path', { d: "M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"           ,})
                )
              )
            )
            , React.createElement('nav', { className: "navbar-links1",}
              , React.createElement('span', { className: "thq-link thq-body-small" ,}, props.link1)
              , React.createElement('span', { className: "thq-link thq-body-small" ,}, props.link2)
              , React.createElement('span', { className: "thq-link thq-body-small" ,}, props.link4)
            )
          )
          , React.createElement('div', { className: "navbar-buttons1",}
            , React.createElement('button', { className: "thq-button-filled",}
              , props.action1, "Login"

            )
            , React.createElement('button', { className: "thq-button-outline",}
              , props.action2, "Register"

            )
          )
        )
      )
    )
  )
};

Navbar.defaultProps = {
  link1: 'Acceuil',
  link2: 'Services',
  link4: 'Contact',
  logoSrc: logo,
  logoAlt: 'FAB PropriÃ©tÃ© Multi Service',
    action1: '/',
    action2: '/services',
};

Navbar.propTypes = {
  link1: PropTypes.string,
  link5: PropTypes.string,
  link2: PropTypes.string,
  logoSrc: PropTypes.string,
  action2: PropTypes.string,
  logoAlt: PropTypes.string,
  link3: PropTypes.string,
  action1: PropTypes.string,
  link4: PropTypes.string,
};

const Hero = (props) => {
  return (
    React.createElement('div', { className: "hero-header78",}
      , React.createElement('div', { className: "hero-column thq-section-padding thq-section-max-width"  ,}
        , React.createElement('div', { className: "hero-content",}
          , React.createElement('h1', { className: "hero-text thq-heading-1" ,}, props.heading1)
          , React.createElement('p', { className: "hero-text1 thq-body-large" ,}, props.content1)
        )
        , React.createElement('div', { className: "hero-actions",}
          , React.createElement('button', { className: "thq-button-filled hero-button" ,}
            , React.createElement('span', { className: "thq-body-small",}, props.action1)
          )
          , React.createElement('button', { className: "thq-button-outline hero-button1" ,}
            , React.createElement('span', { className: "thq-body-small",}, props.action2)
          )
        )
      )
      , React.createElement('div', { className: "hero-content1",}
        , React.createElement('div', { className: "hero-row-container thq-animated-group-container-horizontal thq-mask-image-horizontal"  ,}
          , React.createElement('div', { className: "thq-animated-group-horizontal",}
            , React.createElement('img', {
              alt: props.image1Alt,
              src: props.image1Src,
              className: "hero-placeholder-image thq-img-scale thq-img-ratio-1-1"  ,}
            )
            , React.createElement('img', {
              alt: props.image2Alt,
              src: props.image2Src,
              className: "hero-placeholder-image01 thq-img-scale thq-img-ratio-1-1"  ,}
            )
            , React.createElement('img', {
              alt: props.image3Alt,
              src: props.image3Src,
              className: "hero-placeholder-image02 thq-img-scale thq-img-ratio-1-1"  ,}
            )
            , React.createElement('img', {
              alt: props.image4Alt,
              src: props.image4Src,
              className: "hero-placeholder-image03 thq-img-scale thq-img-ratio-1-1"  ,}
            )
            , React.createElement('img', {
              alt: props.image5Alt,
              src: props.image5Src,
              className: "hero-placeholder-image04 thq-img-scale thq-img-ratio-1-1"  ,}
            )
            , React.createElement('img', {
              alt: props.image6Alt,
              src: props.image6Src,
              className: "hero-placeholder-image05 thq-img-scale thq-img-ratio-1-1"  ,}
            )
          )
          , React.createElement('div', { className: "thq-animated-group-horizontal",}
            , React.createElement('img', {
              alt: props.image1Alt,
              src: props.image1Src,
              className: "hero-placeholder-image06 thq-img-scale thq-img-ratio-1-1"  ,}
            )
            , React.createElement('img', {
              alt: props.image2Alt,
              src: props.image2Src,
              className: "hero-placeholder-image07 thq-img-scale thq-img-ratio-1-1"  ,}
            )
            , React.createElement('img', {
              alt: props.image3Alt,
              src: props.image3Src,
              className: "hero-placeholder-image08 thq-img-scale thq-img-ratio-1-1"  ,}
            )
            , React.createElement('img', {
              alt: props.image4Alt,
              src: props.image4Src,
              className: "hero-placeholder-image09 thq-img-scale thq-img-ratio-1-1"  ,}
            )
            , React.createElement('img', {
              alt: props.image5Alt,
              src: props.image5Src,
              className: "hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"  ,}
            )
            , React.createElement('img', {
              alt: "Hero Image" ,
              src: "https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500",
              className: "hero-placeholder-image11 thq-img-scale thq-img-ratio-1-1"  ,}
            )
          )
        )
        , React.createElement('div', { className: "hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal"  ,}
          , React.createElement('div', { className: "thq-animated-group-horizontal-reverse",}
            , React.createElement('img', {
              alt: props.image7Alt,
              src: props.image7Src,
              className: "hero-placeholder-image12 thq-img-scale thq-img-ratio-1-1"  ,}
            )
            , React.createElement('img', {
              alt: props.image8Alt,
              src: props.image8Src,
              className: "hero-placeholder-image13 thq-img-scale thq-img-ratio-1-1"  ,}
            )
            , React.createElement('img', {
              alt: props.image9Alt,
              src: props.image9Src,
              className: "hero-placeholder-image14 thq-img-scale thq-img-ratio-1-1"  ,}
            )
            , React.createElement('img', {
              alt: props.image10Alt,
              src: props.image10Src,
              className: "hero-placeholder-image15 thq-img-scale thq-img-ratio-1-1"  ,}
            )
            , React.createElement('img', {
              alt: props.image11Alt,
              src: props.image11Src,
              className: "hero-placeholder-image16 thq-img-scale thq-img-ratio-1-1"  ,}
            )
            , React.createElement('img', {
              alt: props.image12Alt,
              src: props.image12Src,
              className: "hero-placeholder-image17 thq-img-scale thq-img-ratio-1-1"  ,}
            )
          )
          , React.createElement('div', { className: "thq-animated-group-horizontal-reverse",}
            , React.createElement('img', {
              alt: props.image7Alt,
              src: props.image7Src,
              className: "hero-placeholder-image18 thq-img-scale thq-img-ratio-1-1"  ,}
            )
            , React.createElement('img', {
              alt: props.image8Alt,
              src: props.image8Src,
              className: "hero-placeholder-image19 thq-img-scale thq-img-ratio-1-1"  ,}
            )
            , React.createElement('img', {
              alt: props.image9Alt,
              src: props.image9Src,
              className: "hero-placeholder-image20 thq-img-scale thq-img-ratio-1-1"  ,}
            )
            , React.createElement('img', {
              alt: props.image10Alt,
              src: props.image10Src,
              className: "hero-placeholder-image21 thq-img-scale thq-img-ratio-1-1"  ,}
            )
            , React.createElement('img', {
              alt: props.image11Alt,
              src: props.image11Src,
              className: "hero-placeholder-image22 thq-img-scale thq-img-ratio-1-1"  ,}
            )
            , React.createElement('img', {
              alt: "Hero Image" ,
              src: "https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&ixlib=rb-4.0.3&w=1500",
              className: "hero-placeholder-image23 thq-img-scale thq-img-ratio-1-1"  ,}
            )
          )
        )
      )
    )
  )
};

Hero.defaultProps = {
  image3Src:
    'https://images.unsplash.com/photo-1580842402762-6f5868c17412?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  image8Alt: 'Hero Image',
  image2Src:
'https://images.unsplash.com/photo-1686178827149-6d55c72d81df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
  image6Alt: 'Hero Image',
  image11Src:
    'https://images.unsplash.com/photo-1527515673510-8aa78ce21f9b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  image5Alt: 'Hero Image',
  image1Alt: 'Professional Property Management Services',
  image7Src:
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  image7Alt: 'Hero Image',
  image12Alt: 'Hero Image',
  image2Alt: 'Hero Image',
  image6Src:
    'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  image12Src:
    'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  image3Alt: 'Hero Image',
  image9Src:
    'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  image11Alt: 'Hero Image',
  action2: 'En savoir plus',
  action1: 'Contactez nous',
  image8Src:
    'https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  image5Src:
    'https://images.unsplash.com/photo-1482449609509-eae2a7ea42b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  image4Src:
    'https://images.unsplash.com/photo-1421940943431-d392fcc1079f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  image10Alt: 'Hero Image',
  image4Alt: 'Hero Image',
  heading1: 'Bienvenue chez FAB Propriété Multi Service',
  content1: 'Notre spécialité: nettoyage des Vitres, remise en état après travaux, nettoyage des moquettes',
  image10Src:
    'https://images.unsplash.com/photo-1584378834085-0aa159117f9b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  image9Alt: 'Hero Image',
  image1Src:
    'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

Hero.propTypes = {
  image3Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image12Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image11Alt: PropTypes.string,
  action2: PropTypes.string,
  action1: PropTypes.string,
  image8Src: PropTypes.string,
  image5Src: PropTypes.string,
  image4Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  image10Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image1Src: PropTypes.string,
};

const Features1 = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    React.createElement('div', { className: "thq-section-padding", id: "features"}
      , React.createElement('div', { className: "features1-container1 thq-section-max-width" ,}
        , React.createElement('div', { className: "features1-image-container",}
          , activeTab === 0 && (
            React.createElement('img', {
              alt: props.feature1ImgAlt,
              src: props.feature1ImgSrc,
              className: "features1-image thq-img-ratio-16-9" ,}
            )
          )
          , activeTab === 1 && (
            React.createElement('img', {
              alt: props.feature2ImgAlt,
              src: props.feature2ImgSrc,
              className: "features1-image1 thq-img-ratio-16-9" ,}
            )
          )
          , activeTab === 2 && (
            React.createElement('img', {
              alt: props.feature3ImgAlt,
              src: props.feature3ImgSrc,
              className: "features1-image2 thq-img-ratio-16-9" ,}
            )
          )
        )
        , React.createElement('div', { className: "features1-tabs-menu",}
          , React.createElement('div', {
            onClick: () => setActiveTab(0),
            className: "features1-tab-horizontal",}

            , React.createElement('div', { className: "features1-divider-container",}
              , activeTab === 0 && React.createElement('div', { className: "features1-container2",})
            )
            , React.createElement('div', { className: "features1-content",}
              , React.createElement('h2', { className: "thq-heading-2",}, props.feature1Title)
              , React.createElement('span', { className: "thq-body-small",}
                , props.feature1Description
              )
            )
          )
          , React.createElement('div', {
            onClick: () => setActiveTab(1),
            className: "features1-tab-horizontal1",}

            , React.createElement('div', { className: "features1-divider-container1",}
              , activeTab === 1 && React.createElement('div', { className: "features1-container3",})
            )
            , React.createElement('div', { className: "features1-content1",}
              , React.createElement('h2', { className: "thq-heading-2",}, props.feature2Title)
              , React.createElement('span', { className: "thq-body-small",}
                , props.feature2Description
              )
            )
          )
          , React.createElement('div', {
            onClick: () => setActiveTab(2),
            className: "features1-tab-horizontal2",}

            , React.createElement('div', { className: "features1-divider-container2",}
              , activeTab === 2 && React.createElement('div', { className: "features1-container4",})
            )
            , React.createElement('div', { className: "features1-content2",}
              , React.createElement('h2', { className: "thq-heading-2",}, props.feature3Title)
              , React.createElement('span', { className: "thq-body-small",}
                , props.feature3Description
              )
            )
          )
        )
      )
    )
  )
};

Features1.defaultProps = {

  feature1Title: 'Personnel Expérimenté',
  feature1Description:
    'Notre équipe se compose de professionnels expérimentés dédiés à fournir des services de premier ordre.',
    feature1ImgAlt: 'Professional Team',
    feature1ImgSrc:
      'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
    
    feature3Title: 'Assurance Qualité',
    feature3ImgSrc:
    'https://images.unsplash.com/photo-1524803504179-6d7ae4d283f7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
    feature3ImgAlt: 'Quality Assurance Image',
    feature3Description: 'Services de Haute Qualité',
  
  
};

Features1.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Title: PropTypes.string,
};

const CTA = (props) => {
  const scrollToSection = () => {
    document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    React.createElement('div', { className: "thq-section-padding" },
      React.createElement('div', { className: "thq-section-max-width" },
        React.createElement('div', { className: "cta-accent2-bg" },
          React.createElement('div', { className: "cta-accent1-bg" },
            React.createElement('div', { className: "cta-container1" },
              React.createElement('div', { className: "cta-content" },
                React.createElement('span', { className: "thq-heading-2" }, props.heading1),
                React.createElement('p', { className: "thq-body-large" }, props.content1)
              ),
              React.createElement('div', { className: "cta-actions" },
                React.createElement('button', {
                  type: "button",
                  className: "thq-button-filled cta-button",
                  onClick: scrollToSection
                }, props.action1)
              )
            )
          )
        )
      )
    )
  );
};

CTA.defaultProps = {
  heading1: 'Contactez-nous dès aujourd\'hui',
  content1: 'Contactez-nous pour une consultation et laissez-nous vous aider avec tous vos besoins en gestion immobilière.',
  action1: 'Contactez-Nous',
};

CTA.propTypes = {
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
};







const Steps = (props) => {
  const scrollToSection = () => {
    document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    React.createElement('div', { className: "steps-container thq-section-padding" ,}
      , React.createElement('div', { className: "steps-max-width thq-section-max-width" ,}
        , React.createElement('div', { className: "steps-container1 thq-grid-2" ,}
          , React.createElement('div', { className: "steps-section-header",}
            , React.createElement('h2', { className: "thq-heading-2",}, "Découvrez la Puissance de Nos Produits"

            )
            , React.createElement('p', { className: "thq-body-large",}, "Découvrez comment nos produits peuvent transformer vos opérations. Que ce soit pour la gestion immobilière ou pour les services de nettoyage, nous offrons des solutions innovantes et efficaces adaptées à vos besoins. Faites confiance à notre expertise pour améliorer la qualité et l'efficacité de vos activités."




            )
            , React.createElement('div', { className: "steps-actions",}
              , React.createElement('button', { className: "thq-button-animated thq-button-filled steps-button"  ,}
                , React.createElement('span', { className: "thq-body-small", onClick: scrollToSection}, "Commencer" )
              )
            )
          )
          , React.createElement('div', { className: "steps-container2",}
            , React.createElement('div', { className: "steps-container3 thq-card" ,}
              , React.createElement('h2', { className: "thq-heading-2",}, props.step1Title)
              , React.createElement('span', { className: "steps-text04 thq-body-small" ,}
                , props.step1Description
              )
              , React.createElement('label', { className: "steps-text05 thq-heading-3" ,}, "01")
            )
            , React.createElement('div', { className: "steps-container4 thq-card" ,}
              , React.createElement('h2', { className: "thq-heading-2",}, props.step2Title)
              , React.createElement('span', { className: "steps-text07 thq-body-small" ,}
                , props.step2Description
              )
              , React.createElement('label', { className: "steps-text08 thq-heading-3" ,}, "02")
            )
            , React.createElement('div', { className: "steps-container5 thq-card" ,}
              , React.createElement('h2', { className: "thq-heading-2",}, props.step3Title)
              , React.createElement('span', { className: "steps-text10 thq-body-small" ,}
                , props.step3Description
              )
              , React.createElement('label', { className: "steps-text11 thq-heading-3" ,}, "03")
            )
            , React.createElement('div', { className: "steps-container6 thq-card" ,}
              , React.createElement('h2', { className: "thq-heading-2",}, props.step4Title)
              , React.createElement('span', { className: "steps-text13 thq-body-small" ,}
                , props.step4Description
              )
              , React.createElement('label', { className: "steps-text14 thq-heading-3" ,}, "04")
            )
          )
        )
      )
    )
  )
};

Steps.defaultProps = {
    step1Title: 'Contactez-Nous',
    step1Description:
    'Contactez-nous par téléphone ou par email pour discuter de vos besoins en gestion immobilière.',
    step2Title: 'Consultation',
    step2Description:
    'Planifiez une consultation avec nos experts pour évaluer votre propriété et déterminer les meilleurs services pour vous.',
    step3Title: 'Solutions Personnalisées',
    step3Description:
      'Recevez des recommandations personnalisées et des solutions adaptées à vos besoins en gestion immobilière.',
      step4Title: 'Service Professionnel',
    step4Description:
    'Faites l\'expérience de services de gestion immobilière de premier ordre délivrés par notre équipe qualifiée.',
};

Steps.propTypes = {
  step1Description: PropTypes.string,
  step3Description: PropTypes.string,
  step2Title: PropTypes.string,
  step2Description: PropTypes.string,
  step1Title: PropTypes.string,
  step3Title: PropTypes.string,
  step4Description: PropTypes.string,
  step4Title: PropTypes.string,
};



const Contact = (props) => {
  return (
    React.createElement('div', { className: "contact-contact20 thq-section-padding" , id: "contact-section"}
      , React.createElement('div', { className: "contact-max-width thq-section-max-width" ,}
        , React.createElement('div', { className: "contact-section-title",}
          , React.createElement('span', { className: "thq-body-small",}, props.content2)
          , React.createElement('div', { className: "contact-content",}
            , React.createElement('h2', { className: "thq-heading-2",}, props.heading1)
            , React.createElement('p', { className: "contact-text2 thq-body-large" ,}, props.content1)
          )
        )
        , React.createElement('div', { className: "contact-row",}
          , React.createElement('div', { className: "contact-content1",}
            , React.createElement('svg', { viewBox: "0 0 1024 1024"   , className: "thq-icon-medium",}
              , React.createElement('path', { d: "M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"             ,})
            )
            , React.createElement('div', { className: "contact-contact-info",}
              , React.createElement('div', { className: "contact-content2",}
                , React.createElement('h3', { className: "contact-text3 thq-heading-3" ,}, "Email")
                , React.createElement('p', { className: "contact-text4 thq-body-large" ,}, props.content3)
              )
              , React.createElement('span', { className: "contact-email thq-body-small" ,}
                , props.email1
              )
            )
          )
          , React.createElement('div', { className: "contact-content3",}
            , React.createElement('svg', { viewBox: "0 0 1024 1024"   , className: "thq-icon-medium",}
              , React.createElement('path', { d: "M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"                             ,})
            )
            , React.createElement('div', { className: "contact-contact-info1",}
              , React.createElement('div', { className: "contact-content4",}
                , React.createElement('h3', { className: "contact-text5 thq-heading-3" ,}, "Phone")
                , React.createElement('p', { className: "contact-text6 thq-body-large" ,}, props.content4)
              )
              , React.createElement('span', { className: "contact-phone thq-body-small" ,}
                , props.phone1
              )
            )
          )
          , React.createElement('div', { className: "contact-content5",}
            , React.createElement('svg', { viewBox: "0 0 1024 1024"   , className: "thq-icon-medium",}
              , React.createElement('path', { d: "M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"                    ,})
            )
            , React.createElement('div', { className: "contact-contact-info2",}
              , React.createElement('div', { className: "contact-content6",}
                , React.createElement('h3', { className: "contact-text7 thq-heading-3" ,}, "Office")
                , React.createElement('p', { className: "contact-text8 thq-body-large" ,}, props.content5)
              )
              , React.createElement('span', { className: "contact-address thq-body-small" ,}
                , props.address1
              )
            )
          )
        )
      )
    )
  )
};

Contact.defaultProps = {
  content2:
    'N\'hésitez pas à nous contacter par email ou téléphone pendant nos heures d\'ouverture.',
  email1: 'fab.multiserv@gmail.com',
  address1: '110 avenue Colgate 13009 Marseille',
  content3:
    'Notre bureau est idéalement situé au cœur de la ville, ce qui facilite votre visite.',
  content1:
    'Nous sommes là pour vous aider avec tous vos besoins en gestion immobilière. Contactez-nous pour toute question ou pour planifier une consultation.',
  content4:
    'Laissez-nous vous aider à gérer vos propriétés de manière efficace et efficiente.',
  heading1: 'Contactez-Nous',
  content5: 'Nous avons hâte de vous entendre !',
  phone1: '+33 633 29 24 81',
};

Contact.propTypes = {
  content2: PropTypes.string,
  email1: PropTypes.string,
  address1: PropTypes.string,
  content3: PropTypes.string,
  content1: PropTypes.string,
  content4: PropTypes.string,
  heading1: PropTypes.string,
  content5: PropTypes.string,
  phone1: PropTypes.string,
};

const Footer = (props) => {
  return (
    React.createElement('footer', { className: "footer-footer1 thq-section-padding" ,}
      , React.createElement('div', { className: "footer-max-width thq-section-max-width" ,}
        , React.createElement('div', { className: "footer-content",}
          , React.createElement('div', { className: "footer-newsletter",}
            , React.createElement('img', {
              alt: props.logoAlt,
              src: props.logoSrc,
              className: "footer-image1",
            }
            )

          )
          , React.createElement('div', { className: "footer-links",}
            , React.createElement('div', { className: "footer-column1",}
              , React.createElement('strong', { className: "thq-body-large footer-social-link1-title" ,}
                , props.socialLinkTitleCategory
              )
              , React.createElement('div', { className: "footer-social-links",}
                , React.createElement('div', { className: "footer-link",}
                  , React.createElement('svg', {
                    viewBox: "0 0 877.7142857142857 1024"   ,
                    className: "thq-icon-small",}

                    , React.createElement('path', { d: "M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"                 ,})
                  )
                  , React.createElement('span', { className: "thq-body-small",}, "Facebook")
                )
                , React.createElement('div', { className: "footer-link1",}
                  , React.createElement('svg', {
                    viewBox: "0 0 877.7142857142857 1024"   ,
                    className: "thq-icon-small",}

                    , React.createElement('path', { d: "M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"                                                                                                  ,})
                  )
                  , React.createElement('span', { className: "thq-body-small",}, "Instagram")
                )
                , React.createElement('div', { className: "footer-link2",}
                  , React.createElement('svg', {
                    viewBox: "0 0 950.8571428571428 1024"   ,
                    className: "thq-icon-small",}

                    , React.createElement('path', { d: "M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"                                                                   ,})
                  )
                  , React.createElement('span', { className: "thq-body-small",}, "X")
                )
              )
            )
          )
        )
        , React.createElement('div', { className: "footer-credits",}
          , React.createElement('div', { className: "thq-divider-horizontal",})
          , React.createElement('div', { className: "footer-row",}
            , React.createElement('span', { className: "thq-body-small",}, props.content3)
            , React.createElement('div', { className: "footer-footer-links2",}
              , React.createElement('span', { className: "thq-body-small",}, props.privacyLink)
              , React.createElement('span', { className: "thq-body-small",}, props.termsLink)
              , React.createElement('span', { className: "thq-body-small",}, props.cookiesLink)
            )
          )
        )
      )
    )
  )
};

Footer.defaultProps = {
  logoSrc: logo,
  socialLinkTitleCategory: 'Connectez avec nous',
};
Footer.propTypes = {
  column2Title: PropTypes.string,
  link7: PropTypes.string,
  link5: PropTypes.string,
  link8: PropTypes.string,
  action1: PropTypes.string,
  content3: PropTypes.string,
  link4: PropTypes.string,
  logoSrc: PropTypes.string,
  cookiesLink: PropTypes.string,
  content2: PropTypes.string,
  link9: PropTypes.string,
  link6: PropTypes.string,
  logoAlt: PropTypes.string,
  link1: PropTypes.string,
  privacyLink: PropTypes.string,
  link10: PropTypes.string,
  column1Title: PropTypes.string,
  termsLink: PropTypes.string,
  link3: PropTypes.string,
  link2: PropTypes.string,
  socialLinkTitleCategory: PropTypes.string,
};

const Home = (props) => {
  return (
    React.createElement('div', { className: "home-container",}
      , React.createElement(Helmet, null
        , React.createElement('title', null, "FAB Multi Service"  )
        , React.createElement('meta', { property: "og:title", content: "Bienvenue chez FAB Propriété Multi Service"  ,} )
      )
      , React.createElement('div', { className: "home-navbar",}
        , React.createElement(Navbar, null)
      )
      , React.createElement('div', { className: "home-hero",}
        , React.createElement(Hero, null)
      )
      , React.createElement('div', { className: "home-features1",}
        , React.createElement(Features1, null)
      )
      , React.createElement('div', { className: "home-cta",}
        , React.createElement(CTA, null)
      )
      , React.createElement('div', { className: "home-steps",}
        , React.createElement(Steps, null)
      )
      , React.createElement('div', { className: "home-contact",}
        , React.createElement(Contact, null)
      )
      , React.createElement('div', { className: "home-footer",}
        , React.createElement(Footer, null)
      )
    )
  )
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
