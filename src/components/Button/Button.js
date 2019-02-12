import React from 'react';
import styles from './Button.module.scss';

const Button = ({ href, children }) => (
    <>
        {
            href ? (
                <a
                    href={href}
                    target="_blank"
                    className={styles.button}
                    rel="noopener noreferrer"
                >
                    visit twitter page
                </a >
            ) : (
                    <button className={styles.button}>
                        {children}
                    </button>
                )
        }
    </>


);

console.log(styles.button)

export default Button;