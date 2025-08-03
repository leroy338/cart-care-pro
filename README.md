# Set up local project

Assigned To: Kevin Jenkins Date: August 1, 2025 Feature type: Documentation, Non
Feature Priority Level: Low Product: Cart Care App
(https://www.notion.so/Cart-Care-App-24199d7a4b3f81628705e7d3f870c6be?pvs=21)
Status: Not started Where?: Admin, All

## Local Environment Setup

We’re using:

- Expo Go
- Pnpm
- Supabase

---

# **Cart Care Pro - Setup Instructions**

This guide will walk you through setting up the Cart Care Pro project from
scratch, including installing dependencies, running the development server,
and accessing the app on your mobile device.

## **Prerequisites**

- **Node.js** (version 18 or higher) - Download here
- **Git** - Download here
- **Mobile device** (iOS or Android) with Expo Go app installed

## **Step 1: Install pnpm Globally**

First, install pnpm as your package manager globally:

bash

```jsx
# Using npm (recommended)
npm install -g pnpm

# Or using curl (macOS/Linux)
curl -fsSL https://get.pnpm.io/install.sh | sh -

# Or using PowerShell (Windows)
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

Verify pnpm is installed.

```jsx
pnpm --version
```

## **Step 2: Clone the Project**

Clone the Cart Care Pro repository:

```jsx
git clone <repository-url>
cd cart-care-pro
```

## **Step 3: Install Dependencies**

Install all project dependencies using pnpm:

```jsx
pnpm install
```

## **Step 4: Install Expo CLI**

Install the Expo CLI globally:

```jsx
pnpm add -g @expo/cli
```

Verify Expo CLI is installed:

```jsx
expo --version
```

## **Step 5: Start the Development Server**

Start the Expo development server:

```jsx
pnpm start
# or
expo start
```

This will:

- Start the Metro bundler
- Open the Expo DevTools in your browser
- Display a QR code in the terminal

## **Step 6: Install Expo Go on Your Mobile Device**

### **For iOS:**

1. Open the **App Store** on your iPhone
2. Search for "Expo Go"
3. Download and install the app

### **For Android:**

1. Open the **Google Play Store** on your Android device
2. Search for "Expo Go"
3. Download and install the app

## **Step 7: Connect Your Device**

**Option A: Scan QR Code (Recommended)**

1. **Open Expo Go** on your mobile device
2. **Tap "Scan QR Code"** in the app
3. **Point your camera** at the QR code displayed in your terminal or browser
4. The app will automatically load and open

**Option B: Manual Connection**

1. **Open Expo Go** on your mobile device
2. **Tap "Enter URL manually"**
3. **Enter the URL** shown in your terminal (usually starts with exp://)

## **Step 8: Development Workflow**

### **Making Changes**

- Edit files in your code editor
- Changes will automatically reload on your device
- No need to restart the development server

### **Debugging**

- **Shake your device** to open the developer menu
- **Enable hot reloading** for instant updates
- **View console logs** in your terminal

**Common Commands**

```jsx
# Start development server
pnpm start

# Start with tunnel (if local network doesn't work)
pnpm start --tunnel

# Clear cache and restart
pnpm start --clear

# Build for production
pnpm build

# Eject from Expo (if needed)
expo eject
```

## **Troubleshooting**

### **QR Code Not Working?**

- Ensure your **phone and computer are on the same WiFi network**
- Try using **tunnel mode**: pnpm start --tunnel
- Check if your **firewall is blocking the connection**

### **App Not Loading?**

- **Restart Expo Go** app
- **Clear Expo Go cache** (shake device → Settings → Clear Cache)
- **Restart the development server** with --clear flag

**Dependencies Issues?**

```jsx
# Clear all caches
pnpm store prune
rm -rf node_modules
pnpm install
```

**Metro Bundler Issues?**

```jsx
# Clear Metro cache
npx react-native start --reset-cache
# or
expo start --clear
```

**Project Structure:**

```jsx
cart-care-pro/
├── app/                    # Main app screens
│   ├── (tabs)/           # Tab navigation screens
│   │   ├── index.tsx     # Home screen
│   │   ├── explore.tsx   # Service stores
│   │   ├── cart.tsx      # Maintenance checklist
│   │   └── myClub.tsx    # Club information
│   └── _layout.tsx       # Root layout
├── components/            # Reusable components
│   ├── TopBar.tsx        # Top navigation bar
│   └── ui/               # UI components
├── contexts/             # React contexts
│   └── ThemeContext.tsx  # Theme management
├── constants/            # App constants
│   └── Colors.ts        # Color definitions
└── package.json          # Dependencies and scripts
```

## **Features Overview**

The Cart Care Pro app includes:

1. **Home Screen** - Dashboard with maintenance tasks, golf scores,
   news, and friend scores
2. **Service Stores** - Directory of golf cart service providers with contact
   information
3. **Maintenance Checklist** - Yearly preventative maintenance tasks with
   progress tracking
4. **My Club** - Club information, member directory, and group management
5. **Dark/Light Theme** - Automatic theme switching with manual override

## **Next Steps**

- **Customize the app** by editing the mock data in each screen
- **Add real API endpoints** to replace mock data
- **Implement user authentication** for personalized features
- **Add push notifications** for maintenance reminders
- **Deploy to app stores** using Expo Application Services (EAS)

## Resources

If you encounter any issues:

1. Check the [Expo documentation](https://docs.expo.dev/)
2. Review the [React Native documentation](https://reactnative.dev/)
3. Check the project's GitHub issues page
4. Ensure all dependencies are up to date
