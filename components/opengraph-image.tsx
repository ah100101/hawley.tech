import { ImageResponse } from "next/og";

export type Props = {
  title?: string;
  subtitle?: string;
};

async function loadFont(fontName: string, weight: number = 400) {
  try {
    const fontUrl = `https://fonts.googleapis.com/css2?family=${fontName.replace(
      " ",
      "+"
    )}:wght@${weight}&display=swap`;
    const response = await fetch(fontUrl);
    const css = await response.text();
    const fontMatch = css.match(/url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/);

    if (!fontMatch?.[1]) {
      return null;
    }

    const fontResponse = await fetch(fontMatch[1]);
    return await fontResponse.arrayBuffer();
  } catch (error) {
    // Font loading failed, return null to use fallback
    return null;
  }
}

export default async function OpengraphImage(
  props?: Props
): Promise<ImageResponse> {
  const title = props?.title || "Alex Hawley";
  const subtitle = props?.subtitle || "Partner Solutions Manager at Vercel";

  // Load fonts
  const playfairFont = await loadFont("Playfair Display", 700);
  const ibmPlexMonoFont = await loadFont("IBM Plex Mono", 400);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          backgroundColor: "black",
          padding: "80px",
          fontFamily: '"IBM Plex Mono", monospace',
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "32px",
          }}
        >
          <h1
            style={{
              fontSize: title.length > 30 ? "64px" : "72px",
              fontWeight: 700,
              color: "white",
              margin: 0,
              letterSpacing: "-0.02em",
              fontFamily: '"Playfair Display", serif',
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              style={{
                fontSize: "28px",
                color: "#a3a3a3",
                margin: 0,
                fontWeight: 400,
                lineHeight: 1.4,
                textAlign: "center",
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        ...(playfairFont
          ? [
              {
                name: "Playfair Display",
                data: playfairFont,
                style: "normal" as const,
                weight: 700 as const,
              },
            ]
          : []),
        ...(ibmPlexMonoFont
          ? [
              {
                name: "IBM Plex Mono",
                data: ibmPlexMonoFont,
                style: "normal" as const,
                weight: 400 as const,
              },
            ]
          : []),
      ],
    }
  );
}
