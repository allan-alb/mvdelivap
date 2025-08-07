# MVVM Delivery App

A cross-platform delivery app built with React Native and Expo, following the MVVM (Model-View-ViewModel) architectural pattern. The app features product listing, category filtering, and infinite scroll for a seamless user experience.

<p align="center">
  <img src="https://github.com/user-attachments/assets/b52239c2-39a4-483a-a25c-99a7698ff677" width="300" />
</p>


## Features

- **Product Listing:** Browse products organized by categories.
- **Category Filtering:** Filter products by category using a horizontal scrollable list.
- **Infinite Scroll:** Automatically loads more products as you scroll.
- **MVVM Architecture:** Clean separation of concerns for maintainability and scalability.
- **TypeScript Support:** Ensures type safety across the codebase.

## Project Structure

```
src/
  app/                # App entry and layout
  shared/
    api/              # API layer (e.g., delivery-api.ts)
    interfaces/       # TypeScript interfaces and types
    services/         # Business logic and data fetching
    utils/            # Utility functions
  ViewModels/
    Home/             # Home screen MVVM components
      components/     # UI components (Header, ProductItem)
```

## Libraries & Tools

- **React Native**: UI framework for building native apps
- **Expo**: Toolchain for React Native development
- **@tanstack/react-query**: Data fetching and caching
- **Axios**: HTTP client for API requests
- **TypeScript**: Static type checking

## Architectural Patterns

- **MVVM (Model-View-ViewModel):**
  - `model.tsx` files: Contain state management and business logic
  - `view.tsx` files: Presentational components, receive data and actions via props
  - Shared services and utilities for API and data formatting
- **Separation of Concerns:**
  - API, services, interfaces, and utilities are modularized
  - Components are organized by feature and responsibility

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm start
   ```
3. **Run on device or emulator:**
   - Android: `npm run android`
   - iOS: `npm run ios`
   - Web: `npm run web`

## Scripts

- `npm start` — Start Expo development server
- `npm run android` — Run on Android device/emulator
- `npm run ios` — Run on iOS device/simulator
- `npm run web` — Run in web browser

## License

MIT
