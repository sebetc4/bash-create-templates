// Styles
import styles from './{{directory_name}}.module.scss';
// Libs
import { FC } from 'react';
// App

interface {{directory_name}}Props {}

export const {{directory_name}}: FC<{{directory_name}}Props> = () => {
  return (
    <div className={styles.{{directory_name_lower}}}>
      {{directory_name}}
    </div>
  );
}