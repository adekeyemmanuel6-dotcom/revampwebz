export function photoUrl(seed: string, width: number, height: number) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
}

export function avatarUrl(seed: string) {
  // pravatar serves a stable set of real headshot photos, cycled by numeric id
  const n = Math.abs(hash(seed)) % 70 + 1;
  return `https://i.pravatar.cc/160?img=${n}`;
}

function hash(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return h;
}
