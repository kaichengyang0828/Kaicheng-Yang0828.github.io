# Data Schema Documentation

This document describes the data schemas used in the homepage data files.

## News Schema (`_data/news.yml`)

```yaml
- date: string          # Format: "YYYY.MM" (e.g., "2025.11")
  content: string       # Markdown-formatted content, supports links
  highlight: boolean    # (optional) true for major achievements
```

**Example:**
```yaml
- date: "2025.11"
  content: "🎉 [Paper Name](https://arxiv.org) accepted to CVPR 2026"
  highlight: true
```

**Guidelines:**
- Use emoji sparingly (🎉 for acceptances, 🏆 for awards)
- Keep content under 150 characters
- Include links using Markdown syntax
- Set `highlight: true` for paper acceptances, awards, grants
- Order: Most recent first

## Education Schema (`_data/education.yml`)

```yaml
- degree: string          # Full degree name (e.g., "Master of Science")
  institution: string     # University/Institution name
  location: string        # City, Country
  period: string          # Format: "YYYY.MM - YYYY.MM" or "YYYY.MM - Present"
  details: string         # (optional) Brief description or major
  supervisor: string      # (optional) Advisor name with title
```

**Example:**
```yaml
- degree: "Doctor of Philosophy"
  institution: "Massachusetts Institute of Technology"
  location: "Cambridge, MA, USA"
  period: "2020.09 - Present"
  details: "Computer Science, Specialization in Machine Learning"
  supervisor: "Prof. Jane Smith"
```

**Guidelines:**
- List in reverse chronological order (most recent first)
- Include visiting positions if significant
- Keep details concise (one line)

## Experience Schema (`_data/experience.yml`)

```yaml
- role: string              # Job title
  organization: string      # Company/Institution name
  location: string          # City, Country
  period: string            # Format: "YYYY.MM - YYYY.MM" or "YYYY.MM - Present"
  type: string              # "Full-time", "Part-time", "Internship", "Contract"
  responsibilities: array   # List of 2-4 key achievements/responsibilities
    - string
    - string
```

**Example:**
```yaml
- role: "Senior Research Scientist"
  organization: "AI Research Lab"
  location: "San Francisco, CA"
  period: "2022.01 - Present"
  type: "Full-time"
  responsibilities:
    - "Led team of 5 researchers on multimodal learning projects"
    - "Published 8 papers at top-tier AI conferences (NeurIPS, ICML, CVPR)"
    - "Developed novel vision-language model achieving SOTA on 3 benchmarks"
    - "Mentored 10+ graduate student interns"
```

**Guidelines:**
- List in reverse chronological order
- Use action verbs (Led, Developed, Published, Achieved)
- Quantify achievements when possible
- Keep to 2-4 bullet points per position
- Focus on impact and outcomes

## Service Schema (`_data/service.yml`)

```yaml
conferences:
  - name: string          # Conference acronym (e.g., "CVPR")
    full_name: string     # Full conference name
    role: string          # "Reviewer", "Area Chair", "Program Committee", etc.
    years: array          # (optional) List of years
      - number

journals:
  - name: string          # Journal acronym (e.g., "TPAMI")
    full_name: string     # Full journal name
    role: string          # "Reviewer", "Associate Editor", etc.
    years: array          # (optional) List of years
      - number
```

**Example:**
```yaml
conferences:
  - name: "NeurIPS"
    full_name: "Conference on Neural Information Processing Systems"
    role: "Reviewer"
    years: [2023, 2024, 2025]
  
  - name: "CVPR"
    full_name: "IEEE/CVF Conference on Computer Vision and Pattern Recognition"
    role: "Area Chair"
    years: [2025]

journals:
  - name: "TPAMI"
    full_name: "IEEE Transactions on Pattern Analysis and Machine Intelligence"
    role: "Reviewer"
```

**Guidelines:**
- List top-tier conferences first
- Group by conferences and journals
- Include years if you want to show history
- Omit years if ongoing/continuous service

## Publications Schema (Future Enhancement)

**Note:** Currently publications are in `pub.md`. Future enhancement could move to YAML:

```yaml
- title: string           # Paper title
  authors: array          # List of authors
    - string
  venue: string           # Conference/Journal name
  year: number            # Publication year
  type: string            # "conference", "journal", "preprint", "workshop"
  status: string          # "published", "accepted", "under review"
  links:
    paper: string         # URL to PDF
    code: string          # (optional) GitHub repo
    project: string       # (optional) Project page
    video: string         # (optional) Video presentation
  image: string           # (optional) Path to figure/thumbnail
  badges: array           # (optional) ["Oral", "Best Paper", "Spotlight"]
    - string
  selected: boolean       # (optional) true for highlighted papers
```

**Example:**
```yaml
- title: "Vision-Language Models Are Amazing"
  authors:
    - "John Doe*"
    - "Jane Smith*"
    - "Bob Johnson"
  venue: "NeurIPS"
  year: 2025
  type: "conference"
  status: "accepted"
  links:
    paper: "https://arxiv.org/abs/2501.12345"
    code: "https://github.com/user/repo"
    project: "https://project-page.github.io"
  image: "images/papers/vl-models.jpg"
  badges: ["Oral", "Best Paper Award"]
  selected: true
```

## Data Validation Rules

### General
- All YAML files must be valid YAML syntax
- Use 2-space indentation
- Quote strings containing special characters (`:`, `#`, etc.)
- Test locally before committing

### Dates
- Use consistent format: `YYYY.MM` for year-month
- Use `Present` for ongoing positions
- Period format: `YYYY.MM - YYYY.MM`

### Links
- Use Markdown link format: `[text](url)`
- Verify all URLs are accessible
- Prefer HTTPS over HTTP
- Use persistent URLs (DOI, arXiv, GitHub)

### Text Content
- Keep descriptions concise
- Use proper grammar and punctuation
- Avoid excessive jargon
- Proofread before committing

## Testing Data Changes

After updating data files:

1. **Local testing:**
   ```bash
   bundle exec jekyll serve
   ```
   Visit http://localhost:4000

2. **Check for:**
   - YAML syntax errors
   - Proper rendering of Markdown
   - Correct date formatting
   - Working links
   - Responsive layout

3. **Validate:**
   - HTML structure (view source)
   - Accessibility (screen reader, keyboard)
   - SEO meta tags (view source)

## Common Issues

### Issue: Content not showing
- **Cause:** YAML syntax error
- **Fix:** Validate YAML syntax online or with linter

### Issue: Markdown not rendering
- **Cause:** Missing Liquid filter
- **Fix:** Check template files use `| markdownify`

### Issue: Dates not sorting
- **Cause:** Inconsistent date format
- **Fix:** Use consistent `YYYY.MM` format

### Issue: Links broken
- **Cause:** Invalid URL or encoding issue
- **Fix:** Check URL, escape special characters

## Best Practices

1. **Keep it DRY:** Use data files instead of hardcoding
2. **Consistent formatting:** Follow schema exactly
3. **Regular updates:** Keep news and service current
4. **Archive old content:** Move old news to archive section
5. **Backup data:** Commit regularly to git
6. **Test changes:** Always preview before publishing
7. **Document changes:** Use meaningful commit messages

## Migration Notes

### From old format to new:
- News: Convert list items to YAML entries
- Education: Extract from prose to structured data
- Experience: Same as education
- Service: Convert list to structured badges

### Rollback:
- Data files are additive
- Original files preserved as backups
- Git history available for recovery
