import { Box, BoxProps } from "components/atoms"
import { ReactSVG } from 'react-svg'
import colors from "theme/colors";

export type IconProps = BoxProps & {
  src: string;
};

export const Icon: React.FunctionComponent<IconProps> = ({
  src,
  sx,
  ...rest
}) => {

  return (
    <Box {...rest} sx={{
      size: "24px",
      color: colors["@text"],
      ...sx
    }} > 
      <ReactSVG src={src} style={{width: "100%", height: "100%"}} />  
    </Box>
  );
}