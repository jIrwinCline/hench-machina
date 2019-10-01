import React from 'react';
import NewsFeed from './NewsFeed';
import Navigation from './Navigation';
import MasterForm from './MasterForm';

export default function Header() {
  return (
      <div>
      <NewsFeed />
      <MasterForm />
      <Navigation />
      </div>
  )
};