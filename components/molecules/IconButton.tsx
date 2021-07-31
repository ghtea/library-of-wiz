import { Button, ButtonProps, } from "components/atoms";
import { Icon, IconProps } from "components/molecules";
import colors from "theme/colors"

export type IconButtonProps = ButtonProps & {
    src: string;
};

export const IconButton: React.FunctionComponent<IconButtonProps> = ({
    src,
    sx, 
    ...rest
}) => {
    
    return (
      <Button
            {...rest}
            sx={sx}
        >  
        <Icon src={src} sx={sx}/>  
      </Button>
)};