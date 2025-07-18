import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useScrollSpy } from '../../hooks/'
import { navItems, personalInfo } from '../../data/navigation';
import { ThemeToggle } from '../common/ThemeToggle';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { themeClasses } = useTheme();
    const activeSession = useScrollSpy(navItems.map(item => item.id));

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);


    return (
        <nav>
            <div>
                <div>
                    {/* Logo */}
                    <div>
                        {personalInfo.name}
                    </div>

                    {/* Desktop Navigation */}
                    <div>
                        <Navigation />
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div>
                        <ThemeToggle />
                        <button>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <MobileMenu 
                isOpen = {isMenuOpen}
                items = {navItems}
                activeSession = {activeSession}
                onItemClick = {closeMenu}
            
            />

        </nav>
    )
}

export default Header;