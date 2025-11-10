import { createFileRoute } from '@tanstack/react-router';

import { BookHeart, Ear, HandHeart, ListCheck, Music4, NotepadText } from 'lucide-react';
import { SignInButton } from '@clerk/clerk-react';
import { EmeraldButton } from '@/components/ui/Button';

import IndexCard from '@/components/ui/IndexCard';

export const Route = createFileRoute('/')({ component: App });

function App() {
  return (
    <article>
      <section className='items-center justify-center text-center'>
        <h1>Track albums and songs you&apos;ve listened to.</h1>
        <h2>Track your favorites.</h2>
        <h3>Share how they make you feel</h3>
        <EmeraldButton>
          <SignInButton mode='modal'>
            <p className='hover:cursor-pointer'>Create Free Account!</p>
          </SignInButton>
        </EmeraldButton>
        <p className='text-center font-medium text-gray-400'>The Social Network for Music Lovers</p>
      </section>
      <section>
        <p>Audio Technical Wants You to...</p>
        <div className='grid w-full grid-cols-1 gap-3 md:grid-cols-3'>
          <IndexCard>
            <div className='flex w-full items-center gap-3'>
              <Music4 size={150} />
              <p>
                Keep track of every album and song you&apos;ve ever listened to (you can just start from the day you
                joined).
              </p>
            </div>
          </IndexCard>
          <IndexCard>
            <div className='flex w-full items-center gap-3'>
              <HandHeart size={150} />
              <p>Like your favorite albums, lists, and songs.</p>
            </div>
          </IndexCard>
          <IndexCard>
            <div className='flex w-full items-center gap-3'>
              <NotepadText size={150} />
              <p>Leave notes for the artists, your friends, and other members of the community who you can follow.</p>
            </div>
          </IndexCard>
          <IndexCard>
            <div className='flex w-full items-center gap-3'>
              <Ear size={150} />
              <p>
                Rate each song and album on a ten ear scale based on your nuiances preferences to share your reaction
                with the world.
              </p>
            </div>
          </IndexCard>
          <IndexCard>
            <div className='flex w-full items-center gap-3'>
              <BookHeart size={150} />
              <p>Keep a diary of your listening history.</p>
            </div>
          </IndexCard>
          <IndexCard>
            <div className='flex w-full items-center gap-3'>
              <ListCheck size={150} />
              <p>
                Keep and share lists on any topic and keep an &quot;audio log&quot; of what you&apos;re listening to.
              </p>
            </div>
          </IndexCard>
        </div>
      </section>
    </article>
  );
}
