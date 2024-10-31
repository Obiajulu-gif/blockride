
# BlockRide Dashboard

> **Blockchain-Powered Platform for Transparent and Secure Mobility**

BlockRide is a decentralized application that leverages **Next.js** and **Lisk Blockchain** to create a seamless and transparent platform for ride-sharing, car rentals, and other mobility services. The platform connects drivers, riders, and investors in a decentralized, secure environment, using blockchain technology to ensure transparency and trust.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [Team Members](#team-members)
- [License](#license)

---

## Features

- **User-Friendly Dashboard**: A responsive and intuitive dashboard with a sidebar and navbar layout for quick access to key features.
- **Ride Management**: Allows users to book a trip, dispatch services, and monitor completed rides.
- **Reward System**: Track achievements and milestones with an integrated rewards system.
- **Blockchain-Powered Transactions**: Built on **Lisk Blockchain** for secure, decentralized transaction management.
- **Comprehensive Profile Management**: Users can manage their profile, track tasks, and view financial data.
- **Secure Wallet Integration**: Easily connect a blockchain wallet for secure payment and trip management.

---

## Technologies Used

The BlockRide project uses the following core technologies:

- **Next.js**: A React framework for server-rendered applications and static websites.
- **Lisk Blockchain**: Blockchain technology to power secure transactions and decentralized data management.
- **React Icons**: For consistent and high-quality icons across the dashboard interface.

---

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Obiajulu-gif/blockride.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd blockride
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Access the application:**

   Open your browser and go to `http://localhost:3000` to view the app.

---

## Project Structure

The project is organized as follows:

```
blockride/
├── public/               # Public assets (images, fonts)
├── src/
│   ├── components/       # Reusable components (Navbar, Sidebar, etc.)
│   ├── pages/            # Application routes (Next.js pages)
│   │   ├── index.js      # Landing page
│   │   └── dashboard/    # Dashboard-related pages and components
│   ├── styles/           # Global and component-specific styles
│   └── app/              # Next.js layout and app setup
├── .gitignore
├── package.json
└── README.md             # Project documentation
```

- **components**: Contains reusable UI components (e.g., `Sidebar`, `Navbar`, etc.).
- **pages**: The main routes for the application, divided between `index.js` (landing page) and `dashboard` for user-specific actions.
- **app**: Next.js layout and configuration for integrating global settings.

---

## Usage

### Running the Dashboard

- **Dashboard Layout**: Once logged in, users can access the main dashboard, where they’ll see:
  - **Overview**: Displays user statistics such as wallet balance, completed trips, and tasks.
  - **Wallet Integration**: Secure blockchain-powered wallet connection.
  - **Task Tracking**: Monitor progress on tasks and rewards.
  
### Core Components

The project consists of various modular components that form the foundation of the BlockRide platform:

- **Navbar**: A responsive navigation bar with wallet connection and search functionality.
- **Sidebar**: Contains links to key sections of the dashboard.
- **Overview**: Displays user stats and recent trip information.
- **Rewards**: Tracks achievements and milestones in a user-friendly format.

---

## Contributing

We welcome contributions! If you'd like to improve the project, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. **Commit your changes** and push to your forked repository:
   ```bash
   git commit -m "Add new feature"
   git push origin feature-name
   ```
4. **Create a pull request** to the `main` branch.

Please ensure that your code follows our coding standards and includes tests where applicable.

---

## Team Members

- **Okoye Emmanuel Obiajulu** - Project Lead and FullStack developer
- **Victoria Nwogu** - Project Manager
- **David Emulo** - UI/UX Designer
- **Olebuezie Chibuzor Damian** - Smart Contract developer

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For any inquiries or support, please reach out at [support@blockride.com](mailto:support@blockride.com).

--- 

