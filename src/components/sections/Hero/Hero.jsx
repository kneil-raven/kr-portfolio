import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { personalInfo } from  '../../data/navigation';
import { scrollToSection } from '../../utils/helpers';
import { Button } from '../../common/Button';

const Hero = () => {
    const { themeClasses, isVisible, isDarkMode } = useTheme();


    return (
        <section id='home' className='pt-24 pb-16 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <div className={`text-center transition-all duration-1000 ${
                    isVisible ? 'opacity-1000 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>

                    {/* Avatar */}
                    <div className='mb-8'>
                        <div className='w-32'>
                            <div className={`w-full h-full rounded-full ${
                                isDarkMode ? 'bg-slate-800' : 'bg-white'
                            }`}>
                                <span>
                                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Title */}
                    <h1>
                        <span>
                            {personalInfo.title}
                        </span>
                    </h1>

                    {/* Description */}
                    <p className={`text-xl md:text-2xl ${
                        themeClasses.text.secondary
                    }`}>
                        {personalInfo.description}
                    </p>

                    {/* CTA Buttons */}
                    <div>
                        <Button
                            onClick={() => scrollToSection('projects')}
                            variant='primary'
                            size='large'
                        >
                            View My Work
                        </Button>

                        <Button
                            onClick={() => scrollToSection('contact')}
                            variant='outline'
                            size='large'
                        >
                            Get In Touch
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;