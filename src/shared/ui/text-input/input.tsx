import {TextInput} from '@gravity-ui/uikit';
import cn from 'classnames';
import {FC} from 'react';

export interface InputProps {
    errorMessage?: string;
    placeholder?: string;
    className?: string;
}

export const Input: FC<InputProps> = ({errorMessage, placeholder, className, ...rest}) => (
    <div>
        <TextInput
            {...rest}
            errorMessage={errorMessage}
            placeholder={placeholder}
            className={cn('w-full', className)}
            size="l"
        />
    </div>
);
