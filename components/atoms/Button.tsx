import { Button as ThemeUiButton, ButtonProps as ThemeUiButtonProps } from "theme-ui"
import {useSx, Sx} from "libraries/theme-ui"

export type ButtonProps = Omit<ThemeUiButtonProps, "sx"> & {
    sx?: Sx
};

export const Button: React.FunctionComponent<ButtonProps> = ({
  sx,
  ...rest
}) => {

  const realSx = useSx({
    background: "none",
    ...sx,
  })

  return ( 
    <ThemeUiButton {...rest} sx={realSx} />
  );
}