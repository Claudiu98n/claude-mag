import React from 'react';
import Layout from '../../components/layout/Layout';
import './About.css';

function About() {
    return(
        <div>
            <Layout>
                <div className="about-page container-fluid container-min-max-width">
                    <h2> Despre proiect </h2>
                    <p> Proiectul reprezintă partea de Frontend a unei platforme de E-commerce si inglobează următoarele funcționalități: </p>
                    <ul>
                        <li>Adăugarea si ștergerea produselor în/din cart</li>
                        <li>Modifcarea numărului de produse din cart</li>
                        <li>Adăugarea și ștergerea produselor favorite</li>
                        <li>Logare cu Google si Facebook</li>
                        <li>Rutare dinamică</li>
                        <li>Stilizare responsive</li>
                    </ul>
                    <p> Tehnologii principale folosite pentru realizarea acestuia: </p>
                    <ul>
                        <li>React.js</li>
                        <li>React Router</li>
                        <li>Redux.js si Redux-Thunk</li>
                        <li>Bootstrap</li>
                        <li>Firebase API</li>
                    </ul>
                </div>
            </Layout>
        </div>
    );
}

export default About;