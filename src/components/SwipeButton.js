import React from 'react';
import "./SwipeButton.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TelegramIcon from '@material-ui/icons/Telegram';
import IconButton from '@material-ui/core/IconButton';

function SwipeButton() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButton_repeat">
        <FacebookIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton_left">
        <InstagramIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton_star">
        <TwitterIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton_right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton_Lightning">
        <TelegramIcon fontSize="large" />
      </IconButton>
    </div>
  )
}

export default SwipeButton
