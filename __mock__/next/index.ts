interface Props {
  src: string | null;
  width: number;
  quality?: number;
}

export const mockedImageUrl = ({ src, width, quality }: Props) => {
  if (!src) return;
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality ?? 75}`;
};
