import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
// import {
//   AlertAlertIcon,
//   AlertErrorIcon,
//   AlertInfoIcon,
//   AlertSuccessIcon,
//   AlertWarningIcon,
// } from "./alert-svgs";



const alertVariants = cva("relative rounded-2xl p-6 text-left", {
  variants: {
    variant: {
      info: "text-[#3DC5FA] bg-[linear-gradient(90deg,rgba(61,197,250,0.15)_0%,rgba(61,197,250,0.1)_100%),radial-gradient(100%_608.33%_at_0%_50%,rgba(61,197,250,0.15)_0%,rgba(61,197,250,0.05)_100%)]",
      success:
        "text-[#3CEEAE] bg-[linear-gradient(90deg,rgba(60,238,174,0.15)_0%,rgba(60,238,174,0.1)_100%),radial-gradient(100%_608.33%_at_0%_50%,rgba(60,238,174,0.15)_0%,rgba(60,238,174,0.05)_100%)]",
      alert:
        "text-[#9D72FF] bg-[linear-gradient(90deg,rgba(157,114,255,0.15)_0%,rgba(157,114,255,0.1)_100%),radial-gradient(100%_608.33%_at_0%_50%,rgba(157,114,255,0.15)_0%,rgba(157,114,255,0.05)_100%)]",
      warning:
        "text-[#FFD55D] bg-[linear-gradient(90deg,rgba(255,213,93,0.15)_0%,rgba(255,213,93,0.1)_100%),radial-gradient(100%_608.33%_at_0%_50%,rgba(255,213,93,0.15)_0%,rgba(255,213,93,0.05)_100%)]",
      error:
        "text-[#FB1048] bg-[linear-gradient(90deg,rgba(251,16,72,0.15)_0%,rgba(251,16,72,0.1)_100%),radial-gradient(100%_608.33%_at_0%_50%,rgba(251,16,72,0.15)_0%,rgba(251,16,72,0.05)_100%)]",
    },
    backgroundVariants: {
      info: "bg-[linear-gradient(90deg,rgba(61,197,250,0.15)_0%,rgba(61,197,250,0.1)_100%)] p-[.75px]",
      success:
        "bg-[linear-gradient(90deg,rgba(60,238,174,0.15)_0%,rgba(60,238,174,0.1)_100%)] p-[.75px]",
      alert:
        "bg-[linear-gradient(90deg,rgba(157,114,255,0.15)_0%,rgba(157,114,255,0.1)_100%)] p-[.75px]",
      warning:
        "bg-[linear-gradient(90deg,rgba(255,213,93,0.15)_0%,rgba(255,213,93,0.1)_100%)] p-[.75px]",
      error:
        "bg-[linear-gradient(90deg,rgba(251,16,72,0.15)_0%,rgba(251,16,72,0.1)_100%)] p-[.75px]",
    },
  },

  defaultVariants: {
    variant: "info",
  },
});
// TODO: Colors are still to light. Not sure if gradient is correct.
// TODO: Border is not showing correctly
const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div className={cn(className)}>
    <div className={cn(alertVariants({ backgroundVariants: variant }))}>
      <div ref={ref} role="alert" className={cn(alertVariants({ variant }))} {...props} />
    </div>
  </div>
));
Alert.displayName = "Alert";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div className="flex flex-row gap-4">
    <div className="pr-3 pt-2">{variant ? getSvg(variant) : null}</div>
    <div ref={ref} className={cn("my-auto", className)} {...props} />
  </div>
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription };

function getSvg(variant: string) {
  switch (variant) {
    case "info":
      return <AlertInfoIcon />;
    case "success":
      return <AlertSuccessIcon />;
    case "alert":
      return <AlertAlertIcon />;
    case "warning":
      return <AlertWarningIcon />;
    case "error":
      return <AlertErrorIcon />;
    default:
      return <AlertInfoIcon />;
  }
}


//  Alert SVG Icons

