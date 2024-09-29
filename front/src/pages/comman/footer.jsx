import { Link } from "react-router-dom";

const footer =()=>{
    
    return (
        <>
         <footer id="footer" class="footer style-2">
                <div class="footer-wrap">
                    <div class="footer-body">
                        <div class="tf-container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="footer-body-wrap flex justify-between">
                                        <div class="footer-more-infor">
                                            <div class="footer-logo" style={{visibility: 'hidden'}}>
                                                <a href="#">
                                                    <img src="images/logo/logo.svg" alt="" />
                                                </a>
                                            </div>
                                            <p class="pb-3">MD Digital Duniyaa Pvt. Ltd. is a leading digital solutions company dedicated to 
                                                empowering youth by providing digital income opportunities through skill development courses and classes.</p>
                                            <ul class="tf-social-icon flex items-center gap-10 pt-3">
                                                <li>
                                                    <a href="#"><i class="flaticon-facebook-1"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="icon-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="flaticon-instagram"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="flaticon-linkedin-1"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="footer-menu-list">
                                            <h5 class="fw-5">Company</h5>
                                            <ul>
                                                <li><a href="#">About</a></li>
                                                <li><a href="#">Contact us</a></li>
?
                                            </ul>
                                        </div>
                                        <div class="footer-menu-list">
                                            <h5 class="fw-5">Useful Links</h5>
                                            <ul>
                                                <li><Link to={'/disclaimer'}>Disclaimer Refund Policy</Link> </li>
                                                
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <div class="tf-container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="footer-bottom-wrap flex justify-center items-center">
                                        <p>© 2024 DigitalDuniyaa.in (A Unit of MD Digital Duniyaa Pvt. Ltd.). All Rights Reserved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default footer;