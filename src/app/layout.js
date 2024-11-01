// app/layout.js
//SHOULD NEVER BE A CLIENT COMPONENT
import "./globals.css";

import LayoutHandler from "./LayoutHandler";
import { ThirdwebProvider } from "thirdweb/react";

export const metadata = {
  title: "BlockRide",
  description: "The decentralized transport system on Lisk Blockchain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThirdwebProvider>
          <LayoutHandler>{children}</LayoutHandler>
        </ThirdwebProvider>
      </body>
    </html>
  );
}

