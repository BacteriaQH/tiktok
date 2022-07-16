import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';

import styles from './DefaultImage.module.scss';

const DefaultImage = forwardRef(({ src, alt, className, fallback: customFallback, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        if (customFallback) {
            setFallback(customFallback === 'male' ? images.maleDefault : images.femaleDefault);
        } else {
            setFallback(images.noImage);
        }
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});
export default DefaultImage;
