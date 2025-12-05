# Homepage Refactoring Documentation

## Overview
This document describes the refactored structure of the personal homepage, focusing on improved information architecture, accessibility, and maintainability.

## Design Rationale

### Information Architecture
The new structure follows a clear hierarchy optimized for academic/researcher profiles:
1. **About** - Brief introduction and key information
2. **News** - Recent updates and achievements (limit 10, with "Show More")
3. **Publications** - Research papers and projects
4. **Education** - Academic background
5. **Experience** - Work history
6. **Service** - Professional service (conferences, journals)

### Key Improvements
- **Separation of Concerns**: Content data separated from presentation
- **Maintainability**: Easy updates through YAML data files
- **Scannability**: Clear visual hierarchy and consistent spacing
- **Accessibility**: Semantic HTML, ARIA landmarks, proper focus states
- **Performance**: Collapsible sections reduce initial page weight

## File Structure

### Data Files (`_data/`)
Content is now managed through structured YAML files:

#### `news.yml`
```yaml
- date: "2025.11"
  content: "Brief news description with [links](url)"
  highlight: true  # optional, for major news
```

#### `education.yml`
```yaml
- degree: "Master of Science"
  institution: "University Name"
  location: "City, Country"
  period: "YYYY.MM - YYYY.MM"
  details: "Additional info"
  supervisor: "Prof. Name"  # optional
```

#### `experience.yml`
```yaml
- role: "Job Title"
  organization: "Company Name"
  location: "City, Country"
  period: "YYYY.MM - Present"
  type: "Full-time"  # or "Part-time", "Internship"
  responsibilities:
    - "Achievement or responsibility 1"
    - "Achievement or responsibility 2"
```

#### `service.yml`
```yaml
conferences:
  - name: "CVPR"
    full_name: "Full Conference Name"
    role: "Reviewer"

journals:
  - name: "TPAMI"
    full_name: "Full Journal Name"
    role: "Reviewer"
```

### Content Files (`_pages/includes/`)
- `intro.md` - Personal introduction and contact info
- `news.md` - News section (renders from `news.yml`)
- `pub.md` - Publications section
- `education.md` - Education section (renders from `education.yml`)
- `experience.md` - Experience section (renders from `experience.yml`)
- `service.md` - Service section (renders from `service.yml`)

### Styling (`_sass/`)
- `_custom.scss` - Custom styles for the refactored layout
- Contains design tokens (colors, spacing, shadows)
- Responsive breakpoints for mobile/tablet/desktop
- Print-friendly styles

## Design Tokens

### Spacing Scale
```css
--spacing-xs: 0.5rem   (8px)
--spacing-sm: 1rem     (16px)
--spacing-md: 1.5rem   (24px)
--spacing-lg: 2rem     (32px)
--spacing-xl: 3rem     (48px)
```

### Colors
```css
--color-primary: #224b8d    (links, headings)
--color-accent: #00369f     (badges, highlights)
--color-text: #333          (body text)
--color-text-light: #666    (secondary text)
--color-border: #e1e4e8     (dividers)
--color-bg-light: #f6f8fa   (backgrounds)
```

### Responsive Breakpoints
- Mobile: < 768px (single column)
- Tablet: 768px - 1024px
- Desktop: > 1024px

## How to Update Content

### Adding News
1. Edit `_data/news.yml`
2. Add new entry at the top:
```yaml
- date: "YYYY.MM"
  content: "Your news with [optional link](url)"
  highlight: true  # optional
```
3. Save and commit

### Updating Education
1. Edit `_data/education.yml`
2. Update or add entries
3. Save and commit

### Updating Experience
1. Edit `_data/experience.yml`
2. Update or add entries
3. Save and commit

### Updating Service/Reviewing
1. Edit `_data/service.yml`
2. Add conferences or journals
3. Save and commit

### Updating Publications
Publications are still managed in `_pages/includes/pub.md` due to their complex formatting with images and detailed metadata.

## SEO & Accessibility Features

### Meta Tags
- Proper title and description
- Open Graph tags for social sharing
- Twitter Card metadata
- JSON-LD Person schema for structured data

### Semantic HTML
- `<main>` for main content
- `<article>` for page content
- `<section>` for content sections
- Proper heading hierarchy (h1 → h2 → h3)

### ARIA
- `role="main"` on main content
- `role="contentinfo"` on footer
- `aria-label` for main content
- Proper focus states

### Keyboard Navigation
- All interactive elements accessible via Tab
- Visible focus indicators
- Skip links (if needed)

## Performance Optimizations

### Content Loading
- News section shows 10 recent items by default
- Older news in collapsible "Show More" section
- Reduces initial page weight

### CSS
- Design tokens reduce duplication
- Modular SCSS structure
- Compressed output

### Future Optimizations
- Lazy load images below the fold
- Optimize paper images (WebP format)
- Consider CDN for assets

## Testing Checklist

### Responsive Design
- [ ] Test on mobile (< 768px)
- [ ] Test on tablet (768px - 1024px)
- [ ] Test on desktop (> 1024px)
- [ ] Verify navigation works on all sizes

### Accessibility
- [ ] Tab through all interactive elements
- [ ] Verify focus indicators visible
- [ ] Check color contrast (WCAG AA)
- [ ] Test with screen reader
- [ ] Verify alt text on images

### SEO
- [ ] Check title and meta description
- [ ] Verify Open Graph tags
- [ ] Test Twitter Card preview
- [ ] Validate JSON-LD schema
- [ ] Check canonical URLs

### Functionality
- [ ] All internal links work
- [ ] All external links open correctly
- [ ] "Show More" expands/collapses
- [ ] News section displays correctly
- [ ] Publications render properly

### Performance
- [ ] Run Lighthouse audit
- [ ] Check page load time
- [ ] Verify CSS loads correctly
- [ ] Test with slow network

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Future Enhancements

### Content
- Add publications filter by year/venue
- Add citation count from Google Scholar
- Interactive publication timeline
- Add talks/presentations section

### Design
- Dark mode support
- Animated transitions
- Interactive elements
- Print stylesheet improvements

### Technical
- Move publications to YAML data file
- Add search functionality
- RSS feed for news
- Analytics integration

## Maintenance

### Regular Updates
- Add news items as they occur
- Update publications when published
- Keep service roles current
- Review and archive old news annually

### Dependencies
- Jekyll and gems updated via Gemfile
- Theme updates: Minimal Mistakes
- Font Awesome icons
- No external JavaScript dependencies

## Questions or Issues?
Contact: kaichengyang0828@gmail.com
