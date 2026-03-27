const fs = require('fs');

const extractAndReplaceCssJs = (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace CSS
    content = content.replace(/<style>[\s\S]*?<\/style>/, '<link rel="stylesheet" href="style.css">');
    // Replace JS
    content = content.replace(/<script>[\s\S]*?<\/script>/, '<script src="script.js"></script>');
    
    // Replace Navbar Links
    content = content.replace(/href="#how-it-works"/g, 'href="index.html#how-it-works"');
    content = content.replace(/href="#features"/g, 'href="features.html"');
    content = content.replace(/href="#pricing"/g, 'href="pricing.html"');
    content = content.replace(/href="#demo"/g, 'href="demo.html"');
    content = content.replace(/href="#" class="logo"/g, 'href="index.html" class="logo"');
    content = content.replace(/href="#" class="logo footer-logo"/g, 'href="index.html" class="logo footer-logo"');

    // Make sure we un-replace the anchor links if they are on the SAME page later... actually it's fine.
    // They will just navigate to index.html#how-it-works, which works from anywhere.

    return content;
};

// Common sections regexes
const featuresSection = /<!-- Features Section -->[\s\S]*?<!-- Testimonials Section -->/;
const testimonialsSection = /<!-- Testimonials Section -->[\s\S]*?<!-- Pricing Section -->/;
const pricingSection = /<!-- Pricing Section -->[\s\S]*?<!-- Bottom CTA Fill -->/;
const ctaFillSection = /<!-- Bottom CTA Fill -->[\s\S]*?<!-- Request Demo Form Section -->/;
const demoSection = /<!-- Request Demo Form Section -->[\s\S]*?<!-- Success Modal -->/;
const successModalSection = /<!-- Success Modal -->[\s\S]*?<!-- Footer -->/;
const heroSection = /<!-- Hero Section -->[\s\S]*?<!-- Problem Section -->/;
const problemSection = /<!-- Problem Section -->[\s\S]*?<!-- Solution Section -->/;
const solutionSection = /<!-- Solution Section -->[\s\S]*?<!-- How It Works Section -->/;
const howItWorksSection = /<!-- How It Works Section -->[\s\S]*?<!-- Features Section -->/;

// 1. Index.html
let indexHtml = extractAndReplaceCssJs('index.html');
indexHtml = indexHtml.replace(featuresSection, '');
indexHtml = indexHtml.replace(testimonialsSection, '');
indexHtml = indexHtml.replace(pricingSection, '<!-- Bottom CTA Fill -->\n');
indexHtml = indexHtml.replace(demoSection, '');
indexHtml = indexHtml.replace(successModalSection, '<!-- Footer -->\n');
fs.writeFileSync('index.html', indexHtml);

// 2. Features.html
let featuresHtml = extractAndReplaceCssJs('features.html');
featuresHtml = featuresHtml.replace(heroSection, '');
featuresHtml = featuresHtml.replace(problemSection, '');
featuresHtml = featuresHtml.replace(solutionSection, '');
featuresHtml = featuresHtml.replace(howItWorksSection, '');
featuresHtml = featuresHtml.replace(pricingSection, '<!-- Bottom CTA Fill -->\n');
featuresHtml = featuresHtml.replace(demoSection, '');
featuresHtml = featuresHtml.replace(successModalSection, '<!-- Footer -->\n');
fs.writeFileSync('features.html', featuresHtml);

// 3. Pricing.html
let pricingHtml = extractAndReplaceCssJs('pricing.html');
pricingHtml = pricingHtml.replace(heroSection, '');
pricingHtml = pricingHtml.replace(problemSection, '');
pricingHtml = pricingHtml.replace(solutionSection, '');
pricingHtml = pricingHtml.replace(howItWorksSection, '');
pricingHtml = pricingHtml.replace(featuresSection, '');
pricingHtml = pricingHtml.replace(testimonialsSection, '');
pricingHtml = pricingHtml.replace(demoSection, '');
pricingHtml = pricingHtml.replace(successModalSection, '<!-- Footer -->\n');
fs.writeFileSync('pricing.html', pricingHtml);

// 4. Demo.html
let demoHtml = extractAndReplaceCssJs('demo.html');
demoHtml = demoHtml.replace(heroSection, '');
demoHtml = demoHtml.replace(problemSection, '');
demoHtml = demoHtml.replace(solutionSection, '');
demoHtml = demoHtml.replace(howItWorksSection, '');
demoHtml = demoHtml.replace(featuresSection, '');
demoHtml = demoHtml.replace(testimonialsSection, '');
demoHtml = demoHtml.replace(pricingSection, '');
demoHtml = demoHtml.replace(ctaFillSection, '');
fs.writeFileSync('demo.html', demoHtml);

console.log('Successfully refactored into a complete website.');
