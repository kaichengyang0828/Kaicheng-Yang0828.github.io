# Testing Checklist for Homepage Refactoring

## Pre-deployment Testing

### 1. Visual/Layout Testing

#### Desktop (> 1024px)
- [ ] Hero section displays correctly with photo and bio
- [ ] News section shows 10 recent items
- [ ] "Show More" button expands to show all news
- [ ] Education timeline is readable and well-spaced
- [ ] Experience section displays with proper formatting
- [ ] Service badges display in rows with proper spacing
- [ ] Publications section renders with images and proper layout
- [ ] Footer displays correctly
- [ ] All sections have proper spacing and alignment

#### Tablet (768px - 1024px)
- [ ] Layout adapts to medium screen size
- [ ] Navigation remains accessible
- [ ] Images scale appropriately
- [ ] Text remains readable
- [ ] Service badges wrap properly
- [ ] Publication cards adapt to smaller width

#### Mobile (< 768px)
- [ ] Single column layout works correctly
- [ ] Navigation converts to hamburger menu (if applicable)
- [ ] Images are responsive
- [ ] Text is readable (no horizontal scroll)
- [ ] Touch targets are large enough (min 44x44px)
- [ ] Service badges stack vertically
- [ ] News items stack properly

### 2. Functionality Testing

#### Navigation
- [ ] All navigation links work
- [ ] Anchor links scroll to correct sections
- [ ] Active section highlights in navigation
- [ ] Navigation sticky/fixed positioning works
- [ ] Back to top functionality works (if present)

#### Interactive Elements
- [ ] "Show More" news toggle works
- [ ] All external links open in new tab
- [ ] Email links open mail client
- [ ] Google Scholar link works
- [ ] GitHub link works
- [ ] Citation map link works

#### Content Display
- [ ] News items render with proper dates
- [ ] Markdown formatting works in news content
- [ ] Education entries display completely
- [ ] Experience bullet points render correctly
- [ ] Service badges show full names on hover
- [ ] Publication images load and display
- [ ] Publication links all work

### 3. Accessibility Testing

#### Keyboard Navigation
- [ ] Can tab through all interactive elements
- [ ] Tab order is logical
- [ ] Focus indicators are visible
- [ ] Enter/Space activates buttons and links
- [ ] Can collapse/expand news with keyboard
- [ ] No keyboard traps

#### Screen Reader Testing
- [ ] Page title is announced
- [ ] Landmarks are properly identified
- [ ] Headings structure is logical
- [ ] Links are descriptive
- [ ] Images have alt text
- [ ] Lists are properly marked up
- [ ] Form labels are associated (if any)

#### Color Contrast
- [ ] Body text meets WCAG AA (4.5:1)
- [ ] Headings meet WCAG AA (4.5:1)
- [ ] Links are distinguishable (not just by color)
- [ ] Focus indicators have sufficient contrast
- [ ] Button text is readable
- [ ] Badge text is readable

#### Semantic HTML
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Main content in `<main>` tag
- [ ] Navigation in `<nav>` tag
- [ ] Sections use `<section>` or `<article>`
- [ ] Lists use `<ul>`, `<ol>`, `<dl>` appropriately
- [ ] No empty headings or links

### 4. SEO Testing

#### Meta Tags
- [ ] Title tag is present and descriptive
- [ ] Meta description is present (< 160 characters)
- [ ] Canonical URL is set correctly
- [ ] Open Graph tags are present
  - [ ] og:title
  - [ ] og:description
  - [ ] og:image
  - [ ] og:url
  - [ ] og:type
- [ ] Twitter Card tags are present
  - [ ] twitter:card
  - [ ] twitter:title
  - [ ] twitter:description

#### Structured Data
- [ ] JSON-LD schema is valid
- [ ] Schema type is Person
- [ ] Name, URL, email are correct
- [ ] worksFor organization is correct
- [ ] alumniOf institutions are correct
- [ ] sameAs URLs are correct

#### Content
- [ ] Page title is unique and descriptive
- [ ] H1 tag is present (only one)
- [ ] Content is original
- [ ] Links use descriptive anchor text
- [ ] Images have alt text
- [ ] No duplicate content

### 5. Performance Testing

#### Load Time
- [ ] Initial page load < 3 seconds
- [ ] Time to first contentful paint < 1.5 seconds
- [ ] Time to interactive < 5 seconds
- [ ] No layout shifts during load

