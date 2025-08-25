export type GalleryImage = {
  id: string;
  uri: string;
};

// 6 portrait images (remote). Replace with local assets later if desired.
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "1",
    uri: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "2",
    uri: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "3",
    uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "4",
    uri: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "5",
    uri: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop",
  },
];
