import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';


function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
            <SkillsSection skill={'HTML/CSS'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Wordpress'} progress={'70%'} width={'40%'} />
                <SkillsSection skill={'PHP'} progress={'30%'} width={'80%'} />
                <SkillsSection skill={'Web Design'} progress={'80%'} width={'25%'} />
        
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'} 
                text={'Focus on solving complex business problems through continuous research, ideation, conceptualization, and implementation of web solutions.'}
                />
              

                
            </div>

        </div>
    )
}

export default AboutPage;
