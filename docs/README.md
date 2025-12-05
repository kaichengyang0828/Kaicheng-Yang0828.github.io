# Documentation Index

This directory contains comprehensive documentation for the homepage refactoring project.

## Documents

### 1. [FINAL_SUMMARY.md](FINAL_SUMMARY.md)
**Overview of entire refactoring project**

Quick reference for:
- All improvements made
- Before/after comparisons
- Impact assessment
- Success metrics
- Deployment readiness

**Read this first** for a complete understanding of the project.

### 2. [REFACTORING.md](REFACTORING.md)
**Architecture and design rationale**

Details about:
- Information architecture decisions
- File structure organization
- Design system (tokens, components)
- How to update content
- SEO and accessibility features
- Future enhancements

**Use this** when making structural changes or understanding design decisions.

### 3. [DATA_SCHEMA.md](DATA_SCHEMA.md)
**Data file schemas and examples**

Reference for:
- YAML file structure for news, education, experience, service
- Required and optional fields
- Formatting guidelines
- Example entries
- Validation rules
- Common issues and solutions

**Use this** when adding or editing content in data files.

### 4. [TESTING_CHECKLIST.md](TESTING_CHECKLIST.md)
**Comprehensive testing guide**

Includes:
- Visual/layout testing (desktop/tablet/mobile)
- Functionality testing (navigation, links, interactive elements)
- Accessibility testing (keyboard, screen reader, contrast)
- SEO testing (meta tags, structured data)
- Performance testing (load time, Lighthouse)
- Cross-browser testing
- Content validation

**Use this** before deployment or after making changes.

### 5. [SUMMARY.md](SUMMARY.md)
**Detailed change summary**

Contains:
- Key improvements by category
- Visual comparisons
- Code metrics
- Testing requirements
- Files changed
- Migration notes

**Use this** for detailed technical information about changes.

## Quick Links

### For Content Updates
→ See [DATA_SCHEMA.md](DATA_SCHEMA.md)

### For Structural Changes
→ See [REFACTORING.md](REFACTORING.md)

### For Testing
→ See [TESTING_CHECKLIST.md](TESTING_CHECKLIST.md)

### For Project Overview
→ See [FINAL_SUMMARY.md](FINAL_SUMMARY.md)

## Common Tasks

### Adding a News Item
1. Open `_data/news.yml`
2. Add entry at the top:
   ```yaml
   - date: "YYYY.MM"
     content: "Your news [with link](url)"
     highlight: true  # optional
   ```
3. Save and commit

### Updating Education/Experience
1. Open `_data/education.yml` or `_data/experience.yml`
2. Edit or add entry following schema in [DATA_SCHEMA.md](DATA_SCHEMA.md)
3. Save and commit

### Adding Conference/Journal Reviewing
1. Open `_data/service.yml`
2. Add to appropriate section:
   ```yaml
   - name: "ACRONYM"
     full_name: "Full Name"
     role: "Reviewer"
   ```
3. Save and commit

### Modifying Styles
1. Open `_sass/_custom.scss`
2. Edit design tokens (top) or component styles
3. Test changes locally
4. Save and commit

### Testing Changes
1. Follow [TESTING_CHECKLIST.md](TESTING_CHECKLIST.md)
2. Run Lighthouse audit
3. Validate YAML syntax
4. Check responsive layout

## Document Versions

| Document | Version | Last Updated | Author |
|----------|---------|--------------|--------|
| FINAL_SUMMARY.md | 1.0 | Dec 2025 | GitHub Copilot |
| REFACTORING.md | 1.0 | Dec 2025 | GitHub Copilot |
| DATA_SCHEMA.md | 1.0 | Dec 2025 | GitHub Copilot |
| TESTING_CHECKLIST.md | 1.0 | Dec 2025 | GitHub Copilot |
| SUMMARY.md | 1.0 | Dec 2025 | GitHub Copilot |

## Questions?

For questions about:
- **Content updates**: See [DATA_SCHEMA.md](DATA_SCHEMA.md)
- **Technical issues**: See [REFACTORING.md](REFACTORING.md)
- **Testing**: See [TESTING_CHECKLIST.md](TESTING_CHECKLIST.md)
- **Project overview**: See [FINAL_SUMMARY.md](FINAL_SUMMARY.md)

Or contact: kaichengyang0828@gmail.com

## Contributing

When updating documentation:
1. Keep consistent formatting
2. Update version table
3. Cross-reference related docs
4. Include examples where helpful
5. Test any code snippets

---

**Last Updated:** December 2025
**Maintainer:** Kaicheng Yang
