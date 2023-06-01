import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
        <div className="footer__row rowFooter">
        <footer className="footer-section">
        <div className="containerFoo">
            <div className="footer-cta pt-5 pb-5">
                <div className="rowFooter">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Bizning manzil</h4>
                                <span>Sirdaryo, Guliston</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Bog'lanish</h4>
                                <span>+99890 123-45-67</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Elektron manzil</h4>
                                <span>Ibber@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="rowFooter">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="#"><img src="data:image/jpeg;base64,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" className="img-fluid footer__img" alt="Company_logo" /></a>
                            </div>
                         
                            <div className="footer-social-icon">
                                <span>In Social</span>
                                <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i className="fab fa-telegram twitter-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <ul>
               
                                <li><a href="#">Стать курьером</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Грузоперевозки</a></li>
                                <li><a href="#">Отзывы </a></li>
                                <li><a href="#">Экспресс-доставка</a></li>
                                <li><a href="#">Интеграция по API</a></li>
                                <li><a href="#">Блог Достависты</a></li>
                                <li><a href="#">Политика обработки персональных данных </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-iconStores">
                                <img src="https://dostavista.ru/img/ru/mobile-app/appstore.svg" alt="App Store" />
                                <img src="https://dostavista.ru/img/ru/mobile-app/playstore.svg" alt="Google Play" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="containerFoo">
                <div className="rowFooter">
                    <div className="col-xl-12 col-lg-12 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2023, All Right Reserved <a href="/">Futbol</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </div>
    </>
  );
};

export default Footer;
