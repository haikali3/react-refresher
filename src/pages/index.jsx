import { Inter } from 'next/font/google';
import PostList from '@/components/PostList';
import MainHeader from '@/components/MainHeader';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }
  return (
    <main>
      <>
        <MainHeader onCreatePost={showModalHandler} />
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </>
    </main>
  );
}
