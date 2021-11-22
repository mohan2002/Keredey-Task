import React from 'react'
import "./Styles/Footer.css"
import playstore from "../Assets/playstore_en.52ebe950.svg"
import appstore from "../Assets/appstore_white_en.f11cfc14.svg"

function Footer() {
    return (
        <div className="footercompe">
            <div className="footer-content">
                <div className="right-footer">
                    <div className="one">
                        <h1 className="heading-footer">About</h1>
                        <p>About Scribd</p>
                        <p>Press</p>
                        <p>Our blog</p>
                        <p>Join our team!</p>
                        <p>Contact us</p>
                        <p>Invite friends</p>
                        <p>Gifts</p>
                        <p>Scribd for enterprise</p>
                    </div>
                    <div className="two">
                        <h1 className="heading-footer">Support</h1>
                        <p>Help / FAQ</p>
                        <p>Accessibility</p>
                        <p>Purchase help</p>
                        <p>AdChoices</p>
                        <p>Publishers</p>
                    </div>
                    <div className="three">
                        <h1 className="heading-footer">Legal</h1>
                        <p>Terms</p>
                        <p>Privacy</p>
                        <p>Copyright</p>
                        <p>Cookie Preferences</p>
                    </div>
                    <div className="four">
                        <h1 className="heading-footer">Social</h1>
                        <div className="socials">
                            <i class="fab fa-instagram"></i>
                            <p>Instagram</p>
                        </div>
                        <div className="socials">
                            <i class="fab fa-twitter"></i>
                            <p>Twitter</p>
                        </div>
                        <div className="socials">
                            <i class="fab fa-facebook"></i>
                            <p>Facebook</p>
                        </div>
                        <div className="socials">
                            <i class="fab fa-pinterest"></i>
                            <p>Pinterest</p>
                        </div>
                    </div>
                </div>

                <div className="left-con">
                    <p>Get our free apps</p>
                    <img src={playstore}/>
                    <img src={appstore}/>
                </div>
            </div>

            <div className="footer-down">
                <div className="footer-list">
                    <li>Books</li>
                    <li>Audiobooks</li>
                    <li>Magazines</li>
                    <li>Podcasts</li>
                    <li>Sheet Music</li>
                    <li>Documents</li>
                    <li>Snapshots</li>
                    <li>Directory</li>

                </div>
                <div className="footer-disc">
                    <p>Language: English</p>
                    <p>Copyright © 2021 Scribd Inc.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
