import { Close, Favorite, FlashOn, Replay, StarRate } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import './SwipeButtons.css';
function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        <IconButton className='swipeButtons_repeat'>
            <Replay fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons_left'>
            <Close fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons_star'>
            <StarRate fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons_right'>
            <Favorite fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons_lightning'>
            <FlashOn fontSize='large' />
        </IconButton>
    </div>
  )
}

export default SwipeButtons