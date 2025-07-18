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
                        <div className='w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 transition-all duration-300'>
                            <div className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-300 ${
                                isDarkMode ? 'bg-slate-800' : 'bg-white'
                            }`}>
                                <span className='text-4xl font-bold'>
                                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Title */}
                    <h1 className='text-4xl md:text-5xl font-bold'>
                        <span className='bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                            {personalInfo.title}
                        </span>
                    </h1>

                    {/* Description */}
                    <p className={`mt-4 text-xl md:text-2xl mb-8 max-w-3xl mx-auto transition-colors duration-300 ${
                        themeClasses.text.secondary
                    }`}>
                        {personalInfo.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
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