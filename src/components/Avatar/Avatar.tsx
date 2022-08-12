import { ImgHTMLAttributes } from "react";
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  isOutlined?: boolean;
}

export function Avatar({ isOutlined = true, ...props}: AvatarProps) {
  return (
    <img 
      className={isOutlined ? styles.avatarOutlined : styles.avatar} 
      {...props}
    />
  )
}