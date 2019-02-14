import React from 'react';
import styles from './Button.module.scss';

const Button = ({ href, children, secondary, ...props }) => {

    const buttonClass = secondary ? styles.secondary : styles.button


    return (
        <>
            {
                href ? (
                    <a
                        href={href}
                        target="_blank"
                        className={buttonClass}
                        rel="noopener noreferrer"
                    >
                        visit twitter page
                </a >
                ) : (
                        <button className={buttonClass}{...props}>
                            {children}
                        </button>
                    )
            }
        </>


    );
}

console.log(styles.button)

export default Button;