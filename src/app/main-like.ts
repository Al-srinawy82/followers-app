import { LikeComponent } from './like.component';

let component = new LikeComponent(10, true);
component.onClick();
console.log(
  `likesCount: ${component.likeCount}, isSelected: ${component.isSelected}`
);
