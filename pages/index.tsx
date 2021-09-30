import * as React from 'react';
import type { NextPage } from 'next'
import copy from 'copy-to-clipboard';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [val, setVal] = React.useState('');
  function onChange({ target }: any) {
    setVal(target.value);
    copy(`${val}/auth/callback
${val}/offline/auth/callback
${val}/online/auth/callback`);
  }
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={val}
        onChange={onChange}
      />
      {
        val && (
        <code>
          {val}/auth/callback<br/>
          {val}/offline/auth/callback<br/>
          {val}/online/auth/callback<br/>
        </code>
        )
      }
    </div>
  )
}

export default Home
