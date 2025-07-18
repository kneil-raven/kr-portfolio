// for smooth scoll to section
export const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = 80; //account for fixed header
        const elementPosition = element.offsetTop - headerHeight;

        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
};


// debounce function
export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};


// Throttle function
export const throttle = (func, limit) => {
    let inThrottle;
    return func(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};


// Check if element is in viewport
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};


// Generate unique ID
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};


// Validate email
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};


// Copy to clipboard
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy text: ', err);
    return false;
  }
};