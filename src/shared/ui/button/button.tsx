import {Button} from '@gravity-ui/uikit';
import cn from 'classnames';
import {FC} from 'react';
export interface CustomButtonProps {
    className: string;
    children: JSX.Element | string;
}

export const CustomButton: FC<CustomButtonProps> = ({children, className, ...rest}) => (
    <div>
        <Button
            className={cn(
                'w-full text-[#ffffff] hover:text-[#ffffff] active:text-[#ffffff] focus:text-[#ffffff]',
                className,
            )}
            {...rest}
        >
            {children}
        </Button>
    </div>
);
