import React, { Component } from 'react';
import './style.css'
import photoflavia from '../../photoflavia.jpg';
import 'font-awesome/css/font-awesome.min.css';

class Principal extends Component {
    
    render() {
        return (
            <div className="container">

                {/* Sobre mim */}
                <div className="aboutme" id="sobremim">
                    <h2>Sobre mim</h2>
                    <img className="photoflavia" src={photoflavia} alt="Foto da Flávia"></img>
                    <article className="aboutme-p">
                        <p>Meu nome é Flávia de Almeida Guterres, nasci em Macapá/AP, morei durante 13 anos em Belém/PA onde concluí o ensino superior, aprendi a conviver com pessoas e fiz grandes amizades.</p>

                        <p>A partir de 2010 resolvi me dedicar quase que exclusivamente para concursos públicos. Foram anos difíceis e cansativos pois estudava sozinha, em casa, com o que a internet podia me oferecer gratuitamente. </p>

                        <p>Em 2015 mudei para São Paulo com a expectativa de uma recolocação no mercado de trabalho. Conheci pela internet comunidades voltadas para mulheres na TI e passei a frequentar eventos e meetups para me atualizar e fazer networking.</p> 

                        <p>Em 2017 fui selecionada para fazer o curso de Front-end do Code Experience, parceria entre a Escola Senai de Informática e a J.P. Morgan, cujo objetivo é qualificar profissionais na área de TI através de uma metodologia de ensino baseada no desenvolvimento de projetos. O curso terminou no início de abril com apresentação de um projeto cujo tema foi proposto por uma das empresas parceiras.</p>

                        <p>O próximo passo é continuar me aprofundando em Javascript e ReactJS, estudar UX/UI (User Experience/User Interface) e trabalhar para que as tecnologias sejam mais acessíveis e inclusivas, e contribuir nas comunidades voltadas para mulheres e minorias na tecnologia.</p>
                    </article>
                </div>

                {/* Hobbies */}
                <div className="hobbies" id="hobbies">
                    <h2>Hobbies</h2>
                        <ul className="hobbies-list">
                            <li><i class="fa fa-heart"></i> Adoro cozinhar </li>
                            <li><i class="fa fa-heart"></i> Ir a bares </li>
                            <li><i class="fa fa-heart"></i> Ouvir música </li>
                            <li><i class="fa fa-heart"></i> Ir ao cinema </li>
                            <li><i class="fa fa-heart"></i> Ver séries e filmes </li>
                            <li><i class="fa fa-heart"></i> Apreciadora de uma boa cerveja </li>
                            <li><i class="fa fa-heart"></i> Fazer vários nadas no domingo </li>
                        </ul>
                </div>

                {/* Formação acadêmica */}
                <div className="education" id="formacao">
                    <h2>Formação Acadêmica</h2>
                    <ul className="education-list">
                        <li> 
                            <h3> Escola SENAI de Informática </h3>
                            <p className="education-list-p"> Code Experience: Front-end </p>
                            <p className="education-list-p"> 2017 - 2018 </p>
                        </li>
                        <li> 
                            <h3> Centro Universitário do Estado do Pará </h3>
                            <p className="education-list-p"> Especialização em banco de dados para o mercado corporativo - Oracle </p>
                            <p className="education-list-p"> 2011 - 2013 </p>
                        </li>
                        <li> 
                            <h3> Centro Universitário do Estado do Pará </h3>
                            <p className="education-list-p"> Bacharelado em Ciência da Computação </p>
                            <p className="education-list-p"> 2002 - 2008 </p>
                        </li>
                    </ul>
                </div>

                {/* Habilidades */}
                <div className="skills" id="habilidades">
                    <h2>Habilidades</h2>
                        <ul className="skills-list">
                            <li><i class="fa fa-check"></i> HTML </li>
                            <li><i class="fa fa-check"></i> CSS </li>
                            <li><i class="fa fa-check"></i> Javascript </li>
                            <li><i class="fa fa-check"></i> ReactJS </li>
                            <li><i class="fa fa-check"></i> GitHub </li>
                            <li><i class="fa fa-check"></i> Design Responsivo (Mobile First) </li>
                            <li><i class="fa fa-check"></i> Boas práticas </li>
                        </ul>
                </div>

                {/* Experiências */}
                <div className="background" id="experiencias">
                    <h2>Experiências</h2>
                    <article className="background-p">
                        <p> Desde 2017, voltei a me dedicar ao desenvolvimento front-end e a experiência mais recente foi a do curso recém-concluído do <a className="background-link" href="https://codexp.sp.senai.br/" target="_blank" rel="noopener noreferrer">Code Experience</a>, na <a className="background-link" href="https://informatica.sp.senai.br/" target="_blank" rel="noopener noreferrer">Escola SENAI de Informática</a>, onde me atualizei sobre programação, gestão de projetos, gestão de pessoas, design thinking, metodologias ágeis e desenvolvi pequenos projetos com os colegas de turma, simulando um ambiente real de trabalho.</p>    
                    </article>
                </div>
            </div>
        );
    }
}

export default Principal;