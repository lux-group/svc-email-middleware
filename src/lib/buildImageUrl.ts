const MOBILE_BUCKET_ID =
  process.env.MOBILE_BUCKET_ID || "5bbbf546d98e0373c1f51287";
const DESKTOP_BUCKET_ID =
  process.env.DESKTOP_BUCKET_ID || "5bbbf546c302b72b28aab603";

export default function buildImageUrl(
  productCode: string,
  layout: string
): string {
  if (layout === "mobile") {
    return `https://pi-templates.s3.us-east-1.amazonaws.com/production/${MOBILE_BUCKET_ID}/${productCode}~1.png`;
  } else {
    return `https://pi-templates.s3.us-east-1.amazonaws.com/production/${DESKTOP_BUCKET_ID}/${productCode}~1.png`;
  }
}
