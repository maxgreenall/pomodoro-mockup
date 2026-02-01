# Pomodoro Mockup - iPhone Design Tool

Dark-themed React + Vite + Tailwind project with an iPhone-sized mockup frame for designing your pomodoro timer app.

## What's Ready

✅ Vite + React setup  
✅ Tailwind CSS configured with dark mode  
✅ iPhone mockup frame (390x844 pixels) centered on screen  
✅ Dark theme applied globally  
✅ Dev server running on http://localhost:5173

## Structure

```
src/
├── App.jsx          ← Main component with iPhone mockup
├── index.css        ← Tailwind directives + dark theme
└── main.jsx         ← Entry point

tailwind.config.js   ← Tailwind configuration
postcss.config.js    ← PostCSS setup
```

## How to Use

1. **Edit `src/App.jsx`** - Replace the placeholder content with your pomodoro timer UI
2. The iPhone frame will automatically contain whatever you build
3. Tailwind CSS classes work everywhere

## Commands

```bash
# Start dev server (auto-reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design Specs

- **iPhone Frame**: 390px wide × 844px tall (iPhone 15 Pro)
- **Color Scheme**: Dark mode (black background, white text)
- **Available**: Full Tailwind CSS + dark mode support

## Next Steps

1. I'll use Claude to design your pomodoro timer UI
2. Claude will send JSON designs via the Figma connector
3. You can translate those designs to React/Tailwind here
4. Or Claude can write the React code directly

## Example: Building the Pomodoro UI

Once you're ready to design, ask Claude to:
- Create a dark-themed pomodoro timer interface
- Make it 390px wide to fit the mockup
- Use Tailwind classes

Claude will either:
- Send you JSON designs to recreate in React, or
- Write the React/Tailwind code directly for you

---

**Ready to design!** 🎨
