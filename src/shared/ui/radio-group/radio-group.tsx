import {RadioGroup, RadioGroupOption} from '@gravity-ui/uikit';
import cn from 'classnames';
import {FC} from 'react';

export interface RadioGroupCustomProps {
    options: RadioGroupOption[];
    className?: string;
}

export const RadioGroupCustom: FC<RadioGroupCustomProps> = ({options, className, ...rest}) => (
    <div className="">
        <RadioGroup {...rest} options={options} size="l" className={cn('w-full', className)} />
    </div>
);
