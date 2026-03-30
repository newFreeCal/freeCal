import type { ReactNode } from "react";

type FreshChatProviderProps = {
  children: ReactNode;
};

export default function FreshChatProvider({ children }: FreshChatProviderProps) {
  return <>{children}</>;
}
