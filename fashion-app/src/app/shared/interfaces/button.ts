import React, { ReactNode } from "react";

export interface IButton {
  type?: string;
  text: string | ReactNode;
  classCol?: string;
  classButton: string;
  onClick?: (e?: any) => void;
}