#### Asset Optimization
- [ ] CSS is minified
- [ ] JavaScript is minified (if any)
- [ ] Images are optimized
- [ ] No unused CSS/JS
- [ ] Resources are cached appropriately

#### Lighthouse Audit
Run Lighthouse and check scores:
- [ ] Performance > 90
- [ ] Accessibility > 95
- [ ] Best Practices > 90
- [ ] SEO > 95

#### Network
- [ ] Page works on slow 3G
- [ ] No excessive requests
- [ ] Total page size < 2MB
- [ ] Images lazy load (if implemented)

### 6. Cross-browser Testing

#### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

#### Mobile Browsers
- [ ] Chrome Mobile (Android)
- [ ] Safari (iOS)
- [ ] Samsung Internet (if applicable)

#### Legacy Support (optional)
- [ ] Chrome (1 version back)
- [ ] Firefox (1 version back)
- [ ] Safari (1 version back)

### 7. Content Validation

#### Text Content
- [ ] No spelling errors
- [ ] No grammar errors
- [ ] Dates are formatted consistently
- [ ] Author names are correct
- [ ] Institution names are correct
- [ ] All acronyms explained on hover

#### Links
- [ ] All internal links work
- [ ] All external links work
- [ ] No broken links (404)
- [ ] PDF links open correctly
- [ ] arXiv links are correct
- [ ] GitHub links are correct
- [ ] Google Scholar link works

#### Data Files
- [ ] news.yml is valid YAML
- [ ] education.yml is valid YAML
- [ ] experience.yml is valid YAML
- [ ] service.yml is valid YAML
- [ ] All required fields are present
- [ ] Dates are in correct format

### 8. Responsive Images

- [ ] Images display correctly on all screen sizes
- [ ] No stretched or distorted images
- [ ] Images have proper dimensions
- [ ] Images are optimized (< 200KB each)
- [ ] Consider WebP format for better compression

### 9. Print Testing

- [ ] Page prints correctly
- [ ] Print styles applied
- [ ] No cut-off content
- [ ] Links show URLs in print
- [ ] Navigation hidden in print
- [ ] Color adjusted for B&W printing

### 10. Edge Cases

- [ ] Very long names render correctly
- [ ] Very long titles wrap properly
- [ ] Many news items don't break layout
- [ ] Missing data fields handled gracefully
- [ ] Special characters display correctly
- [ ] Emoji render consistently

## Post-deployment Verification

### Production Checks
- [ ] Site is live at correct URL
- [ ] SSL certificate is valid
- [ ] No console errors
- [ ] Analytics tracking works (if configured)
- [ ] Social sharing works correctly
- [ ] Google Search Console shows no errors

### Monitoring
- [ ] Check Google Analytics for user flow
- [ ] Monitor Core Web Vitals
- [ ] Check for 404 errors
- [ ] Monitor page load times
- [ ] Check mobile usability in Search Console

## Tools for Testing

### Automated Testing
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance, accessibility, SEO
- [WAVE](https://wave.webaim.org/) - Accessibility
- [axe DevTools](https://www.deque.com/axe/devtools/) - Accessibility
- [W3C Validator](https://validator.w3.org/) - HTML validation
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - CSS validation
- [Schema Validator](https://validator.schema.org/) - Structured data
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) - Mobile usability

### Manual Testing
- Browser DevTools (Chrome, Firefox, Safari)
- Screen readers (NVDA, JAWS, VoiceOver)
- Different devices (phone, tablet, desktop)
- Different operating systems (Windows, macOS, iOS, Android)

### Link Checking
- [Broken Link Checker](https://www.brokenlinkcheck.com/)
- `wget --spider -r -nd -nv -o wget.log [URL]`

### Performance
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)
- [PageSpeed Insights](https://pagespeed.web.dev/)

## Issue Tracking

When issues are found, document:
- **Issue:** Brief description
- **Location:** Where on the page
- **Steps to reproduce:** How to see the issue
- **Expected:** What should happen
- **Actual:** What actually happens
- **Priority:** Critical, High, Medium, Low
- **Browser/Device:** Where it occurs

## Sign-off

- [ ] All critical issues resolved
- [ ] All high priority issues resolved
- [ ] Medium/low issues documented for future
- [ ] Stakeholder approval obtained
- [ ] Documentation updated
- [ ] Deployment approved

---

**Tested by:** _______________
**Date:** _______________
**Version:** _______________
**Notes:** _______________
