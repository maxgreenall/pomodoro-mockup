# Component Examples

Here are some examples you can use to build your pomodoro timer UI.

## Simple Timer Display

```jsx
<div className="text-center py-12">
  <h2 className="text-neutral-400 text-sm mb-4">Focus Session</h2>
  <div className="text-6xl font-bold text-white mb-8">25:00</div>
  <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold">
    Start
  </button>
</div>
```

## Preset Cards

```jsx
<div className="space-y-3 px-4">
  <div className="bg-neutral-800 rounded-lg p-4 flex items-center justify-between">
    <div>
      <h3 className="text-white font-semibold">Focus</h3>
      <p className="text-neutral-400 text-sm">25 min</p>
    </div>
    <button className="bg-white text-black px-4 py-2 rounded text-sm font-semibold">
      Start
    </button>
  </div>
</div>
```

## Header

```jsx
<div className="bg-black border-b border-neutral-800 px-6 py-4">
  <h1 className="text-white text-2xl font-bold">Welcome back, Max</h1>
  <p className="text-neutral-400 text-sm">Ready to focus?</p>
</div>
```

## Navigation Bar

```jsx
<div className="fixed bottom-0 left-0 right-0 bg-black border-t border-neutral-800 flex justify-around py-3">
  <button className="flex flex-col items-center">
    <span className="text-2xl mb-1">⏱</span>
    <span className="text-white text-xs">Home</span>
  </button>
  <button className="flex flex-col items-center">
    <span className="text-2xl mb-1">📊</span>
    <span className="text-neutral-600 text-xs">Stats</span>
  </button>
  <button className="flex flex-col items-center">
    <span className="text-2xl mb-1">⚙</span>
    <span className="text-neutral-600 text-xs">Settings</span>
  </button>
</div>
```

## Stats Card

```jsx
<div className="bg-neutral-900 rounded-lg p-4 grid grid-cols-3 gap-4">
  <div className="text-center">
    <p className="text-white text-2xl font-bold">12</p>
    <p className="text-neutral-400 text-xs">Today</p>
  </div>
  <div className="border-l border-r border-neutral-700">
    <p className="text-white text-2xl font-bold">4h</p>
    <p className="text-neutral-400 text-xs">Focused</p>
  </div>
  <div>
    <p className="text-white text-2xl font-bold">7</p>
    <p className="text-neutral-400 text-xs">Streak</p>
  </div>
</div>
```

## Tips

- Use `bg-black`, `bg-neutral-800`, `bg-neutral-900` for backgrounds
- Use `text-white`, `text-neutral-400`, `text-neutral-600` for text
- Use `border-neutral-700`, `border-neutral-800` for dividers
- Tailwind is fully available, so `px-`, `py-`, `flex`, etc all work
- The screen is 390px wide max, so width constraints apply

## Combining Components

Just replace the content in `src/App.jsx` inside the mockup's inner div:

```jsx
<div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col items-center justify-center">
  {/* Your components here */}
</div>
```

That's it! The iPhone frame will auto-size around your content.
