import OpengraphImage from "@/components/opengraph-image";

export const runtime = "edge";
export const alt = "About - Alex Hawley";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return await OpengraphImage({
    title: "About Alex Hawley",
    subtitle: "Web developer, Chicagoan, and ultrarunner",
  });
}
