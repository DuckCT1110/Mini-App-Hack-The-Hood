# BuddyQuest

*A study timer with a little buddy who keep you company every minute during your focus time.*

## The Problem

Staying focused is hard, and generic timers do nothing to make the process feel supportive or motivating.

## What It Does

BuddyQuest is a customizable study timer paired with a small animated mascot that reacts to your session in real time. Pick a custom study duration, hit start, and your buddy stays with you through the whole session. They will be happy while you're focused, sleepy when you pause, and celebrating with you when you finish.

**Features:**
- Custom time picker (hours + minutes), similar to setting an alarm
- Start / Pause / Resume / Cancel controls
- A mascot that visually reacts to each state (studying, paused, finished)
- A supportive message and celebration when a session completes

## Tech Stack

- HTML
- CSS
- JavaScript (currently vanilla, no frameworks/libraries)

## How to Run It
1. Clone or download this repository.
2. Open `index.html` in any modern browser.

## How to Use It

1. Set your desired study time using the hour and minute dropdowns.
2. Click **Start**, your buddy wakes up and the countdown begins.
3. Click **Pause** any time to take a break; click it again to **Resume**.
4. Click **Cancel** to stop the session early and return to the time picker.
5. When the timer reaches zero, your buddy celebrates and shows a supportive message. Click **New Session** to set another timer.

## Known Limitations

- Timer state is not saved if the page is refreshed or closed mid-session
- No sound/notification when the timer finishes
- No music background
- Mascot only has a fixed set of emoji-based expressions right now, not custom art
- No account system, progress/streaks aren't tracked between sessions

## Future Work

- Custom mascot artwork and animations instead of emoji
- Sound/browser notification when a session ends
- Music background
- Session history and streak tracking
- Every completed study session earns user items/accessories for their buddy
- Connect with friends and swap items. This social system keeps user accompanied and motivated to hit study/work goals
- Mobile-friendly responsive layout
- Background/theme customization

Built for Mini App Project Hack the Hood
