# Fonts Directory

## Aspen Extralight Font

Place the **Aspen Extralight** font files in this directory with the following names:

- `Aspen-Extralight.woff2`
- `Aspen-Extralight.woff`

These font files are required for the Aspen Extralight font to work across the application.

## Usage

The font is already configured and can be used in two ways:

### 1. Using the font utility (recommended)
```tsx
import { fontAspenExtralight } from '../fonts'

<div className={fontAspenExtralight}>
  Your content here
</div>
```

### 2. Using Tailwind CSS class
```tsx
<div className="font-aspen">
  Your content here
</div>
```

The font is automatically available throughout the application via the CSS variable `--font-aspen-extralight`.
