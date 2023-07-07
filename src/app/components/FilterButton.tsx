import { FC } from 'react';

export const FilterButton: FC<FilterButtonProps> = ({text, iconSrc}) => {
    return (<button type="button"><img src={iconSrc} /><span>{text}</span></button>)
}