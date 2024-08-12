import { CustomButtonType } from "@/types/button";
import { Button, CircularProgress } from "@mui/material";

export const CustomButton = (props: CustomButtonType) => {
  const {
    children,
    type = "submit",
    variant = "contained",
    onClick,
    color = "primary",
    isLoading, isFullWidth,
    disabled,
  } = props;
  return (
    <Button
      type={type}
      variant={variant}
      fullWidth={isFullWidth}
      color={color}
      onClick={onClick}
      disableRipple
      disabled={disabled}
      sx={{
        height:'36px !important',
        // maxWidth:'20px'
      }}
    >
      <div className="flex gap-2 items-center text-white">
        {children}
        {isLoading ? (
          <CircularProgress
            size="22px"
            sx={{
              color: 'white',
            }}
          />
        ) : null}
      </div>
    </Button>
  );
};