const AlertInfoIcon = (_props: any) => {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 16.5V19.5" stroke="#3DC5FA" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M16.5 14.25C16.9142 14.25 17.25 13.9142 17.25 13.5C17.25 13.0858 16.9142 12.75 16.5 12.75C16.0858 12.75 15.75 13.0858 15.75 13.5C15.75 13.9142 16.0858 14.25 16.5 14.25Z"
          fill="#3DC5FA"
        />
        <path
          d="M16.5 24.5C20.9183 24.5 24.5 20.9183 24.5 16.5C24.5 12.0817 20.9183 8.5 16.5 8.5C12.0817 8.5 8.5 12.0817 8.5 16.5C8.5 20.9183 12.0817 24.5 16.5 24.5Z"
          stroke="#3DC5FA"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  const AlertSuccessIcon = (_props: any) => {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.5 16.5L15.5 18.5L19.5 14.5"
          stroke="#3CEEAE"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 24.5C20.9183 24.5 24.5 20.9183 24.5 16.5C24.5 12.0817 20.9183 8.5 16.5 8.5C12.0817 8.5 8.5 12.0817 8.5 16.5C8.5 20.9183 12.0817 24.5 16.5 24.5Z"
          stroke="#3CEEAE"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  const AlertAlertIcon = (_props: any) => {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 13.5V16.5" stroke="#9D72FF" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M16.5 20.25C16.9142 20.25 17.25 19.9142 17.25 19.5C17.25 19.0858 16.9142 18.75 16.5 18.75C16.0858 18.75 15.75 19.0858 15.75 19.5C15.75 19.9142 16.0858 20.25 16.5 20.25Z"
          fill="#9D72FF"
        />
        <path
          d="M16.5 24.5C20.9183 24.5 24.5 20.9183 24.5 16.5C24.5 12.0817 20.9183 8.5 16.5 8.5C12.0817 8.5 8.5 12.0817 8.5 16.5C8.5 20.9183 12.0817 24.5 16.5 24.5Z"
          stroke="#9D72FF"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  const AlertWarningIcon = (_props: any) => {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 13.5V16.5" stroke="#FFD55D" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M16.5 20.25C16.9142 20.25 17.25 19.9142 17.25 19.5C17.25 19.0858 16.9142 18.75 16.5 18.75C16.0858 18.75 15.75 19.0858 15.75 19.5C15.75 19.9142 16.0858 20.25 16.5 20.25Z"
          fill="#FFD55D"
        />
        <path
          d="M25.2918 21.1356L17.9961 8.36824C17.6893 7.83134 17.1184 7.5 16.5 7.5C15.8816 7.5 15.3107 7.83134 15.0039 8.36824L7.70822 21.1356C7.57177 21.3744 7.5 21.6447 7.5 21.9197C7.5 22.7925 8.20753 23.5 9.08032 23.5H23.9197C24.7925 23.5 25.5 22.7925 25.5 21.9197C25.5 21.6447 25.4282 21.3744 25.2918 21.1356Z"
          stroke="#FFD55D"
        />
      </svg>
    );
  }
  const AlertErrorIcon = (_props: any) => {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 12.5V15.5" stroke="#FB1048" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M16.5 19.25C16.9142 19.25 17.25 18.9142 17.25 18.5C17.25 18.0858 16.9142 17.75 16.5 17.75C16.0858 17.75 15.75 18.0858 15.75 18.5C15.75 18.9142 16.0858 19.25 16.5 19.25Z"
          fill="#FB1048"
        />
        <path
          d="M24.8251 14.8251L18.2071 8.20711C17.7544 7.75435 17.1403 7.5 16.5 7.5C15.8597 7.5 15.2456 7.75435 14.7929 8.20711L8.17488 14.8251C7.74276 15.2572 7.5 15.8433 7.5 16.4544C7.5 17.1189 7.78683 17.751 8.28687 18.1885L14.7474 23.8415C15.2326 24.266 15.8553 24.5 16.5 24.5C17.1447 24.5 17.7674 24.266 18.2526 23.8415L24.7131 18.1885C25.2132 17.751 25.5 17.1189 25.5 16.4544C25.5 15.8433 25.2572 15.2572 24.8251 14.8251Z"
          stroke="#FB1048"
        />
      </svg>
    );
  }