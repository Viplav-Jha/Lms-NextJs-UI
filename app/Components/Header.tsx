"use-clinet";

import { useState, FC } from "react";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void; // A function that takes a boolean argument and does not return anything (void). It's used to control the state of the open property.
  activeItem: number;
};

export const Header: FC<Props> = (props) => {
  return <></>;
};
