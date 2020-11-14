import React from 'react';
import './Footer.css'

const Footer = (props) => {

    let additional_class = '';

    if(props.additional_class !== undefined) additional_class = props.additional_class;

    return (
        <footer className={`footer ${additional_class}`}>
            <div className={'footer-content'}>
                <div className={'footer-copyright'}>
                    © 2020 COVID-LAB Sp. z o.o.
                </div>
                <ul className={'footer-links'}>

                    <li className={'footer-links-item'}>
                        <a href={'https://www.onet.pl'}> Newsletter </a>
                    </li>

                    <li className={'footer-links-item'}>
                        <a href={'https://www.onet.pl'}> Regulamin </a>
                    </li>

                    <li className={'footer-links-item'}>
                        <a href={'https://www.onet.pl'}> Pomoc </a>
                    </li>

                </ul>
            </div>

        </footer>
    )

};




export default Footer;
