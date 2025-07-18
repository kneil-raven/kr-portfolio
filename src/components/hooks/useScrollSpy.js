import { useState, useEffect } from "react";

export const useScrollSpy = (sectionIds, options = {}) => {
    const [activeSection, setActiveSection] = useState();

    const {
        threshold = 0.5,
        rootMargin = '-80px 0px -80px 0px'
    } = options;

    useEffect(() => {
        const observers = [];

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observerOptions = {
            threshold,
            rootMargin,
        };

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                const observer = new IntersectionObserver(observerCallback, observerOptions);
                observer.observe(element);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach((observer) => observer.disconnect())
        };
    }, [sectionIds, threshold, rootMargin]);

    return activeSection;
};

