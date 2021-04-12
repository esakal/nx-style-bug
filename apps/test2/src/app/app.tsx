import styles from './app.module.scss';
import './loose-styles.scss';

export function App() {
  return (
    <div className={styles.app}>

      <main>
        <div className={'section'}>
          <h3>loose style (stopped working)</h3>
          <div className={'loose-style'}></div>
        </div>

        <div className={'section'}>
          <h3>module style - single word (works)</h3>
          <div className={styles.test}></div>
        </div>

        <div className={'section'}>
          <h3>module style - multiple words (stopped working)</h3>
          <div className={styles.testMultipleWords}></div>
        </div>


        <div className={'section'}>
          <h3>global style (works)</h3>
          <div className={'global-style'}></div>
        </div>
      </main>
    </div>
  );
}

export default App;
