# 🔒 FocusLock — Android Focus & App Blocker

> A **kiosk-style focus lock app** for Android built with **MIT App Inventor 2**.  
> Block distractions, set timers, and stay productive — all secured with a PIN.

---

## 📸 Screenshots

| Home Screen | Block Screen | Settings |
|------------|-------------|----------|
| Start Focus Mode, Settings | Full-screen block overlay + countdown | PIN, timer & app whitelist |

---

## ✨ Features

- 🔐 **PIN Protection** — All actions gated behind a user-set PIN (default: `1234`)
- 🚫 **Focus Block Screen** — Full dark overlay when Focus Mode is active; back button is disabled
- ⏱ **Countdown Timer** — Set how long to focus (in minutes); auto-unlocks when time's up
- 📱 **Allowed Apps List** — Whitelist app names that remain accessible
- 💾 **Persistent Settings** — PIN, app list & timer saved via TinyDB (survive app restarts)
- 🔓 **Hidden Unlock Button** — Nearly-invisible emergency exit requiring correct PIN

---

## 📂 Project Structure

```
FocusLock/
├── FocusLock.aia                          ← Import into MIT App Inventor
└── aia_src/
    ├── youngandroidproject/
    │   └── project.properties             ← App metadata
    └── src/appinventor/ai_focuslock/FocusLock/
        ├── Screen1.scm / Screen1.bky      ← Home Screen (components + blocks)
        ├── Screen2.scm / Screen2.bky      ← Focus/Block Screen
        └── Screen3.scm / Screen3.bky      ← Settings Screen
```

---

## 🚀 Getting Started

### Option A — Import the .aia (Easiest)

1. Go to **[ai2.appinventor.mit.edu](https://ai2.appinventor.mit.edu)** and sign in
2. Click **Projects → Import project (.aia) from my computer**
3. Select **`FocusLock.aia`**
4. Build & test using MIT AI2 Companion or export as APK

### Option B — Build from Source

The `aia_src/` folder contains all raw XML source files:
- `.scm` files define UI components (JSON inside `#| ... |#` wrappers)
- `.bky` files define Blockly logic (standard Blockly XML)

---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Navy | `#1A1A2E` | App background |
| Dark Navy | `#16213E` | Cards & inputs |
| Coral Red | `#E94560` | Primary actions |
| Teal | `#64FFDA` | Timer & success |
| Steel Gray | `#8892B0` | Secondary text |

---

## 💾 TinyDB Keys Reference

| Key | Type | Description |
|-----|------|-------------|
| `userPIN` | Text | User's PIN (default: `1234`) |
| `allowedApps` | List | Whitelisted app names |
| `timerMinutes` | Number | Session duration in minutes |
| `timerEnabled` | Boolean | Whether countdown is active |
| `focusActive` | Boolean | Current focus mode state |

---

## ⚠️ Limitations

MIT App Inventor **cannot natively detect the foreground app** (requires Android Accessibility API + a custom extension). FocusLock works as a **lock screen / honor system** — users enter Focus Mode voluntarily and are kept on the block screen via back-button override.

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

*Built with ❤️ using [MIT App Inventor 2](https://ai2.appinventor.mit.edu)*
