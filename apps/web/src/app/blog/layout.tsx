import Background from "@/components/landing-page/background";
import Navbar from "@/components/landing-page/navbar";
import * as React from "react";




export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    // const [open, setOpen] = React.useState(false);
    // const {data : currentSession} = useSession();

    return (
      <Background>
        <div className="w-full">
          <Navbar/>
          <div className="mt-5 p-5 z-10">
          {children}
          </div>
        </div>
      </Background>
    );
  }