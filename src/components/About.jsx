import Footer from "./Footer";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>

            <nav className='navbar'>
                            <div id='nav_left'>
                                <img src='../../images/logo.jpg' alt="logo" />
                            </div>

                            <div id='nav_right'>
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                </ul>
                            </div>
            </nav>
            
            <div className="about">
                <div id="about_left">
                    <h2>About Khuai Lok</h2>
                    <p className="comic-neue-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequatur quasi possimus maxime facilis quisquam deserunt perspiciatis beatae rerum repellat rem, quo pariatur earum cumque laboriosam, hic dicta dolorum nostrum quibusdam, odit dolores numquam? Possimus ullam ea pariatur veritatis, asperiores harum corporis dolore aspernatur veniam amet, sunt quis eligendi culpa.</p>

                    <p className="comic-neue-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique maiores itaque sunt adipisci consequuntur veritatis, fugiat, libero quam temporibus quod magnam et nam corporis soluta commodi impedit nihil quos aliquam tenetur enim pariatur deleniti sint nobis ducimus. Porro, sequi necessitatibus.</p>
                </div>

                <div id="about_right" style={{ width: "300px", height: "300px" }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31775.212552652436!2d105.24266544113097!3d-5.431919901024549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40da56ec42bd3d%3A0x12487b9082df1e1b!2sRumah%20Makan%20Khuailok%20(%20Happiness%20)!5e0!3m2!1sen!2sid!4v1725282290395!5m2!1sen!2sid"
                        width="100%"
                        height="100%"
                        style={{ border: "0", borderRadius: "10px" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <p id="below_map">*this is the real Khuailok btw, the displayed menus are real, except the images</p>
                </div>
            </div>

            <div className="after_about">

                <div id="after_about_left">
                    <img src="../../public/images/cooking.jpg" alt="" />
                    <p>Source: <a href="https://www.freepik.com/free-photo/cooking-process-asian-restaurant-cook-is-fry-vegetables-with-spices-sauce-wok_28638252.htm#fromView=search&page=1&position=6&uuid=77131429-7810-46fd-88fc-f094b4861c1c">Image by fxquadro on Freepik</a></p>
                </div>

                <div id="after_about_right">
                    <h2>Cooked with passion</h2>

                    <p className="comic-neue-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est labore ratione assumenda quidem consequatur ea quos aliquid excepturi praesentium! Quod officiis ab vero necessitatibus assumenda maiores corporis culpa repellendus ipsum.</p>

                    <p className="comic-neue-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta officiis obcaecati sint inventore. Ex impedit autem ad delectus molestias. Autem fugiat dolorum nemo eaque ratione possimus, pariatur iure? Veritatis, ab!</p>
                </div>  

            </div>

            <Footer />
        </>
    );
};

export default About;