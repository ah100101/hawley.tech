import OpengraphImage from "@/components/opengraph-image";

export const alt = "Alex Hawley - Web Developer & Partner Solutions Manager";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return await OpengraphImage({
    title: "Alex Hawley",
    subtitle: "Partner Solutions Manager at Vercel",
  });
}
