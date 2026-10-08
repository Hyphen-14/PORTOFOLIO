import { keys } from './input.js';

export class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 16;
    this.height = 24;
    this.speed = 100;
    this.direction = 'down';
    this.isMoving = false;
  }

  update(dt, tilemap) {
    let dx = 0, dy = 0;
    if (keys.up) { dy = -1; this.direction = 'up'; }
    else if (keys.down) { dy = 1; this.direction = 'down'; }
    if (keys.left) { dx = -1; this.direction = 'left'; }
    else if (keys.right) { dx = 1; this.direction = 'right'; }

    if (dx !== 0 && dy !== 0) {
      const length = Math.sqrt(dx * dx + dy * dy);
      dx /= length; dy /= length;
    }

    this.isMoving = (dx !== 0 || dy !== 0);

    if (this.isMoving) {
      const nextX = this.x + dx * this.speed * dt;
      const nextY = this.y + dy * this.speed * dt;
      
      const pRight = Math.floor((nextX + this.width/2 - 2) / tilemap.tileSize);
      const pLeft = Math.floor((nextX - this.width/2 + 2) / tilemap.tileSize);
      const pTop = Math.floor((nextY - 4) / tilemap.tileSize);
      const pBottom = Math.floor(nextY / tilemap.tileSize);

      if (!tilemap.isSolid(pLeft, pTop) && !tilemap.isSolid(pRight, pTop) &&
          !tilemap.isSolid(pLeft, pBottom) && !tilemap.isSolid(pRight, pBottom)) {
        this.x = nextX;
        this.y = nextY;
      }
    }
  }

  render(ctx, camera) {
    const rx = Math.round(this.x - camera.x - this.width / 2);
    const ry = Math.round(this.y - camera.y - this.height);

    // shadow
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.beginPath();
    ctx.ellipse(rx + this.width/2, ry + this.height - 2, this.width/2, 4, 0, 0, Math.PI*2);
    ctx.fill();

    // body
    ctx.fillStyle = '#222'; // mafia outfit
    ctx.fillRect(rx, ry + 8, this.width, 16);
    
    ctx.fillStyle = '#df7126'; // skin
    ctx.fillRect(rx + 2, ry, 12, 12);
    
    // Eyes
    ctx.fillStyle = '#000';
    if (this.direction === 'down') {
      ctx.fillRect(rx + 4, ry + 4, 2, 2);
      ctx.fillRect(rx + 10, ry + 4, 2, 2);
    } else if (this.direction === 'right') {
      ctx.fillRect(rx + 10, ry + 4, 2, 2);
    } else if (this.direction === 'left') {
      ctx.fillRect(rx + 4, ry + 4, 2, 2);
    }
  }

  getFacingTile(tileSize) {
    let tx = Math.floor(this.x / tileSize);
    let ty = Math.floor(this.y / tileSize);
    if (this.direction === 'up') ty -= 1;
    if (this.direction === 'down') ty += 1;
    if (this.direction === 'left') tx -= 1;
    if (this.direction === 'right') tx += 1;
    return { tx, ty };
  }
}
