import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';

const myTheme = {
  // Theme object to extends default dark theme.
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <ImageEditor
          includeUI={{
            loadImage: {
              path: 'img/sampleImage.jpg',
              name: 'SampleImage',
            },
            theme: myTheme,
            menu: ['shape', 'filter'],
            initMenu: 'filter',
            uiSize: {
              width: '1000px',
              height: '700px',
            },
            menuBarPosition: 'bottom',
          }}
          cssMaxHeight={500}
          cssMaxWidth={700}
          selectionStyle={{
            cornerSize: 20,
            rotatingPointOffset: 70,
          }}
          usageStatistics={true}
        />
    </div>
  )
}
