"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/providers/theme-provider";
import InfoBar from "@/components/infobar";
import { Provider } from "react-redux";
import store from "@/store/store";

const inter = Inter({ subsets: ["latin"] });
interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className={`flex flex-col overflow-hidden`}>
              <InfoBar />
              <div className='p-4 bg-Surface-Light'>{children}</div>
            </div>
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </Provider>
  );
};

export default Layout;
