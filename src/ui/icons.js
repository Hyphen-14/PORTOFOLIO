/**
 * Pixel-art icons defined as character maps and rendered to data URLs at runtime.
 * No image files needed and every icon shares the same crisp look.
 */

const PAL = {
  o: '#0a0a12',
  w: '#ffffff',
  g: '#b8bfd6',
  y: '#eab339',
  Y: '#fde06d',
  d: '#a07314',
  b: '#6b4220',
  B: '#8b5a2b',
  r: '#c42d3e',
  R: '#5e101b',
  p: '#f6e7c1',
  P: '#d9bf86',
  c: '#38e8ff',
  C: '#1c6f8a',
  n: '#2d43a8',
  k: '#16171d',
  s: '#b8c0d0',
  S: '#ffffff',
  t: '#6c7488',
};

const MAPS = {
  trophyGold: [
    '..oooooooo..',
    'ooyYyyyyyyoo',
    'oyoyYyyyydyo',
    'oyoyYyyyydyo',
    '.ooyYyyyydo.',
    '...oyyyydo..',
    '....oyydo...',
    '.....oyo....',
    '.....oyo....',
    '...oooooo...',
    '...obbbbo...',
    '..oooooooo..',
  ],
  scroll: [
    '.oooooooooo.',
    'oPppppppppPo',
    '.opppppppPo.',
    '.opbbbbbppo.',
    '.opppppppPo.',
    '.opbbbbppPo.',
    '.opppppppPo.',
    '.opbbbbbbpo.',
    '.opppppppPo.',
    'oPppppppppPo',
    '.oooooooooo.',
    '............',
  ],
  envelope: [
    '............',
    'oooooooooooo',
    'owowwwwwwowo',
    'owwowwwwowwo',
    'owwwowwowwwo',
    'owwwworrwwwo',
    'owwwwrRrwwwo',
    'owwwowrowwwo',
    'owwowwwwowwo',
    'owowwwwwwowo',
    'oooooooooooo',
    '............',
  ],
  cap: [
    '............',
    '.....oo.....',
    '...ookkoo...',
    '.ookkkkkkoo.',
    'okkkkkkkkkko',
    '.ookkkkkkooy',
    '...ookkoo.oy',
    '...okkkko.oy',
    '...okkkko.yY',
    '...oookoo.yy',
    '............',
    '............',
  ],
  shield: [
    '.oooooooooo.',
    'occcccCCCCCo',
    'occwcccCCCCo',
    'occwwccCCCCo',
    'occccccCCCCo',
    'oCCCCCCcccco',
    'oCCCCCCcccco',
    '.oCCCCCccco.',
    '.oCCCCCccco.',
    '..oCCCCcco..',
    '...oCCCco...',
    '....oooo....',
  ],
  sword: [
    '..........oo',
    '.........owo',
    '........owgo',
    '.......owgo.',
    '......owgo..',
    '.o...owgo...',
    '.oo.owgo....',
    '..oogoo.....',
    '...yoo......',
    '..yYyo......',
    '.oyy.oo.....',
    'oo..........',
  ],
  star: [
    '.....oo.....',
    '.....oYo....',
    '....oYYo....',
    'ooooyYYyoooo',
    'oyYYYYYYYYyo',
    '.oyYYYYYYyo.',
    '..oyYYYYyo..',
    '..oyYyyYyo..',
    '.oyYyooyYyo.',
    '.oyyo..oyyo.',
    'ooo......ooo',
    '............',
  ],
  lock: [
    '....oooo....',
    '...o....o...',
    '...o....o...',
    '...o....o...',
    '..oooooooo..',
    '..oyYYYYyo..',
    '..oyyooyyo..',
    '..oyyooyyo..',
    '..oyyyyyyo..',
    '..oddddddo..',
    '..oooooooo..',
    '............',
  ],
  cursor: [
    'o...........',
    'oo..........',
    'owo.........',
    'owwo........',
    'owwwo.......',
    'owwwwo......',
    'owwwwwo.....',
    'owwwwwwo....',
    'owwwwoooo...',
    'owwowwo.....',
    'owo.owwo....',
    'oo...owwo...',
    'o.....oo....',
  ],
  hand: [
    '.....ooooooo..',
    '....owwwwwwwo.',
    'ooooowwwoooooo',
    'owwwwwwwwwwwwo',
    'owwwwwwwoooooo',
    'owwwwwwwwwwo..',
    'owggwwwwooo...',
    'owggwwwwwwo...',
    '.oowwwwwooo...',
    '...oooooo.....',
  ],
};

// Silver trophy = gold trophy with a palette swap.
MAPS.trophySilver = MAPS.trophyGold.map((row) =>
  row.replace(/y/g, 's').replace(/Y/g, 'S').replace(/d/g, 't'),
);

const cache = new Map();

/** Render a map to a canvas (scale = pixel size). */
export function iconCanvas(name, scale = 1) {
  const map = MAPS[name];
  const h = map.length;
  const w = Math.max(...map.map((r) => r.length));
  const c = document.createElement('canvas');
  c.width = w * scale;
  c.height = h * scale;
  const ctx = c.getContext('2d');
  map.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      const col = PAL[ch];
      if (!col) return;
      ctx.fillStyle = col;
      ctx.fillRect(x * scale, y * scale, scale, scale);
    });
  });
  return c;
}

export function iconURL(name, scale = 1) {
  const key = name + '@' + scale;
  if (!cache.has(key)) cache.set(key, iconCanvas(name, scale).toDataURL());
  return cache.get(key);
}

/** <img> markup for an icon. */
export function icon(name, size = 24, alt = '') {
  return `<img class="pixel-icon" src="${iconURL(name, 1)}" width="${size}" height="${size}" alt="${alt}" ${alt ? '' : 'aria-hidden="true"'} />`;
}

/** Custom pixel cursors (only applied for precise pointers). */
export function installCursors() {
  if (!matchMedia('(pointer: fine)').matches) return;
  const root = document.documentElement.style;
  root.setProperty('--cursor', `url(${iconURL('cursor', 2)}) 0 0, auto`);
  root.setProperty('--cursor-pointer', `url(${iconURL('cursor', 2)}) 0 0, pointer`);
  root.setProperty('--hand-pointer', `url(${iconURL('hand', 2)})`);
}
