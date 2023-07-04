/** @format */

import React from "react";
import Image from "next/image";
import styles from "../Footer/sytles.module.css"
import facebook from "../../public/assets/svg/Facebook.svg";
import Linkedin from "../../public/assets/svg/Linkedin.svg";
import Instagram from "../../public/assets/svg/Instagram.svg";
import Link from "next/link";


function Footer() {
    return (
        <footer className={styles.outermostfooter}>
            <div className={styles.footer} aria-labelledby='footer-heading'>
                <div className={styles.mainContainer}>
                    <div className={styles.parentWraper}>
                        {/* 1 */}
                        <div className={styles.firstDiv}>
                            <div className={styles.firstDivWraper}>
                                <div className='mb-[10px]'>
                                    <ul role='list' className={styles.unorderList}>
                                        <li className={styles.footerMainLinks}>
                                            <Link href='/findSitter'>Find a sitter</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='pb-[10px]'>
                                    <ul role='list' className={styles.unorderList}>
                                        <li className={styles.footerMainLinks}>
                                            <Link href='/findHouse'>Find a house</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3 className={styles.footerMainLinks}>Discover</h3>
                            <ul role='list' className={styles.unorderList}>
                                <li className={styles.footerLinks}>
                                    <div role="button" >Reserve for Others</div>
                                </li>
                                <li className={styles.footerLinks}>
                                    <a href='https://www.opentable.com.au/nearby' title='Restaurants near me'>Restaurants near me</a>
                                </li>
                                <li className={styles.footerLinks}>
                                    <a href='https://www.opentable.com.au/delivery' title='Delivery near me'>Delivery near me</a>
                                </li>
                                <li className={styles.footerLinks}>
                                    <a href='https://www.opentable.com.au/open' title='Restaurants Open Now'>Restaurants Open Now</a>
                                </li>
                            </ul>

                        </div>
                        {/* 2 */}
                        <div className={styles.secondDiv}>
                            <div className={styles.secondDivWraper}>
                                <div className=''>
                                    <h3 className={styles.footerMainLinks}>
                                        <Link href='/index'>OpenTable</Link>
                                    </h3>
                                    <ul role='list' className={styles.unorderList}>
                                        <li className={styles.footerLinks}>
                                            <div role="button" >About Us</div>
                                        </li>
                                        <li className={styles.footerLinks}>
                                            <div role="button" >Careers</div>
                                        </li>
                                        <li className={styles.footerLinks}>
                                            <div role="button" >Press</div>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            {/* 3 */}
                            <div className={styles.thirdDiv}>
                                <h3 className={styles.footerMainLinks}>More</h3>
                                <ul role='list' className={styles.unorderList}>
                                    <li className={styles.footerLinks}>
                                        <a href='https://app.adjust.com/gh97ibu?redirect=https://itunes.apple.com/app/id296581815?mt=8' title='OpenTable for iOS'>OpenTable for iOS</a>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <a href='https://app.adjust.com/dk33pts?redirect=https://play.google.com/store/apps/details?id=com.opentable' title='OpenTable for Android'>OpenTable for Android</a>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <div role="button" >Affiliate Program</div>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <div role="button" >Contact Us</div>
                                    </li>
                                </ul>

                            </div>
                            {/* 4 */}
                            <div className={styles.thirdDiv}>
                                <h3 className={styles.footerMainLinks}>Our Sites</h3>
                                <ul role='list' className={styles.unorderList}>
                                    <li className={styles.footerLinks}>
                                        <a href='https://www.opentable.jp' title='OpenTable.jp'>OpenTable.jp</a>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <a href='https://www.opentable.de' title='OpenTable.de'>OpenTable.de</a>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <a href='https://www.opentable.es' title='OpenTable.es'>OpenTable.es</a>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <a href='https://www.opentable.ca' title='OpenTable.ca'>OpenTable.ca</a>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <a href='https://www.opentable.hk' title='OpenTable.hk'>OpenTable.hk</a>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <a href='https://www.opentable.ie' title='OpenTable.ie'>OpenTable.ie</a>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <a href='https://www.opentable.sg' title='OpenTable.sg'>OpenTable.sg</a>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <a href='https://www.opentable.nl' title='OpenTable.nl'>OpenTable.nl</a>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <a href='https://www.opentable.com.mx' title='OpenTable.com.mx'>OpenTable.com.mx</a>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <a href='https://www.opentable.co.uk' title='OpenTable.co.uk'>OpenTable.co.uk</a>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <a href='https://www.opentable.ae' title='OpenTable.ae'>OpenTable.ae</a>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <a href='https://www.opentable.co.th' title='OpenTable.co.th'>OpenTable.co.th</a>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <a href='https://www.opentable.it' title='OpenTable.it'>OpenTable.it</a>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <a href='https://www.opentable.com.tw' title='OpenTable.com.tw'>OpenTable.com.tw</a>
                                    </li>
                                </ul>

                            </div>
                            {/* 5 */}
                            <div className={styles.thirdDiv}>
                                <h3 className={styles.footerMainLinks}>Business</h3>
                                <ul role='list' className={styles.unorderList}>

                                    <li className={styles.footerLinks}>
                                        <div role="button" >Delight more diners</div>
                                    </li>
                                    <li className={styles.footerLinks}>
                                        <div role="button" className="lowercases  font-bold" >Join us Now </div>
                                    </li>

                                    <div className='my-[28px]'>
                                        <h3 className={styles.footerMainLinks}>Follow Us</h3>
                                        <ul role='list' className={styles.unorderList}>
                                            <div className=' flex'>
                                                <span className='pr-4 xl:pr-[29px]'>
                                                    <Image src={facebook} alt='facebook' />
                                                </span>
                                                <span className='pr-4 xl:pr-[29px]'>
                                                    <Image src={Linkedin} alt='linkedin' />
                                                </span>
                                                <span className='pr-4 xl:pr-[29px]'>
                                                    <Image src={Instagram} alt='instagram' />
                                                </span>
                                            </div>
                                        </ul>
                                    </div>
                                </ul>
                            </div>

                        </div>
                        <div className={styles.largeButtonWraper}>

                        </div>
                    </div>
                    <div className={styles.copyrightsWraper}>
                        <div className={styles.line}></div>
                        <div className={styles.copyrighttextWraper}>
                            <p className={styles.copyrighttext}>
                                &copy; &nbsp; Copyright 2023, Happy House Sitters
                            </p>
                            <p className={styles.copyrighttext}>ABN: 47 046 784 798</p>
                        </div>
                        <div className={styles.smallButtonWraper}>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
